<template>
    <main>
        <the-navigation />
        <NuxtPage />
    </main>
</template>

<script lang="ts">
    import { defineComponent } from '#imports';
    import { TheNavigation } from '#components';

    export default defineComponent({
        name      : 'DefaultLayout',
        components: {
            TheNavigation,
        },
    });
</script>
