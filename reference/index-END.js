// https://www.freecodecamp.org/news/when-to-capitalize-your-javascript-constants-4fabc0a4a4c4/
// const DEFAULT_TIP_PERCENT = 18

function onClickCalculate(subtotal, tipPercent) {
  // declare and define the tip total
  // conditional - tipPercent undefined
  if (!tipPercent) {
    // https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var
    var tipTotal = DEFAULT_TIP_PERCENT/100 * subtotal
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
}