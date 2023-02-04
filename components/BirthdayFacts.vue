<template>
    <div class="birthday-facts">
        <div class="input-holder">
            <input type="date" @change="checkDateOfBirth" v-model="state.dateOfBirth" :class="{'error': vuelidate.dateOfBirth.$errors.length}" :placeholder="$t('date-of-birth')" />
        </div>
        <transition name="scale-y" mode="out-in">
            <ul class="facts-list" v-if="birthdayValid">
                <li class="fact">{{ $t('birthday-facts.your-age-is', { age: birthdayInformation?.age }) }}</li>
                <li class="fact">{{ $t('birthday-facts.your-next-birthday-is', { date: birthdayInformation?.nextBirthday.format('DD MMMM YYYY') }) }}</li>
                <li class="fact">{{ $t('birthday-facts.your-birthday-is-in', { weeks: birthdayInformation?.weeks, days: birthdayInformation?.days, hours: birthdayInformation?.hours }) }}</li>
            </ul>
        </transition>
    </div>
</template>

<script lang="ts" setup>
    import { useVuelidate } from '@vuelidate/core'
    import { required } from "@vuelidate/validators";
    import { fetchDateInformation, getNextBirthDay } from "~/composables/useBirthdayFacts";
    import dayjs from "dayjs";
    import { useUserStore } from "~/stores/user";

    const today = dayjs();
    const birthdayValid = ref(false);
    const age = ref(0);
    const tillNextBirthday = ref('');

    const state = reactive({
        dateOfBirth: null,
    })

    const rules = {
        dateOfBirth: {
            required,
        }
    }

    const userStore = useUserStore();
    const vuelidate = useVuelidate(rules, state);

    const user = computed(() => {
        return userStore.getUser;
    });

    const birthdayInformation = computed(() => {
        return userStore.getBirthdayInformation;
    });

    console.log(birthdayInformation.value);

    const checkDateOfBirth = () => {
        birthdayValid.value = false;
        vuelidate.value.$touch();

        // If it contains errors, return.
        if (vuelidate.value.$invalid) {
            return
        }

        birthdayValid.value = true;

        if (state.dateOfBirth) {
            fetchDateInformation(state?.dateOfBirth);

            console.log(birthdayInformation.value.date);
        }
    }

</script>

<style lang="scss">
    .birthday-facts {
        .input-holder {
            margin-bottom : 2.4rem;
        }

        .facts-list {
            list-style : none;
            padding    : 0;
            margin     : 0;

            .fact {
                font-size     : 2.4rem;
                line-height   : 1.5;
                padding       : 10px 20px;
                border-bottom : 1px solid #DDDDDD;

                &:last-child {
                    border-bottom : none;
                }

                .title {
                    font-weight   : bold;
                    color         : #333333;
                    margin-bottom : 5px;
                }

                .value {
                    color      : #555555;
                    font-style : italic;
                }
            }
        }

    }

</style>