/*

https://www.delftstack.com/howto/javascript/javascript-round-to-2-decimal-places/

https://codepen.io/voula12/pen/djrZGw

*/

/**
 * element id for Tip: "tipTotal"
 * element id for Total: "billTotal"
 */

function onClickCalculate(subtotal, tipPercent) {
  // declare and define the tip total
  // conditional - tipPercent undefined
  if (tipPercent) {
    // https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var
    var tipTotal = .2 * subtotal
  } else {
    var tipTotal = tipPercent * subtotal
  }
    
  //append the tip total to the dom
  document.getElementById('tipTotal').innerHTML = tipTotal;

  // declare and define the bill total
  // subtotal + tip total
  var billTotal = subtotal + tipTotal

  // append the bill total to the dom
  document.getElementsById('billTotal').innerHTML = billTotal;
}

  // conditional - tip percentage undefined?
    // redefine tip percentage to 20%
  // else
    // declare and define the tip percentage
  
  // declare and define the tip total
  // tip percentage * subtotal

  // declare and define the total bill
  // tip total + subtotal

  // append tip total and total bill to the dom