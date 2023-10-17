function redirectToLogin() {
    // Получите значение логина и пароля из полей ввода
    var login = document.getElementById("login").value;
    var password = document.getElementById("password").value;

    // Проверьте, что оба поля заполнены
    if (login && password) {
        // Проверьте, что логин содержит "@gmail.com"
        if (login.includes("@gmail.com")) {
            // Проверьте, что пароль соответствует требованиям
            var passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
            if (password.match(passwordRegex)) {
                // Если логин и пароль соответствуют требованиям, перенаправьтесь на другой сайт
                window.location.href = "LOGIN1.html";
            } else {
                // Выведите сообщение об ошибке для неправильного пароля
                alert("Пароль должен содержать как минимум 1 заглавную букву, 1 цифру, 1 знак препинания и быть длиной не менее 8 символов в рандомном порядке.");
            }
        } else {
            // Выведите сообщение об ошибке для неправильного логина
            alert("Логин должен содержать '@gmail.com'.");
        }
    } else {
        // Выведите сообщение об ошибке или предупреждение, если какое-то поле не заполнено
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