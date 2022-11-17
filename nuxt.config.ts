import { defineNuxtConfig } from 'nuxt/config';
import svgLoader from 'vite-svg-loader';

/**
 * Main configuration file for Nuxt.js
 * {@link https://v3.nuxtjs.org/api/configuration/nuxt.config}
 */
// https://v3.nuxtjs.org/api/configuration/nuxt.config
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

    runtimeConfig: {
        public: {
            apiBase: '', // can be overridden by NUXT_PUBLIC_API_BASE environment variable
        },
    },

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
