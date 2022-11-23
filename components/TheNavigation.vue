<template>
    <nav>
        <div class="container">
            <div class="left">
                Boilers, mooi spul
            </div>
            <div class="right">
                <nuxt-link :to="{ name: 'index' }" class="link">Home</nuxt-link>
                <nuxt-link :to="{ name: 'styleguide' }" class="link">Styleguide</nuxt-link>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
    import { defineComponent, onMounted } from 'vue';
    import { useI18n } from 'vue-i18n';

    export default defineComponent({
        name: 'TheNavigation',
        setup() {
            const { t } = useI18n();

            // When we scrolled down from the top add a class to the nav element
            // to make it sticky.
            const handleScroll = () => {
                const nav = document.querySelector('nav');
                if (nav) {
                    if (window.scrollY > 0) {
                        nav.classList.add('scrolled');
                    } else {
                        nav.classList.remove('scrolled');
                    }
                }
            };

            onMounted(() => {
                window.addEventListener('scroll', handleScroll);
            });

            return {
                handleScroll,
                t,
            };
        },
    });
</script>

<style lang="scss" scoped>
    nav {
        @include section-padding-x;
        padding-top      : 1.6rem;
        padding-bottom   : 1.6rem;
        background-color : var(--color-primary);
        position         : relative;
        transition       : all .3s cubic-bezier(.25, .8, .25, 1.2);

        &.scrolled {
            background-color : var(--color-dark);
            position         : sticky;
            top              : 0;
            left             : 0;
            right            : 0;
            z-index          : 100;

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
            max-width       : 1920px;
            margin          : 0 auto;
            display         : flex;
            justify-content : space-between;
            align-items     : center;

            .left {
                color       : var(--color-white);
                font-weight : 700;
            }

            .right {
                display         : flex;
                align-items     : center;
                justify-content : flex-end;
                gap             : 1.6rem;

                .link {
                    color       : var(--color-white);
                    font-weight : 400;
                    transition  : all .3s cubic-bezier(.25, .8, .25, 1.2);

                    &:hover {
                        color : var(--color-dark);
                    }
                }
            }
        }
    }
</style>