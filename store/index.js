import Vuex from "vuex";
import { db, firebase } from "@/plugins/firebase";
import "firebase/storage";
import { send } from "emailjs-com";
import emailjs from "emailjs-com";
import { useToast } from "vue-toastification"; // Importa useToast
import "vue-toastification/dist/index.css";

const createStore = () => {
  return new Vuex.Store({
    state: {
      products: [],
      categories: [],
      filteredProducts: [],
      product: {},
      cart: {
        items: [],
      },
      lastVisible: null, // Documento para el cursor
      firstVisible: null,
      currentPage: 1,
      pageSize: 10, // Número de productos por página
      selectedCategory: ""
    },
    mutations: {
      setProducts(state, products) {
        state.products = products;
      },
      setFilteredProducts(state, filteredProducts) {
        state.filteredProducts = filteredProducts;
      },
      setCategories(state, categories) {
        state.categories = categories;
      },
      setProduct(state, product) {
        state.product = product;
      },
      addItem(state, payload) {
        state.cart.items.push(payload);
      },
      removeItem(state, payload) {
        const index = state.cart.items.findIndex((item) => item.id === payload.id);
        if (index !== -1) {
          state.cart.items.splice(index, 1);
        }
      },
      setLastVisible(state, lastVisible) {
        state.lastVisible = lastVisible;
      },
      setFirstVisible(state, firstVisible) {
        state.firstVisible = firstVisible;
      },
      setCurrentPage(state, page) {
        state.currentPage = page;
      },
      setSelectedCategory(state, category) {
        state.selectedCategory = category;
      },
    },
    actions: {
      async fetchProducts({ commit, state }) {
        try {
          let query = db.collection("products").orderBy("name").limit(state.pageSize);

          // Si se ha seleccionado una categoría, filtrar por ella
          if (state.selectedCategory) {
            query = query.where("category", "==", state.selectedCategory);
          }

          // Para paginación hacia adelante
          if (state.currentPage > 1 && state.lastVisible) {
            query = query.startAfter(state.lastVisible);
          }

          const snapshot = await query.get();
          const products = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));

          commit("setProducts", products);
          commit("setFilteredProducts", products); // Filtrados se asignan a productos
          commit("setLastVisible", snapshot.docs[snapshot.docs.length - 1]); // Para la siguiente página
          commit("setFirstVisible", snapshot.docs[0]); // Para la página anterior
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      },
      // Acción para manejar el filtro por categoría y reiniciar la paginación
      async filterProducts({ commit, dispatch }, category) {
        commit("setSelectedCategory", category);
        commit("setCurrentPage", 1); // Reiniciar la página actual
        commit("setLastVisible", null); // Reiniciar el cursor
        await dispatch("fetchProducts");
      },
      async fetchCategories({ commit }) {
        try {
          const response = await db.collection("categories").get();
          const categories = response.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          commit("setCategories", categories);
        } catch (error) {
          console.error("Error fetching categories:", error);
        }
      },
      async fetchProductBySlug({ commit }, slug) {
        try {
          const ref = db.collection("products").where("handle", "==", slug);
          const snapshot = await ref.get();
          const product = snapshot.docs.shift().data();
          commit("setProduct", product);
        } catch (error) {
          console.error("Error fetching product:", error);
          commit("setProduct", {});
        }
      },
      async sendEmail(_, formData) {
        try {
          const response = await emailjs.send(
            "service_gxf5b4n",
            "template_wcys6nj",
            formData,
            "466fNtFvgqCs0Cc7v"
          );

          console.log("Respuesta de EmailJS:", response); // 🔍 Depuración
          return { success: response?.status === 200 }; // ✅ Asegura que devuelve un objeto
        } catch (error) {
          console.error("Error en sendEmail:", error);
          return { success: false, error }; // ✅ Devuelve un objeto incluso si falla
        }
      },
      async filterProducts({ commit }, category) {
        try {
          let query = db.collection("products");

          // Si se ha seleccionado una categoría específica, hacer la consulta filtrada
          if (category !== "") {
            query = query.where("category", "==", category);
          }

          const snapshot = await query.get();
          const filteredProducts = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));

          commit("setFilteredProducts", filteredProducts);
        } catch (error) {
          console.error("Error filtering products:", error);
        }
      },
      async updateProduct({ commit }, product) {
        try {
          const productQuery = await db
            .collection("products")
            .where("handle", "==", product.handle)
            .get();

          if (productQuery.empty) {
            throw new Error("Producto no encontrado");
          }

          const productId = productQuery.docs[0].id;
          const productRef = db.collection("products").doc(productId);

          await productRef.update({
            name: product.name,
            handle: product.handle,
            category: product.category,
            price: product.price,
            description: product.description,
          });

          console.log("Producto actualizado correctamente");

          // Vuelve a obtener los productos si es necesario
          const response = await db.collection("products").get();
          const products = response.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          commit("setProducts", products);
        } catch (error) {
          console.error("Error al actualizar el producto:", error);
          throw error;
        }
      },
      async uploadImage({ commit }, file) {
        try {
          const storageRef = firebase.storage().ref();
          const fileRef = storageRef.child(`products/${file.name}`);
          const snapshot = await fileRef.put(file);
          const downloadURL = await snapshot.ref.getDownloadURL();
          return downloadURL;
        } catch (error) {
          console.error("Error al subir el archivo:", error);
          throw error;
        }
      },
      async addProduct({ commit }, product) {
        try {
          // Subir la imagen a Firebase Storage
          const storageRef = firebase.storage().ref();
          const imageRef = storageRef.child(`products/${product.name}/${product.image.name}`);
          const snapshot = await imageRef.put(product.image);
          const downloadURL = await snapshot.ref.getDownloadURL();

          // Actualizar el producto con la URL de la imagen
          product.image = downloadURL;

          // Guardar el producto en Firestore
          await db.collection("products").add(product);

          // (Opcional) Fetch de nuevo los productos después de agregar uno nuevo
          const response = await db.collection("products").get();
          const products = response.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          commit("setProducts", products);
        } catch (error) {
          console.error("Error adding product:", error);
        }
      },
      async deleteProduct({ commit, dispatch }, id) {
        try {
          const ref = db.collection("products").doc(id);
          const doc = await ref.get();

          if (!doc.exists) {
            throw new Error("Producto no encontrado");
          }

          const data = doc.data();
          const imageUrl = data.image;

          await ref.delete();
          console.log("Documento eliminado correctamente");

          if (imageUrl) {
            const storageRef = firebase.storage().refFromURL(imageUrl);
            await storageRef.delete();
            console.log("Imagen eliminada de Firebase Storage.");
          }

          // Refresca los productos después de eliminar uno
          await dispatch("fetchProducts");
        } catch (error) {
          console.error("Error al eliminar el producto:", error);
          throw error;
        }
      },
    },
  });
};

export default createStore;
