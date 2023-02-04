import { BirthdayInformation, UserState } from "~/stores/user/state";

export default {
    getUser(state: UserState) {
        return state.user;
    },

    getBirthdayInformation(state: UserState): BirthdayInformation|null {
        return state.birthdayInformation;
    }
}
