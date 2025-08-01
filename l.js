let users = {};

// تحميل بيانات المستخدمين من ملف JSON
fetch('users.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('فشل تحميل المستخدمين');
    }
    return response.json();
  })
  .then(data => {
    users = data;
  })
  .catch(error => {
    document.getElementById("error-message").textContent = "⚠️ حدث خطأ في تحميل البيانات.";
    console.error("خطأ في تحميل users.json:", error);
  });

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMessage = document.getElementById("error-message");

  if (users[username] && users[username] === password) {
    window.location.href = "school.html";
  } else {
    errorMessage.textContent = " غلط يا عبيط/ة 🤣 اسم المستخدم و الباسورد 2022 ساقت/ة رياضة .";
  }
}
