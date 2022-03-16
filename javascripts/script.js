function checkEmail() {
  const email = document.querySelector("#email");
  const error = document.querySelector(".error");

  if (!email.value.match(email.pattern)) {
    error.style.visibility = "visible";
    email.style.borderColor = "hsl(348, 83%, 47%)";
  } else {
    error.style.visibility = "hidden";
    email.style.borderColor = "hsl(0, 0%, 100%)";
  }
}

document.getElementById("email").onkeyup = () => checkEmail();
