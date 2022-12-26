const convCurrency = new Vue({
            el: '#convcurrency',
            data: {
                selected: 'USD',
                options: [
                    { text: 'USD', value: 'USD' },
                    { text: 'EUR', value: 'EUR' },
                    { text: 'KZT', value: 'KZT' }
                ],

                selected2: 'USD',
                options2: [
                    { text: 'USD', value: 'USD' },
                    { text: 'EUR', value: 'EUR' },
                    { text: 'KZT', value: 'KZT' }
                ],

                amount: null,
                result: null
            },