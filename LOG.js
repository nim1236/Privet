function redirectToLogin() {
    var login = document.getElementById("login").value;
    var password = document.getElementById("password").value;

    if (!login || !password) {
        alert("Пожалуйста, введите логин и пароль.");
        return; // Прерываем выполнение функции, так как поля не заполнены
    }

    if (!login.includes("@gmail.com")) {
        alert("Введите логин(email) правильно.");
        return; // Прерываем выполнение функции, так как логин не соответствует требованию
    }

    var hasUppercase = /[A-Z]/.test(password);
    var hasDigit = /\d/.test(password);
    var hasSpecialChar = /[!"()-?:;,]/.test(password);
    var isLongEnough = password.length >= 8;
    var hasRussianUppercase = /[А-Я]/.test(password);

    if (!(hasUppercase && hasDigit && hasSpecialChar && isLongEnough && hasRussianUppercase)) {
        alert("Введите пароль правильно.");
        return; // Прерываем выполнение функции, так как пароль не соответствует требованию
    }

    // Если все проверки прошли успешно, перенаправьтесь на другой сайт
    window.location.href = "LOGIN1.html";
    document.getElementById('toggle-password').checked = false;
}
var password = document.getElementById('password');
var togglePassword = document.getElementById('toggle-password');

togglePassword.addEventListener('change', function () {
  if (togglePassword.checked) {
    password.type = 'text';
  } else {
    password.type = 'password';
  }
});
// Получаем кнопку "Войти" по классу
const loginButton = document.querySelector(".login-button");

// Добавляем обработчик клика на кнопку "Войти"
loginButton.addEventListener("click", redirectToLogin);

// Инициализация тостов и показ по кнопке
var liveToastBtn = document.getElementById("liveToastBtn");
var liveToast = new bootstrap.Toast(document.getElementById("liveToast"));

liveToastBtn.addEventListener("click", function () {
  liveToast.show();
});