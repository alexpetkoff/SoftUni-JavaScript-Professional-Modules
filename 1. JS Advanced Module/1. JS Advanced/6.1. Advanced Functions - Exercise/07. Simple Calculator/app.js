function calculator() {

    let selector1 = Number(document.getElementById('num1').value);
    let selector2 = Number(document.getElementById('num2').value);
    let resultSelector = document.getElementById('result').value;

    let calculate = {
        init: function(selector1, selector2, resultSelector) {
            
        },
        add: function() {
            let sum = selector1 + selector2;
            resultSelector = sum;
        },
        substract: function () {
            let sub = selector1 - selector2;
            resultSelector = sub;
        } 
    }

}




