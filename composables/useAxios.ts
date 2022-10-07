import axios from "axios";

export const useAxios = () => {
    return axios.create({
        baseURL: 'https://demo-api.dev.test/',
    })
}
