import { defineStore } from "pinia";
import actions from "~/stores/user/actions";
import getters from "~/stores/user/getters";
import state from "~/stores/user/state";

export const useUserStore = defineStore({
    id     : 'user',
    actions,
    getters,
    state,
    persist: true,
});
