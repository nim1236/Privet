// Проверяем, есть ли информация о пользователе в localStorage
const user = JSON.parse(localStorage.getItem("user"));

if (user) {
    // Если пользователь авторизован, перенаправляем его на LOGIN1
    alert("Пользователь уже зарегистрирован.");
    window.location.href = "LOGIN1.html";
} else {
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
        // Сохраняем информацию о пользователе в localStorage
        localStorage.setItem("user", JSON.stringify({ login: login, password: password }));
    
        window.location.href = "LOGIN1.html";
        
        document.getElementById('toggle-password').checked = false;
    }
    var passwordField = document.getElementById('password');
        var togglePassword = document.getElementById('toggle-password');
    
        togglePassword.addEventListener('change', function () {
            passwordField.disabled = true;
            if (togglePassword.checked) {
                passwordField.type = 'text';
            } else {
                passwordField.type = 'password';
            }
            passwordField.disabled = false;
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
}


 