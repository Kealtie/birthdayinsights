<template>
    <nav :class="{'scrolled': isScrolled}">
        <div class="container">
            <nuxt-link class="left" :to="localeRoute({ name: 'index' })">
                {{ $t('header.boilers-great-stuff')}}
            </nuxt-link>
            <div class="right">
                <nuxt-link :to="localeRoute({ name: 'index' })" class="link">Home</nuxt-link>
                <nuxt-link :to="localeRoute({ name: 'styleguide' })" class="link">Styleguide</nuxt-link>
                <language-switcher />
            </div>
        </div>
    </nav>
</template>
<script lang="ts">
    import { defineComponent, computed } from '#imports';
    import { useWindowScroll } from '@vueuse/core';

    export default defineComponent({
        name: 'TheNavigation',
        setup() {
            const { y } = useWindowScroll();

            const isScrolled = computed<boolean>(() => y.value > 0);

            return { isScrolled };
        },
    });
</script>

<style lang="scss" scoped>
    nav {
        @include section-padding-x;
        position         : relative;
        padding-top      : 1.6rem;
        padding-bottom   : 1.6rem;
        background-color : var(--color-primary);
        transition       : all .3s cubic-bezier(.25, .8, .25, 1.2);

        &.scrolled {
            position         : sticky;
            z-index          : 100;
            top              : 0;
            left             : 0;
            right            : 0;
            background-color : var(--color-dark);

            .container {
                .right {
                    .link {
                        &:hover {
                            color : var(--color-primary);
                        }
                    }
                }
            }
        }

        .container {
            display         : flex;
            align-items     : center;
            justify-content : space-between;
            margin          : 0 auto;
            max-width       : 1920px;

            .left {
                font-weight : 700;
                color       : var(--color-white);
            }

            .right {
                display         : flex;
                align-items     : center;
                justify-content : flex-end;
                gap             : 1.6rem;

                .link {
                    font-weight : 400;
                    color       : var(--color-white);
                    transition  : all .3s cubic-bezier(.25, .8, .25, 1.2);

                    &:hover {
                        color : var(--color-dark);
                    }
                }
            }
        }
    }
</style>
