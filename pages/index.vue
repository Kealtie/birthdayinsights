<template>
    <main class="main container">
        <section class="header section">
            <div>
                <h1 class="header-title" :data-title="$t('title')">{{ $t('title') }}</h1>
                <h4>{{ $t('short-intro') }}</h4>
            </div>
        </section>

        <section>
            <birthday-facts />
        </section>

        <section>
            <h2>De grootste hit op deze dag was...</h2>
            <p></p>
        </section>
    </main>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
    .main {
        --opacity : 0.6;

        section {
            @include section-container;
        }

        .header {
            display         : flex;
            flex-direction  : row;
            justify-content : space-between;
            gap             : 5.6rem;

            .header-title {
                margin-bottom           : 2.4rem;
                position                : relative;
                z-index                 : 10;
                display                 : block;
                padding                 : 0.05em 0;
                background              : linear-gradient(30deg, var(--color-primary), var(--color-secondary) 55%, var(--color-tertiary));
                -webkit-background-clip : text;
                -webkit-text-fill-color : transparent;

                &::before {
                    content                 : attr(data-title);
                    position                : absolute;
                    left                    : 0;
                    padding                 : 0.05em 0;
                    background              : linear-gradient(30deg, var(--color-primary), var(--color-secondary) 55%, var(--color-tertiary));
                    -webkit-background-clip : text;
                    -webkit-text-fill-color : transparent;
                    opacity                 : var(--opacity);
                    filter                  : blur(1rem);
                }

                &::after {
                    content                 : attr(data-title);
                    position                : absolute;
                    left                    : 0;
                    padding                 : 0.05em 0;
                    background              : linear-gradient(30deg, var(--color-primary), var(--color-secondary) 55%, var(--color-tertiary));
                    -webkit-background-clip : text;
                    -webkit-text-fill-color : transparent;
                    opacity                 : var(--opacity);
                    filter                  : blur(1rem);
                }
            }
        }

    }
</style>
