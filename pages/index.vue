<template>
  <div class="pb-8">
    <section class="flex flex-col items-start justify-center px-8 md:px-32 h-48 bg-secondary -mx-10 md:-mx-32 -mt-16 mb-8 banner bg-no-repeat"></section>
    <section class="-mt-20">
      <Categories @category-selected="filterProducts" />
      <div class="text-center pt-10 flex flex-col justify-center items-center">
        <h1 class="text-primary">Get Doggy Stickers!</h1>
        <p class="text-gray-400 leading-6">Times are tough. Liven up your home with some cute Doggy Stickers. 🐶</p>
      </div>
      <Catalog :products="filteredProducts" />
      <!-- <div class="pagination">
        <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
        <span>Page {{ currentPage }}</span>
        <button @click="nextPage">Next</button>
      </div> -->
    </section>
  </div>
</template>

<script>
import Categories from "~/components/catalog/Categories.vue";
import Catalog from "~/components/home/Catalog.vue";
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  components: {
    Catalog,
    Categories,
  },
  computed: {
    ...mapState(["filteredProducts", "currentPage", "selectedCategory"]),
  },
  methods: {
    ...mapActions(["fetchProducts", "filterProducts"]),
    ...mapMutations(["setCurrentPage"]),

    prevPage() {
      if (this.currentPage > 1) {
        this.setCurrentPage(this.currentPage - 1);
        this.fetchProducts();
      }
    },
    nextPage() {
      this.setCurrentPage(this.currentPage + 1);
      this.fetchProducts();
    },
    filterProducts(category) {
      this.filterProducts(category);
    },
  },
  created() {
    this.fetchProducts();
  },
};
</script>

<style>
.banner {
  background: url("https://firebasestorage.googleapis.com/v0/b/emprendimiento-01.appspot.com/o/banner-optimized.webp?alt=media&token=9801e769-8d77-4ebb-8912-76b065ad2ab9");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
