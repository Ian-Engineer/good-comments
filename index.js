/**
 * element id for Total Bill: "totalInput"
 * element id for Tip percentage: "percentInput"
 * element id for Tip: "tipTotal"
 * element id for Total: "billTotal"
 */

function onClickCalculate(subtotal, tipPercent) {
  // declare and define the tip total
  // conditional - tipPercent undefined
  console.log(tipPercent)
  if (!tipPercent) {
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
  document.getElementById('billTotal').innerHTML = billTotal;
};


function roundToTwo(num) {
  return +(Math.round(num + "e+2")  + "e-2");
}