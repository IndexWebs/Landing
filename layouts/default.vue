<template>
  <div>
    <Header @click="cart" @openMobileMenu="openMenu"/>
    <Cart @click="cart" :showCart="openCart" />
    <div class="py-16">
      <nuxt />
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/shared/Header.vue";
import eventBus from '@/plugins/eventBus';
import Footer from '~/components/shared/Footer.vue';
export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      openCart: false,
      showMobileMenu: false
    };
  },
  created() {
    // Escuchar el evento para abrir el carrito de compras
    eventBus.$on('addToCart', () => {
      this.openCart = true;
    });
  },
  methods: {
    cart() {
      this.openCart = !this.openCart;
    },
    openMenu(){
      console.log('in')
      this.showMobileMenu = !this.showMobileMenu;
    }
  },
};
</script>

<style></style>
