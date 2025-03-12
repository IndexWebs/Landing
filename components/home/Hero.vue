<template>
  <section ref="inicio" id="inicio"
    class="bg-secondarylight dark:bg-gray-900 flex flex-col justify-start md:justify-center pb-20 md:pb-0 h-auto md:h-[84vh] rounded-b-4xl px-8 md:px-20 2xl:px-40 space-y-6 md:space-y-0">
    <div class="grid w-full pt-20 pb-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
      <div
        class="mr-auto flex flex-col-reverse md:flex-col place-self-center lg:col-span-7 realative items-center md:items-start">
        <div class="flex flex-col justify-center md:justify-start items-center md:items-start">
          <h1 id="Title"
            class="font-extrabold leading-none tracking-tight mb-4 text-3xl md:text-6xl dark:text-white relative z-10 text-center md:text-left">
            Una comunidad de emprendedores,<br><span class="text-primary">creciendo juntos</span></h1>
          <p
            class="text-center md:text-left max-w-xs md:max-w-xl mb-12 font-light text-gray-500 dark:text-gray-400 relative z-10">
            Somos el puente que conecta emprendedores. Comparte recursos, divide gastos y crece junto a otros como tú.
          </p>
          <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4 relative z-10">
            <PrimaryButton @click="handleUnirse" text="Unete a la comunidad" />
          </div>
        </div>
        <HeroIlustration
          class="flex md:absolute h-auto w-full md:w-[60%] right-0 md:right-[2rem] top-0 md:top-[5rem] z-0" />
      </div>
      <div class="hidden lg:mt-0 lg:col-span-5 lg:flex relative">

        <!-- <ThreeScene /> -->
      </div>
    </div>
  </section>
</template>

<script>
import PrimaryButton from '../shared/PrimaryButton.vue';
import SecondaryButton from '../shared/SecondaryButton.vue';
import SectionOne from './SectionOne.vue';
import HeroIlustration from '@/components/svgs/HeroIlustration.vue';
import { gsap } from "gsap";

export default {
  name: "Hero",

  mounted() {
    gsap.registerPlugin(gsap.ScrollTrigger);

    gsap.from("#Title", {
      scale: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.5)",
      scrollTrigger: {
        trigger: "#Title",
        start: "top 75%",
        toggleActions: "play none none none"
      }
    });
  },

  methods: {
    handleUnirse() {
      var number = +59897955640;
      var pedido = "Hola! quisiera mas informacion sobre la comunidad de emprendedores!";
      window.open(
        `https://api.whatsapp.com/send?phone=${number}&text=%20${pedido}.`
      );
    },
  },
  components: {
    PrimaryButton,
    SecondaryButton,
    SectionOne,
    HeroIlustration
  }
};
</script>
