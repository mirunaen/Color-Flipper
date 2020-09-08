function message(age) {
  var age = prompt("Enter age");
  document.getElementById("someText").innerHTML = age;
  if ((age) => 50) {
    return "Hey there Oldie ;( ";
  } else {
    return "Hey there Youngster! ";
  }
}

message();
