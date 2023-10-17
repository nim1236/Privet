function redirectToLogin() {
    // Получите значения логина и пароля из полей ввода
    var login = document.getElementById("login").value;
    var password = document.getElementById("password").value;

    // Проверьте, что оба поля заполнены
    if (login && password) {
        // Если оба поля заполнены, перенаправьтесь на другой сайт
        window.location.href = "LOGIN1.html";
    } else {
        // В противном случае покажите сообщение об ошибке или предупреждение
        alert("Пожалуйста, введите логин и пароль.");
    }
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
