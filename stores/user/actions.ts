export default {
    async show() {
        const response = await $fetch<{ data: User }>('/api/user');
        return response.data;
    },
}
