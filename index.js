/**
 * element id for Total Bill: "totalInput"
 * element id for Tip percentage: "percentInput"
 * element id for Tip: "tipTotal"
 * element id for Total: "billTotal"
 */

function onClickCalculate() {
  // declare and define bill before tip variable
  const beforeTip = Number(document.getElementById('totalInput').value);
  // declare and define tip percentage variable
  const tipPercent = Number(document.getElementById('percentInput').value)/100;
  // check if tipPercent is sus
  // calculate the tip value
  // tip value = tip percent * bill before tip
  const tipValue = getTwoDecimals(tipPercent * beforeTip);
  // put tip value on the dom
  document.getElementById("tipTotal").innerHTML = tipValue
  // calculate the total
  // total value = tip value + bill before tip
  const totalValue = tipValue + beforeTip;
  // put total value on the dom
  document.getElementById("billTotal").innerHTML = totalValue;
};


function getTwoDecimals(value) {
  return Math.round(value*100)/100;
}