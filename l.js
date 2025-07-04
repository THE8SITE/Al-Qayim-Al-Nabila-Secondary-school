const users = {
  "2022": "2022",
};

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMessage = document.getElementById("error-message");

  if (users[username] && users[username] === password) {
    // ✅ التوجيه لصفحة لوحة التحكم
    window.location.href = "school.html";
  } else {
    errorMessage.textContent = "❌ غلط يا عبيط/ة 🤣 حاول تاني.";
  }
}