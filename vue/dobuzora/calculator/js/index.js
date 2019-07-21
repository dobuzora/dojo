new Vue({
    el: '#calculator',
    data: {
        displayValue: '',
        cache : 0,
        numbers : [],
        operators : [],
        logs: []
    },
    methods: {
        clickHandler: function (value) {
            this.displayValue += value;
            if (value === "+" || value === "-" || value === '/' || value ==='*' || value === '%') {
                this.numbers.push(Number(this.cache));
                this.cache = '';
                this.operators.push(value);
            } else {
                this.cache += value;
            }
        },
        refreshHandler: function () {
            this.displayValue = "";
            this.cache = '';
            this.numbers = [];
            this.operators = [];
        },
        calcHandler : function() {
            this.numbers.push(Number(this.cache));
            let ans = this.numbers.shift();
            for ( let i = 0; i < this.operators.length; i++) {
                switch (this.operators[i]) {
                    case '+' :
                        ans += this.numbers[i];
                        break;
                    case '-':
                        ans -= this.numbers[i];
                        break;
                    case '*':
                        ans *= this.numbers[i];
                        break;
                    case '/':
                        ans /= this.numbers[i];
                        break;
                    case '%':
                        ans %= this.numbers[i];
                        break;
                    default:
                        console.log("error");
                        break;
                }
            }
            this.displayValue = ans;
            this.cache = String(ans);
            this.numbers = [];
            this.operators = [];
        }
    }
});