const loginBtn = document.getElementById("butt");

loginBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Please enter both email and password!");
    return;
  }

  const userData = { email, password };
  console.log("Storing user data:", userData);

  localStorage.setItem("user", JSON.stringify(userData));

  // Give the browser 0.2 seconds to save before redirecting
  setTimeout(() => {
    window.location.href = "homepage.html";
  }, 200);
});
