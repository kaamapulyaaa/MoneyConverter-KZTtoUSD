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


    methods: {
        conversion: function(event) {

            if (this.amount && this.amount != null) {
                const apiKey = '9af2806b0ac0096d9c0e'; //установка ключа
                fromCurrency = encodeURIComponent(this.selected);
                toCurrency = encodeURIComponent(this.selected2);
                const query = fromCurrency + '_' + toCurrency;
                const url = 'https://free.currconv.com/api/v7/convert?q=' + query + '&compact=ultra&apiKey=' + apiKey;
                axios
                    .get(url)
                    .then(response => (this.result = response.data[query] * this.amount))
            }
            event.preventDefault()
        }
    }
})
