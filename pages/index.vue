<template>
    <main class="main">
        <div class="header">
            <div class="left">
                <h4 class="subtitle">{{ $t('header.boilers-great-stuff') }}</h4>
                <h1 class="title">{{ $t('header.project-name') }}
                    <drip class="drip" />
                </h1>

                <div class="content">
                    <i18n-t keypath="header.content" tag="p">
                        <template v-slot:styleguide>
                            <nuxt-link :to="{ name: 'styleguide' }">styleguide</nuxt-link>
                        </template>
                        <template v-slot:contributors>
                            <a href="mailto:n.klumper@code14.nl">Niels Klumper, </a>
                            <a href="mailto:j.tenden@code14.nl">Jordy ten Den</a>
                        </template>
                    </i18n-t>
                </div>

                <a href="https://v3.nuxtjs.org/" target="_blank" class="btn primary view-nuxt-button">
                    <span>{{ $t('view-nuxt-3') }}</span>
                    <ArrowRightSVG class="arrow-right-icon" />
                </a>
            </div>
            <div class="right">
            </div>
        </div>
    </main>
</template>

<script>
    import ArrowRightSVG from '~/assets/images/arrow-right.svg';
    import Drip from '~/assets/images/drip.svg';

    export default {
        components: { ArrowRightSVG, Drip },
    };
</script>

<style lang="scss" scoped>
    .main {
        display         : flex;
        justify-content : center;
        align-items     : center;
        width           : 100%;
        height          : 100%;

        .header {
            display               : grid;
            grid-template-columns : 1fr 1fr;
            gap                   : 3.2rem;
            width                 : 100%;
            @include section-container;

            .drip {
                height     : 6rem;
                fill       : var(--color-primary-200);
                transition : all .3s cubic-bezier(.25, .8, .25, 1.2);

                &:hover {
                    transform : rotate(12deg) scale(1.1);
                }
            }

            .left {
                .subtitle {
                    color         : var(--color-primary-300);
                    margin-bottom : 0;
                }

                .content {
                    margin : 2rem 0 3.2rem 0;
                }

                .view-nuxt-button {
                    width : auto;

                    &:hover {
                        .arrow-right-icon {
                            transform : translateX(0.5rem);
                        }
                    }

                    .arrow-right-icon {
                        transition  : all .175s cubic-bezier(0.4, 0, 0.2, 1.1);
                        fill        : var(--color-white);
                        margin-left : 1.6rem;
                        width       : 1.6rem;
                        height      : 1.6rem;
                    }
                }
            }

            .right {
                display         : flex;
                justify-content : flex-end;
                align-items     : center;
                width           : 100%;
                height          : 100%;
                max-width       : 100%;
                max-height      : 100%;
                overflow        : hidden;

            }
        }
    }
</style>
