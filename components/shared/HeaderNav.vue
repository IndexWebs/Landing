<template>
  <header class="fixed w-full z-50">
    <nav class="bg-white border-gray-200 py-2.5 w-full px-8 md:px-20 2xl:px-40">
      <div class="flex flex-wrap items-center justify-between w-full">
        <button class="flex items-center">
          <img src="@/assets/images/Logo.png" class="h-9 mr-1 sm:h-9" alt="Landwind Logo" />
          <span class="self-center text-xl font-semibold whitespace-nowrap text-tertiary">Index</span>
        </button>

        <div class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
          <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <button @click="onClick('inicio')"
                class="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-primary lg:p-0"
               >Inicio</button>
            </li>
            <li>
              <button @click="onClick('nosotros')"
                class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary lg:p-0">Nosotros</button>
            </li>
            <li>
              <button @click="onClick('comunidad')"
                class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary lg:p-0">Comunidad</button>
            </li>
            <li>
              <button @click="onClick('contacto')"
                class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary lg:p-0">Contacto</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>

export default {
  name: "HeaderNav",

  methods: {
    onClick(buttonText){
      this.$emit("scroll-to-section", buttonText);
    }
  }
};
</script>
