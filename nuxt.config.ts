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

        /**
         * Installs the Nuxt.js module for i18n.
         * {@link https://v8.i18n.nuxtjs.org }
         */
        '@nuxtjs/i18n',
    ],

    css: [
        '~/assets/scss/main.scss',
    ],

    runtimeConfig: {
        public: {
            apiBase: '', // can be overridden by NUXT_PUBLIC_API_BASE environment variable
            baseUrl: '', // can be overridden by NUXT_PUBLIC_BASE_URL environment variable
        },
    },

    i18n: {
        lazy                 : true,
        dynamicRouteParams   : true,
        baseUrl              : process.env.NUXT_BASE_URL,
        defaultLocale        : 'nl',
        langDir              : 'locales',
        locales              : [
            { code: 'nl', iso: 'nl-NL', file: 'nl.json' },
            { code: 'en', iso: 'en-GB', file: 'en.json', isCatchallLocale: true },
            { code: 'de', iso: 'de-DE', file: 'de.json' },
        ],
        detectBrowserLanguage: {
            useCookie : true,
            cookieKey : 'i18n_redirected',
            redirectOn: 'root',
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
