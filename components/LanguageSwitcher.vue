<template>
    <ul>
        <li v-for="locale in availableLocales" :key="locale.code">
            <nuxt-link :to="switchLocalePath(locale.code)">
                {{ $t(`locale.${locale.code}`) }}
            </nuxt-link>
        </li>
    </ul>
</template>

<script setup lang="ts">
    import { useI18n, useSwitchLocalePath, computed } from '#imports';

    const { locale, locales } = useI18n();
    const switchLocalePath = useSwitchLocalePath();
    const availableLocales = computed(() => {
        return (locales.value).filter(i => i.code !== locale.value);
    });
</script>

<style lang="scss" scoped>
    ul {
        display    : inline-flex;
        padding    : 0;
        list-style : none;
        gap        : .8rem;

        li > a {
            color : var(--color-white);
        }
    }
</style>
