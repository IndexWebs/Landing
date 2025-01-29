<template>
  <section
    class="bg-secondarylight dark:bg-gray-900 flex flex-col justify-start md:justify-center pb-20 md:pb-0 h-auto md:h-[80vh] rounded-b-4xl px-8 md:px-20 2xl:px-40 space-y-6 md:space-y-0">
    <div class="grid w-full pt-20 pb-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
      <div class="mr-auto flex flex-col place-self-center lg:col-span-7 realative items-center md:items-start">
        <img src="@/assets/images/MobileHeroIllustration.svg"
          class="md:hidden block md:absolute w-full md:w-[65%] right-0 md:right-[5.5rem] top-0 md:top-[4.5rem] z-0 ml-6"
          alt="hero image">
        <h1
          class="font-extrabold leading-none tracking-tight mb-4 text-3xl md:text-6xl dark:text-white relative z-10 text-center md:text-left">
          Una comunidad de emprendedores,<br><span class="text-primary50">creciendo juntos</span></h1>
        <p class="text-center md:text-left max-w-xs md:max-w-xl mb-12 font-light text-gray-500 dark:text-gray-400 relative z-10">
          Somos el puente que conecta emprendedores. Comparte recursos, divide gastos y crece junto a otros como tú.</p>
        <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4 relative z-10">
          <PrimaryButton text="Unete a la comunidad" />
        </div>
        <img src="@/assets/images/HeroIllustration.svg"
          class="hidden md:block md:absolute w-full md:w-[65%] right-0 md:right-[5.5rem] top-0 md:top-[4.5rem] z-0"
          alt="hero image">
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

// import ThreeScene from "@/components/shared/ThreeScene.vue"

export default {
  name: "Hero",

  components: {
    PrimaryButton,
    SecondaryButton,
    SectionOne
  }
};
</script>
