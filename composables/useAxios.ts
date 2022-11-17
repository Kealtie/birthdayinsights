import axios, { AxiosInstance } from "axios";
import { useRuntimeConfig } from "#app";

export const useAxios = (): AxiosInstance => {
    const runtimeConfig = useRuntimeConfig();

    return axios.create({
        baseURL: runtimeConfig.public.apiBase,
    });
}
