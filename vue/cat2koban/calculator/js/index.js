new Vue({
    el: '#calculator',
    data: {
        logs: [],
        value: 0,
        calculated: 0
    },
    methods: {
        inputStr: function(input) {
            if (this.value === 0) {
                if (input === '.') {
                    this.value = '0.';
                } else {
                    this.value = input
                }
            } else {
                this.value = `${this.value}${input}`
            }
        },
        deleteStr: function() {
            if (this.value.length === 1){
                this.clearField();
            } else {
                this.value = this.value.slice(0, -1)
            }
        },
        clearField: function() {
        this.value = 0;
        },
        safeEval: function(val){
            return Function('"use strict";return ('+val+')')();
        },
        calculate: function() {
            var answer = this.safeEval(this.value);
            this.logs.push(this.value);
            this.value = answer;
        }
    }
});
