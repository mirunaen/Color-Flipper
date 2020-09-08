//Challenge 1: Your age in days

function ageInDays() {
  var birthYear = prompt("Enter birthYear");
  var result = (2020 - birthYear) * 365;
  var h1 = document.createElement("h1");
  var textAnswer = document.createTextNode("You are " + result + "days");
  h1.setAttribute("id", "result");
  document.getElementById("flex-box-result").appendChild(h1);
  console.log(result);
}
