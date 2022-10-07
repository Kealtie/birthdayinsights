import { createI18n } from 'vue-i18n'

import nl from '../locales/nl-nl.json'
import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin(({ vueApp }) => {
    const i18n = createI18n({
        legacy         : false,
        globalInjection: true,
        locale         : 'nl',
        messages       : {
            nl
        }
    })

    vueApp.use(i18n)
})