import { BirthdayInformation } from "~/stores/user/state";

export default {
    setBirthdayInformation(birthdayInformation: BirthdayInformation) {
        this.birthdayInformation = birthdayInformation;
    },
}
