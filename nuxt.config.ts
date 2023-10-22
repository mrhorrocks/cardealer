// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
        htmlAttrs: {lang: 'en'},
        charset: 'utf-8',
        viewport: 'width=device-width, initial-scale=1',
        title: 'Car Dealer Component',
        meta: [{ name: 'description', content: 'Car Dealer Component' }],
        // link: [
        //     { 
        //         rel: 'stylesheet', 
        //         href: 'https://fonts.googleapis.com/css2?family=Lobster&family=Yanone+Kaffeesatz:wght@300;400;500;600;700&display=swap',
        //     }
        // ],
    }
},
  devtools: { enabled: false }
})
