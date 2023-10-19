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
    var hasSpecialChar = /[!@#$%^&*]/.test(password);
    var isLongEnough = password.length >= 8;

    if (!(hasUppercase && hasDigit && hasSpecialChar && isLongEnough)) {
        alert("Пароль должен содержать как минимум 1 заглавную букву, 1 цифру, 1 знак препинания и быть длиной не менее 8 символов в рандомном порядке.");
        return; // Прерываем выполнение функции, так как пароль не соответствует требованию
    }

    // Если все проверки прошли успешно, перенаправьтесь на другой сайт
    window.location.href = "LOGIN1.html";
}

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