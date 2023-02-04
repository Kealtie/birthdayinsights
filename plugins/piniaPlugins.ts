import { defineNuxtPlugin } from "#imports";
import { createPersistedState } from 'pinia-plugin-persistedstate';
import { PiniaPluginContext } from "pinia";

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.$pinia.use(createPersistedState);

    nuxtApp.$pinia.use(({ store }: PiniaPluginContext) => {
        if (store.$id === 'cart') {
            store.$subscribe((mutation, state) => {
                store.syncCartToApi();
            });
        }
    })
});
