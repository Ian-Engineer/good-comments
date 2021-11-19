/**
 * element id for Tip: "tipTotal"
 * element id for Total: "billTotal"
 * TODO: make numbers that round to 1 decimal place, include two decimal places
 */

// https://www.delftstack.com/howto/javascript/javascript-round-to-2-decimal-places/
// input is rounded to two decimal places
var helperFunction = function(num) {
  return Math.round(num * 100) / 100;
}

var onClickCalculate = function(subtotal, tipPercent) {
  // http://allthingsjavascript.com/blog/index.php/2016/11/03/good-coding-practices-declare-variables-at-the-top/
  // declare all variables
  var tipTotal, billTotal;
  // https://www.freecodecamp.org/news/when-to-capitalize-your-javascript-constants-4fabc0a4a4c4/
  const DEFAULT_TIP_PERCENT = 20/100

  //conditional statement checking if the tipPercent is undefined
  //bug fixed - tipTotal does not round to two decimals
  if (!tipPercent) {
      //define tip total
      tipTotal = subtotal * DEFAULT_TIP_PERCENT
  } else { 
      //define tip total -> subtotal * tipPercent
      tipTotal = subtotal * tipPercent
  }

  tipTotal = helperFunction(tipTotal)

  // define the bill total
  billTotal = tipTotal + subtotal;

  //render both bill total and tip total to the dom
  document.getElementById('tipTotal').innerHTML = tipTotal;
  document.getElementById('billTotal').innerHTML = billTotal;
};
