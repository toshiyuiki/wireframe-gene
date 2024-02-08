// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app:{
    head:{
      title:"ページタイトル",
      meta:[
        {name:"SKYPE_TOOLBAR", content:"SKYPE_TOOLBAR_PARSER_COMPATIBLE"},
        {'http-equiv':"X-UA-Compatibl", content:"IE=edg"},
        //ogp
        {property:"og:type", content:"website"},
        {property:"og:locale", content:"ja_JP"},
        {property:"og:title", content:"ページタイトル"},
        {property:"og:description", content:""},
        {property:"og:url", content:"https://xxx.xxx.xxx/"},
        {property:"og:site_name", content:"サイトタイトル"},
        {property:"og:image", content:"./ogp.jpg"},
        //thumnail
        {name:"thumbnail", content:"./thumnail.png"},
      ],
      link:[
        {rel:"shortcut icon", href:"./favicon.ico"},
        {rel:"preconnect", href:"https://fonts.googleapis.com"},
        {rel:"preconnect", href:"https://fonts.gstatic.com", crossorigin:""},
        {rel:"stylesheet", href:"https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;600&family=Noto+Serif+JP:wght@400;600&display=swap"},
      ],
    }
  },
  modules: ['nuxt-jsonld'],
  css: ["@/assets/sass/style.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@import "@/assets/sass/ini/_function.scss"; @import "@/assets/sass/setting/_setting_pak.scss";',
        },
      },
    },
  },
})
