const title = "Coming soon.";
const description = "Pulsar official website.";
const image = "https://i.ibb.co/z68VQz4/og-soon.png";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ["@plsr/nuxt-layer-base"],
  modules: ["@nuxtjs/google-fonts"],
  devtools: { enabled: true },
  // https://google-fonts.nuxtjs.org/getting-started/options
  googleFonts: {
    display: "swap",
    text: "soon.",
    families: {
      Muli: [900],
    },
  },
  app: {
    head: {
      title,
      charset: "utf-8",
      htmlAttrs: { lang: "en-US" },
      viewport: "width=device-width, initial-scale=1",
      meta: [
        { property: "og:title", content: title },
        { name: "description", content: description },
        { property: "og:description", content: description },
        { property: "og:image", content: image },
        { name: "theme-color", content: "#0d0d0d" },
        { name: "msapplication-TileColor", content: "#0d0d0d" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "shortcut icon", type: "image/png", href: "/logo.png" },
        { rel: "mask-icon", href: "/logo.svg", color: "#0d0d0d" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
      ],
    },
  },
});
