

const rules = [
  "Rule 1",
  "Rule 2",
  "Rule 3",
  "Rule 4",
  "Rule 5",
  "Rule 6",
  "Rule 7",
  "Rule 8",
  "Rule 9",
  "Rule 10",
  "Rule 11"
]

var count = 0

function onClickNext(e) {
  if(count < rules.length) {
    var rulesSection = document.getElementById("rules");
    var newRuleDiv = document.createElement('div');
    newRuleDiv.classList.add('rule');
    newRuleDiv.innerHTML += rules[count]
    count = count + 1;
    rulesSection.appendChild(newRuleDiv)
  } 
  if (count === rules.length) {
    document.getElementById('nextRule').remove();
  }
}