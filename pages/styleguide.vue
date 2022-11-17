<template>
    <div class="page-container">
        <header>
            <div class="page-info">
                <span class="title">Styleguide</span>
                <span class="subtitle">Design System</span>
            </div>
            <company-logo class="customer-logo" />
        </header>
        <section>
            <div class="col">
                <span class="title">Global Headings - H1 to H6</span>
            </div>
            <div class="col">
                <div class="full-width-grid">
                    <div class="heading">
                        <div class="label">
                            H1
                        </div>
                        <h1>A wonderful styleguide</h1>
                    </div>
                    <div class="heading">
                        <div class="label">
                            H2
                        </div>
                        <h2>A wonderful styleguide</h2>
                    </div>
                    <div class="heading">
                        <div class="label">
                            H3
                        </div>
                        <h3>A wonderful styleguide</h3>
                    </div>
                    <div class="heading">
                        <div class="label">
                            H4
                        </div>
                        <h4>A wonderful styleguide</h4>
                    </div>
                    <div class="heading">
                        <div class="label">
                            H5
                        </div>
                        <h5>A wonderful styleguide</h5>
                    </div>
                    <div class="heading">
                        <div class="label">
                            H6
                        </div>
                        <h6>A wonderful styleguide</h6>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="col">
                <span class="title">Semibold heading class</span>
            </div>
            <div class="col">
                <div class="full-width-grid">
                    <div class="heading">
                        <div class="label">
                            H1
                        </div>
                        <h1 class="semi-bold">
                            A wonderful styleguide
                        </h1>
                    </div>
                    <div class="heading">
                        <div class="label">
                            H2
                        </div>
                        <h2 class="semi-bold">
                            A wonderful styleguide
                        </h2>
                    </div>
                    <div class="heading">
                        <div class="label">
                            H3
                        </div>
                        <h3 class="semi-bold">
                            A wonderful styleguide
                        </h3>
                    </div>
                    <div class="heading">
                        <div class="label">
                            H4
                        </div>
                        <h4 class="semi-bold">
                            A wonderful styleguide
                        </h4>
                    </div>
                    <div class="heading">
                        <div class="label">
                            H5
                        </div>
                        <h5 class="semi-bold">
                            A wonderful styleguide
                        </h5>
                    </div>
                    <div class="heading">
                        <div class="label">
                            H6
                        </div>
                        <h6 class="semi-bold">
                            A wonderful styleguide
                        </h6>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="col">
                <span class="title">Other html tags</span>
            </div>
            <div class="col">
                <div class="full-width-grid">
                    <div class="element">
                        <div class="label">
                            Paragraph
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra in id sit a aenean sapien nulla. Proin non, eu nunc, nulla nisl sed. Nec nisl et faucibus quam.
                            Amet
                            integer ac sapien, elit pharetra tempus, dictum a. Aliquam eget turpis risus egestas scelerisque morbi. Ullamcorper facilisis rhoncus massa pulvinar senectus id tellus.
                            Lacinia
                            massa pharetra semper elit sagittis. Vel mi iaculis mauris ultrices augue. Parturient tortor nibh aliquam cras eu.
                        </p>
                    </div>
                    <div class="element">
                        <div class="label">
                            Link
                        </div>
                        <a href="#">Text link</a>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="col">
                <span class="title">Common colors</span>
                <p class="description">
                    These colors can be changed via the swatches panel.
                </p>
            </div>
            <div class="col">
                <div class="colors-grid">
                    <div class="color black">
                        <div class="label top left absolute">
                            Black
                        </div>
                    </div>
                    <div class="color white">
                        <div class="label top left absolute">
                            White
                        </div>
                    </div>
                    <div class="color primary">
                        <div class="label top left absolute">
                            Primary
                        </div>
                    </div>
                    <div class="color secondary">
                        <div class="label top left absolute">
                            Secondary
                        </div>
                    </div>
                    <div class="color tertiary">
                        <div class="label top left absolute">
                            Tertiary
                        </div>
                    </div>
                    <div class="color darker-blue">
                        <div class="label top left absolute">
                            Darker Blue
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="col">
                <span class="title">Other colors</span>
                <p class="description">
                    Colors for toasts and extra colors.
                </p>
            </div>
            <div class="col">
                <div class="colors-grid">
                    <div class="color success">
                        <div class="label top left absolute">
                            Success
                        </div>
                    </div>
                    <div class="color danger">
                        <div class="label top left absolute">
                            Danger
                        </div>
                    </div>
                    <div class="color warning">
                        <div class="label top left absolute">
                            Warning
                        </div>
                    </div>
                    <div class="color light">
                        <div class="label top left absolute">
                            Light
                        </div>
                    </div>
                    <div class="color dark">
                        <div class="label top left absolute">
                            Dark
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="col">
                <span class="title">Buttons</span>
            </div>
            <div class="col">
                <div class="element">
                    <div class="label">
                        Normal buttons
                    </div>
                    <div class="buttons">
                        <nuxt-link class="btn primary" to="\">
                            Primary
                        </nuxt-link>
                        <nuxt-link class="btn secondary" to="\">
                            Secondary
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import CompanyLogo from '~/assets/images/svgs/logo.svg';

    export default {
        name: 'Styleguide',
        layout: 'styleguide',
        components: { CompanyLogo },
    };
</script>

<style lang="scss" scoped>
    .page-container {
        background-color : var(--color-black);

        header {
            position         : sticky;
            z-index          : index($elements, header);
            top              : 0;
            display          : flex;
            align-items      : center;
            justify-content  : space-between;
            margin           : 0 0 16rem;
            border-bottom    : .2rem solid var(--color-primary-400);
            border-bottom    : 1px solid rgba(0, 0, 0, 0.1);
            width            : 100%;
            padding          : 4.8rem 16rem;
            background-color : var(--color-black);

            @media ($tablet-portrait) {
                margin  : 0 0 8rem;
                padding : 4rem 8rem;
            }

            @media ($phone) {
                flex-direction : column;
                margin         : 0 0 8rem;
                padding        : 4rem 2.4rem;
            }

            .page-info {
                display        : flex;
                flex-direction : column;

                @media($phone) {
                    margin-bottom : 2.4rem;
                }

                .title {
                    margin-bottom : 1.6rem;
                    font-size     : 6.4rem;
                    font-weight   : 700;

                    @media($phone) {
                        font-size : 4rem;
                    }
                }

                .subtitle {
                    font-size   : 2rem;
                    font-weight : 700;

                    @media($phone) {
                        font-size : 1.8rem;
                    }
                }
            }

            .customer-logo {
                height : 8rem;
            }
        }

        section {
            display               : grid;
            width                 : 100%;
            padding               : 0 16rem 16rem;
            grid-template-columns : 2fr 4fr;
            grid-gap              : 15.2rem;

            @media($tablet-portrait) {
                padding               : 0 6.4rem 6.4rem;
                grid-template-columns : 100%;
                grid-gap              : 4rem;
            }

            @media ($phone) {
                padding               : 0 2.4rem 2.4rem;
                grid-template-columns : 100%;
                grid-gap              : 2.4rem;
            }

            &:last-child {
                padding-bottom : 16rem;
                @media($tablet-portrait) {
                    padding-bottom : 6.4rem;
                }
            }

            .col {

                &.form-elements {
                    max-width : 30rem;
                }

                .description {
                    margin-top : 1.6rem;
                    font-size  : 1.6rem;
                }

                .title {
                    display     : block;
                    width       : 100%;
                    font-size   : 2.4rem;
                    font-weight : 700;

                    &:after {
                        content    : '';
                        position   : relative;
                        display    : block;
                        margin-top : 1.6rem;
                        width      : 100%;
                        height     : .4rem;
                        background : var(--color-secondary);
                    }
                }

                .label {
                    position      : relative;
                    display       : inline-block;
                    margin-bottom : 1.6rem;
                    border-radius : .4rem;
                    padding       : .8rem 1.6rem;
                    background    : var(--color-blue-tint);
                    font-weight   : 700;

                    &.absolute {
                        position      : absolute;
                        margin-bottom : 0;
                    }

                    &.top {
                        top : 1.6rem;
                    }

                    &.left {
                        left : 1.6rem;
                    }
                }

                .full-width-grid {
                    display               : grid;
                    grid-gap              : 6.4rem;
                    grid-template-columns : 100%;
                }

                .colors-grid {
                    display               : grid;
                    width                 : 100%;
                    max-width             : 68.4rem;
                    grid-template-columns : 1fr 1fr;
                    grid-gap              : 2.4rem;

                    .color {
                        border-radius : .4rem;
                        height        : 14rem;

                        &.black {
                            border     : 1px solid rgba(255, 255, 255, 0.1);
                            background : var(--color-black);
                            color      : var(--color-white);
                        }

                        &.white {
                            background : var(--color-white);
                            color      : var(--color-black);
                        }

                        &.primary {
                            background : var(--color-primary-400);
                        }

                        &.secondary {
                            border     : 1px solid rgba(255, 255, 255, 0.1);
                            background : var(--color-secondary-400);
                            color      : var(--color-white);
                        }

                        &.tertiary {
                            background : var(--color-tertiary-400);
                        }

                        &.darker-blue {
                            background : var(--color-dark-400);
                            color      : var(--color-white);
                        }

                        &.success {
                            background : var(--color-success-400);
                        }

                        &.danger {
                            background : var(--color-danger-400);
                        }

                        &.warning {
                            background : var(--color-warning-400);
                        }

                        &.light {
                            background : var(--color-light-400);
                        }

                        &.dark {
                            background : var(--color-dark-400);
                            color      : var(--color-white);
                        }
                    }
                }

                .option__image {
                    margin-right : .8rem;
                }

                .element {
                    display        : flex;
                    align-items    : self-start;
                    flex-direction : column;

                    .buttons {
                        display : flex;

                        .btn {
                            margin-right : 2.4rem;

                            &:last-child {
                                margin-right : 0;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
