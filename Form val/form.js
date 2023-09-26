const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formvaldation();
});

function formvaldation() {
  const usernamevalue = username.value.trim();
  const emailvalue = email.value.trim();
  const passwordvalue = password.value.trim();
  const repasswordvalue = repassword.value.trim();

  if (usernamevalue === "") {
    seterror(username, "username is required");
  } else {
    setsucess(username);
  }
  if (emailvalue === "") {
    seterror(email, "email is required");
  } else if (!emailcheck(emailvalue)) {
    seterror(email, "Enter valid email");
  } else {
    setsucess(email);
  }

  if (passwordvalue === "") {
    seterror(password, "Password is required");
  } else if (passwordvalue.length <= 8) {
    seterror(password, "should be contain min 8 letters");
  } else {
    setsucess(password);
  }

  if (repasswordvalue === "") {
    seterror(repassword, "re-enter your Password");
  } else if (repasswordvalue !== passwordvalue) {
    seterror(repassword, "password does not match");
  } else {
    setsucess(repassword);
  }
}

function seterror(element, message) {
  // console.log(message)
  // console.log(element)
  const inputgroup = element.parentElement;
  // console.log(inputgroup)
  const errorele = inputgroup.querySelector(".error");
  // console.log(errorele)

  errorele.innerText = message;
  inputgroup.classList.add("error1");
  inputgroup.classList.remove("sucess");
}
function setsucess(element) {
  const inputgroup = element.parentElement;

  const errorele = inputgroup.querySelector(".error");
  errorele.innerText = "";
  inputgroup.classList.add("sucess");
  inputgroup.classList.remove("error1");
}

const emailcheck = (email) => {
  return String(email)
    .toLowerCase()
    .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
};

const eye = document.getElementById("eyeicon");
function show() {
  if (password.type == "password") {
    password.type = "text";
    eye.innerHTML = `<i class="fa-solid fa-eye"></i>`;
    eye.style.color = "rgb(6, 222, 6)";
  } else {
    password.type = "password";
    eye.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
    eye.style.color = "red";
  }
}
const eye1 = document.getElementById("eyeicon1");
function show1() {
  if (repassword.type == "password") {
    repassword.type = "text";
    eye1.innerHTML = `<i class="fa-solid fa-eye"></i>`;
    eye1.style.color = "rgb(6, 222, 6)";
  } else {
    repassword.type = "password";
    eye1.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
    eye1.style.color = "red";
  }
}
