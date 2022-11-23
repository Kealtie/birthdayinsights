<template>
    <main class="main container">
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
                    <i18n-t keypath="header.content" tag="p" scope="global">
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
                <h5>{{ $t('packages') }}</h5>
                <h2>{{ $t('this-boilerplate-contains') }}</h2>

                <ul class="feature-list">
                    <a href="https://pinia.vuejs.org/" target="_blank">
                        <li class="feature">
                            Pinia
                        </li>
                    </a>
                    <a href="https://vueuse.org/" target="_blank">
                        <li class="feature">
                            VueUse
                            <span>x: {{ x }}, y: {{ y }}</span>
                        </li>
                    </a>

                    <a href="https://axios.nuxtjs.org/" target="_blank">
                        <li class="feature">
                            Axios
                        </li>
                    </a>
                    <a href="https://vue-i18n.intlify.dev/guide/integrations/nuxt3.html" target="_blank">
                        <li class="feature">
                            vue/i18n
                        </li>
                    </a>

                    <a href="https://www.npmjs.com/package/vite-svg-loader" target="_blank">
                        <li class="feature">
                            vite-svg-loader
                        </li>
                    </a>
                </ul>
            </div>
        </section>
        <section class="section">
            <div class="data-fetching">
                <div class="left">
                    <a class="btn primary view-nuxt-button" @click.prevent="refreshUser">
                        {{ $t('button.refresh') }}
                    </a>
                </div>
                <div class="right">
                    <p v-if="userPending">{{ $t('loading') }}</p>
                    <pre v-else>{{ user }}</pre>
                </div>
            </div>
        </section>
    </main>
</template>

<script lang="ts">
    import { useAsyncData } from 'nuxt/app';
    import ArrowRightSVG from '~/assets/images/svgs/arrow-right.svg?component';
    import Drip from '~/assets/images/svgs/drip.svg?component';
    import { useMouse } from '@vueuse/core';
    import { useUserStore } from '~/stores/user';
    import { defineComponent } from "vue";

    export default defineComponent({
        layout    : 'default',
        components: { ArrowRightSVG, Drip },
        setup() {
            const { x, y } = useMouse();

            const { data: user, refresh: refreshUser, pending: userPending } = useAsyncData(async () => await useUserStore().show());

            return { x, y, user, refreshUser, userPending };
        },
    });
</script>

<style lang="scss" scoped>
    .main {
        display          : flex;
        align-items      : center;
        flex-direction   : column;
        justify-content  : center;
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
                fill       : var(--color-primary-500);
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
                            margin-bottom : 0;
                            color         : var(--color-primary-400);
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
                        margin-left : 1.6rem;
                        width       : 1.6rem;
                        height      : 1.6rem;
                        transition  : all .175s cubic-bezier(0.4, 0, 0.2, 1.1);
                        fill        : var(--color-white);
                    }
                }
            }

            .right {
                display         : flex;
                align-items     : center;
                justify-content : flex-end;
                overflow        : hidden;
                width           : 100%;
                max-width       : 100%;
                height          : 100%;
                max-height      : 100%;

            }
        }
    }

    .section {
        position          : relative;
        display           : flex;
        align-items       : center;
        justify-content   : center;
        width             : 100%;
        min-height        : 100vh;
        scroll-snap-align : start;

        &:nth-child(odd) {
            background-color : var(--color-dark-400);
        }

        .features {
            text-align : center;

            h5 {
                color : var(--color-primary-400);
            }

            .feature-list {
                display       : grid;
                grid-template : repeat(2, 1fr) / repeat(4, 1fr);
                align-items   : center;
                gap           : 1.6rem;
                margin-top    : 2.4rem;

                a {
                    color : var(--color-white);
                }

                .feature {
                    display          : flex;
                    align-items      : center;
                    flex-direction   : column;
                    justify-content  : center;
                    border-radius    : 1.6rem;
                    width            : 20rem;
                    height           : 20rem;
                    padding          : 2.4rem;
                    background-color : var(--color-primary-400);
                    cursor           : pointer;
                    font-size        : 2rem;
                    transition       : all .175s cubic-bezier(0.6, 0.3, 0.65, 1.3);
                    gap              : 2.4rem;

                    &:hover {
                        transform        : scale(1.05);
                        background-color : var(--color-primary-200);
                    }
                }
            }
        }

        .data-fetching {
            display               : grid;
            width                 : min(100%, 99.2rem);
            gap                   : 2.4rem;
            grid-template-columns : repeat(auto-fit, minmax(20rem, 1fr));

            .left, .right {
                display     : grid;
                place-items : center;
            }

            pre {
                border-radius    : 1.6rem;
                padding          : 2.4rem;
                background-color : var(--color-grey-600);

                &::selection {
                    background-color : var(--color-grey-500);
                }
            }
        }
    }
</style>
