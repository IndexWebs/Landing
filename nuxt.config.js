export default {
  mode: "universal",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Index Webs",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.svg" },
      {
        rel: 'stylesheet',
        href: 'href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"',
      },
    ],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/axios"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
