new Vue({
    el: '#calculator',
    data: {
        in: '',
        logs: []
    },
    methods: {
        clickHandler: function (inputNumber) {
            this.in += inputNumber;
            console.log(this.in);
        }
    }
});
