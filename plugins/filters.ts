import { defineNuxtPlugin } from "#imports";

export default defineNuxtPlugin(nuxtApp => {
    return {
        provide: {
            filters: {
                /**
                 * Formats a price using the local currency.
                 * @param value
                 * @param currency
                 */
                priceFormat(value: string, currency: string = "EUR") {
                    // @ts-ignore
                    return value.toLocaleString("nl-NL", {
                        style: "currency",
                        currency,
                    });
                },

                /**
                 * Upper cases first letter
                 * @param value
                 */
                upperCaseFirstLetter(value: string) {
                    return value.charAt(0).toUpperCase() + value.slice(1);
                },

                /**
                 * Lower case first letter
                 * @param value
                 */
                lowerCaseFirstLetter(value: string) {
                    return value.charAt(0).toLowerCase() + value.slice(1);
                }
            }
        }
    };
},);
