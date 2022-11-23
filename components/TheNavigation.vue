<template>
    <nav>
        <div class="container">
            <div class="left">
                <a href="/">
                    <img src="/images/logo.svg" alt="Logo">
                </a>
            </div>
            <div class="right">
                <a href="/login">Login</a>
                <a href="/register">Register</a>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { useI18n } from 'vue-i18n';

    export default defineComponent({
        name: 'TheNavigation',
        setup() {
            const { t } = useI18n();

            return {
                t,
            };
        },
    });
</script>

<style lang="scss" scoped>
    nav {
        background-color : var(--color-primary);
        padding          : 1rem 0;

        .container {
            display         : flex;
            justify-content : space-between;
            align-items     : center;
        }

        img {
            width : 100px;
        }

        a {
            color           : var(--color-white);
            text-decoration : none;
            margin-left     : 1rem;
        }
    }
</style>