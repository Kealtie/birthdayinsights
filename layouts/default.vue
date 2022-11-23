<template>
    <main>
        <the-navigation />
        <NuxtPage />
    </main>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import TheNavigation from '~/components/TheNavigation.vue';

    export default defineComponent({
        name      : 'DefaultLayout',
        components: {
            TheNavigation,
        },
    });
</script>
