import { defineNuxtConfig } from 'nuxt/config';

/**
 * Main configuration file for Nuxt.js
 * {@link https://v3.nuxtjs.org/api/configuration/nuxt.config}
 */
export default defineNuxtConfig({
    modules: [
        /**
         * Installs the official Nuxt.js module for Pinia.
         * {@link https://pinia.vuejs.org/introduction.html }
         */
        '@pinia/nuxt',
    ],
    css: [
        '~/assets/scss/main.scss',
    ],

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/scss/base/_index.scss" as *;',
                },
            },
        },
    },
})
