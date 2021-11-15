//declare a rule array that houses all of the rules
const rules = {
  1: "Comment often.",
  2: "Comments should not duplicate code.",
  3: "Good comments don't excuse bad code.",
  4: "If you can't write a clear comment, there may be a problem with your code.",
  5: "Comments should dispel confusion, not cause it.",
  6: "Explain code that some may consider redundant.",
  7: "Provide links to the original source of copied code.",
  8: "Include other helpful links.",
  9: "Add comments when fixing bugs.",
  10: "Use comments to mark incomplete implementations.",
  11: "Comment what portions of code can be customized for client preference."
};

//count is used to track which rule will be shown next
var count = 1

function onClickNext() {
  //create a new div element
  var newRuleDiv = document.createElement('div');
  //add a class to the new element for styling
  newRuleDiv.classList.add('rule');
  //add contents to the new element
  newRuleDiv.innerHTML += `Rule ${count}: ${rules[count]}`

  //increment to next rule for next button click
  count = count + 1;

  //locate element to add the rule too
  const rulesSection = document.getElementById("rules");
  //append new rule to rules section
  rulesSection.appendChild(newRuleDiv)

  //conditional - remove button if all rules are shown
  rulesKeys = Object.keys(rules);
  if (count === rulesKeys.length + 1) {
    document.getElementById('nextRule').remove();
  }
}