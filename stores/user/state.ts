import { User } from '~/types/User.interface';
import { Dayjs } from "dayjs";

export interface BirthdayInformation {
    date: Dayjs,
    nextBirthday: Dayjs,
    age: number,
    days: number,
    months: number,
    weeks: number,
    hours: number,
}

export interface UserState {
    loading: false,
    user: User|null,
    birthdayInformation: BirthdayInformation|null,
}

export default function (): UserState {
    return {
        loading            : false,
        user               : null,
        birthdayInformation: null,
    };
};
