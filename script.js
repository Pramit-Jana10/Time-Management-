const validUser = {
    username: "pramit123",
    password: "abc123"
};

const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === validUser.username && password === validUser.password) {
      localStorage.setItem("loggedIn", "true");
      window.location.href = "time.html";
    } else {
      alert("Invalid username or password!");
    }
  });
}
