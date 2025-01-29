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
        href: 'https://fonts.googleapis.com/css?family=Raleway:wght@100&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Raleway:wght@200&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Raleway:wght@300&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Raleway:wght@400&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Raleway:wght@500&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Raleway:wght@600&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Raleway:wght@700&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Raleway:wght@800&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Raleway:wght@900&display=swap',
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
