<template>
  <footer class="relative bg-white pt-8 pb-6">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row w-full justify-between space-y-3 md:space-y-0">
        <div class="px-4">
          <nuxt-link to="/" class="flex space-x-2 items-center -m-1.5 p-1.5 mb-2">
            <button class="flex items-center">
          <img src="@/assets/images/Logo.png" class="h-9 mr-1 sm:h-9" alt="Landwind Logo" />
          <span class="self-center text-xl font-semibold whitespace-nowrap text-tertiary">Index</span>
        </button>
        </nuxt-link>
          <p class="w-6/12 text-xs">
            Somos el puente que conecta emprendedores. Comparte recursos, divide gastos y crece junto a otros como tú.
          </p>
        </div>
        <div class="items-end px-0 md:px-4">
          <div class="flex flex-wrap items-top mb-6">
            <div class="w-full lg:w-4/12 px-4">
              <span
                class="block uppercase text-primary text-opacity-70 text-xs font-semibold mb-2"
                >Contacto</span
              >
              <ul class="list-unstyled text-xs">
                <li>
                  <a
                    class="text-gray-800 hover:text-primary text-opacity-70 hover:text-opacity-70 transition-all ease-out duration-300 block pb-2"
                    href="#"
                    >inquieto.experiencias@gmail.com</a
                  >
                </li>
                <li>
                  <a
                    class="text-gray-800 hover:text-primary text-opacity-70 hover:text-opacity-70 transition-all ease-out duration-300 block pb-2"
                    href="+573137642466"
                    >3137642466</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-6 border-primary border-opacity-30" />
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-xs text-gray-600 py-1">
            Diseño y desarrollo by:
            <a
              href="#"
              class="text-gray-600 hover:secondary"
              >Index webs Creative team</a
            >.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>
