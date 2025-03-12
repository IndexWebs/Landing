<template>
  <div>
    <div>
      <nuxt />
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from '~/components/shared/Footer.vue';

export default {
  components: {
    Footer,
  },
  data() {
    return {
      openCart: false,
      showMobileMenu: false
    };
  },
};
</script>

<style></style>
