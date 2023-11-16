// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: { lang: 'en' },
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Car Dealer Component',
            meta: [{ name: 'description', content: 'Car Dealer Component' }],
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap',
                }
            ],
        }
    },
    css: ['~/assets/scss/main.scss'],

    devtools: { enabled: false }
})