//Challenge 1: Your age in days

function ageInDays() {
  var birthYear = prompt("Enter birthYear");
  var dt = new Date();
  var year = document.write(dt.getFullYear());
  return (birthYear - year) * 360;
}
