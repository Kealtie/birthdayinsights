import { useUserStore } from "~/stores/user";
import { BirthdayInformation } from "~/stores/user/state";
import dayjs from "dayjs";

const userStore = useUserStore();


/**
 * Calculates the next birthday
 * @param date
 */
export const getNextBirthDay = (date: Date): Date => {
    const today = new Date();
    const nextBirthday = new Date(date);
    nextBirthday.setFullYear(today.getFullYear());

    if (today > nextBirthday) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }
    return nextBirthday;
}

/**
 * Calculates all birthdayInformation and stores it in the store
 * @param date
 */
export const fetchDateInformation = (date: Date) => {
    const nextBirthday = getNextBirthDay(date);
    const diff = nextBirthday.getTime() - new Date().getTime();
    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    const weeks = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
    const days = Math.floor((diff / (1000 * 60 * 60 * 24)) % 7);
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

    const birthdayInformation: BirthdayInformation = {
        date        : dayjs(date),
        nextBirthday: dayjs(nextBirthday),
        age         : dayjs().diff(date, 'year'),
        days        : days,
        hours       : hours,
        weeks       : weeks,
        months      : months,
    }

    userStore.setBirthdayInformation(birthdayInformation);
}