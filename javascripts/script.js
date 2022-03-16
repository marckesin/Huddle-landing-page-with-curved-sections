function checkEmail() {
  const email = this.document.getElementById("email");
  const error = this.document.querySelector(".error");

  if (!email.value.match(email.pattern)) {
    error.style.visibility = "visible";
    email.style.borderColor = "hsl(348, 83%, 47%)";
  } else {
    error.style.visibility = "hidden";
    email.style.borderColor = "hsl(0, 0%, 100%)";
  }
}
