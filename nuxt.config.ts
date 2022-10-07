// https://v3.nuxtjs.org/api/configuration/nuxt.config
import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
    css: [
        '~/assets/scss/main.scss',
    ],

    vite: {
        css    : {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/scss/base/_index.scss" as *;',
                },
            },
        },
        plugins: [
            svgLoader()
        ]
    },
})
