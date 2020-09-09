//Challenge 1: Your age in days

function ageInDays() {
  var birthYear = prompt("Enter birthYear");
  var ageInDayss = (2020 - birthYear) * 365;
  var h1 = document.createElement("h1");
  var textAnswer = document.createTextNode("You are " + ageInDayss + " days");
  h1.setAttribute("id", "ageInDayss");
  h1.appendChild(textAnswer);
  document.getElementById("flex-box-result").appendChild(h1);
  console.log(result);
}

function reset() {
  document.getElementById("ageInDays").remove();
}
