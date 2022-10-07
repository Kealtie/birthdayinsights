<template>
    <main class="main">
        <section class="header section">
            <div class="left">
                <div class="grid-wrap">
                    <div class="left-grid">
                        <h4 class="subtitle">{{ $t('header.boilers-great-stuff') }}</h4>
                        <h1 class="title">{{ $t('header.project-name') }}</h1>
                    </div>
                    <drip class="drip" />
                </div>

                <div class="content">
                    <i18n-t keypath="header.content" tag="p">
                        <template v-slot:styleguide>
                            <nuxt-link :to="{ name: 'styleguide' }">styleguide</nuxt-link>
                        </template>
                        <template v-slot:contributors>
                            <a href="mailto:n.klumper@code14.nl">{{ $filters.upperCaseFirstLetter('Niels Klumper') }}, </a>
                            <a href="mailto:j.tenden@code14.nl">{{ $filters.upperCaseFirstLetter('jordy ten Den') }}</a>
                        </template>
                    </i18n-t>
                </div>

                <a href="https://v3.nuxtjs.org/" target="_blank" class="btn primary view-nuxt-button">
                    <span>{{ $t('view-nuxt-3') }}</span>
                    <ArrowRightSVG class="arrow-right-icon" />
                </a>
            </div>
        </section>
        <section class="section">
            <div class="features">
                <h5>Packages</h5>
                <h2>Deze Boilerplate bevat</h2>

                <ul class="feature-list">
                    <li class="feature">
                        <a href="https://pinia.vuejs.org/" target="_blank">Pinia</a>
                    </li>

                    <li class="feature">
                        <a href="https://vueuse.org/" target="_blank">VueUse</a>
                        <span>x: {{ x }}, y: {{ y }}</span>
                    </li>

                    <li class="feature">
                        <a href="https://axios.nuxtjs.org/" target="_blank">Axios</a>
                    </li>
                    <li class="feature">
                        <a href="https://vue-i18n.intlify.dev/guide/integrations/nuxt3.html" target="_blank">vue/i18n</a>
                    </li>
                    <li class="feature">
                        <a href="https://www.npmjs.com/package/vite-svg-loader" target="_blank">vite-svg-loader</a>
                    </li>
                </ul>
            </div>
        </section>
    </main>
</template>

<script>
    import ArrowRightSVG from '~/assets/images/arrow-right.svg';
    import Drip from '~/assets/images/drip.svg';
    import { useMouse } from '@vueuse/core';

    export default {
        components: { ArrowRightSVG, Drip },
        setup() {
            const { x, y } = useMouse();

            return { x, y };
        },
    };
</script>

<style lang="scss" scoped>
    .main {
        display          : flex;
        flex-direction   : column;
        justify-content  : center;
        align-items      : center;
        width            : 100%;
        height           : 100%;
        scroll-behavior  : smooth;
        scroll-snap-type : y mandatory;

        .header {
            display               : grid;
            align-items           : center;
            justify-content       : center;
            grid-template-columns : 1fr 1fr;
            gap                   : 3.2rem;
            width                 : 100%;
            @include section-container;

            @media($phone) {
                grid-template-columns : 1fr;
            }

            .drip {
                height     : 6rem;
                fill       : var(--color-primary-200);
                transition : all .3s cubic-bezier(.25, .8, .25, 1.2);

                &:hover {
                    transform : rotate(12deg) scale(1.1);
                }
            }

            .left {
                .grid-wrap {
                    display               : grid;
                    grid-template-columns : 1fr 1fr;
                    align-items           : center;

                    @media($phone) {
                        gap : .8rem;
                    }

                    .left-grid {
                        .subtitle {
                            color         : var(--color-primary-300);
                            margin-bottom : 0;
                        }

                        .title {
                            line-height : 1;
                        }
                    }
                }

                .content {
                    margin    : 2rem 0 3.2rem 0;
                    max-width : 60%;

                    @media($tablet-portrait) {
                        max-width : 80%;
                    }

                    @media($phone) {
                        max-width : 100%;
                    }
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

    .section {
        min-height        : 100vh;
        width             : 100%;
        display           : flex;
        justify-content   : center;
        align-items       : center;
        scroll-snap-align : start;
        position          : relative;

        &:nth-child(odd) {
            background-color : var(--color-dark-300);
        }

        .features {
            text-align : center;

            h5 {
                color : var(--color-primary-300);
            }

            .feature-list {
                display       : grid;
                grid-template : repeat(2, 1fr) / repeat(4, 1fr);
                align-items   : center;
                gap           : 1.6rem;
                margin-top    : 2.4rem;

                .feature {
                    display          : flex;
                    flex-direction   : column;
                    justify-content  : center;
                    align-items      : center;
                    gap              : 2.4rem;
                    width            : 20rem;
                    height           : 20rem;
                    border-radius    : 1.6rem;
                    font-size        : 2rem;
                    cursor           : pointer;
                    background-color : var(--color-primary-300);
                    padding          : 2.4rem;
                    transition       : all .175s cubic-bezier(0.6, 0.3, 0.65, 1.3);

                    &:hover {
                        transform        : scale(1.05);
                        background-color : var(--color-primary-200);
                    }

                    a {
                        color : var(--color-white);
                    }
                }
            }
        }
    }
</style>
