function calculator() {
  
  let objectTags = {
    s1: '',
    s2: '',
    r: ''
  }

  return {

    init: (selector1, selector2, resultSelector) => {
      objectTags['s1'] = document.querySelector(selector1);
      objectTags['s2'] = document.querySelector(selector2);
      objectTags['r'] = document.querySelector(resultSelector);
    },
    add: () => {
      let sum =  Number(objectTags.s1.value) + Number(objectTags.s2.value);
      objectTags.r.value = sum;
    },
    subtract: () => {
      let sub = Number(objectTags.s1.value) - Number(objectTags.s2.value);
      console.log(sub)
      objectTags.r.value = sub;
    }

  }

}

const calculate = calculator ();
calculate.init ('#num1', '#num2', '#result');