const finishButton = document.querySelector(".finish-button");

finishButton.addEventListener("click", function() {
    window.location.href = "index.html";
});

const deleteStorageButton = document.querySelector(".delete-storage-button");
// Получаем элементы по идентификатору
const loginInput = document.getElementById("login");
const passwordInput = document.getElementById("password");


// Добавляем обработчик событий для кнопки "Удалить сохранение"
deleteStorageButton.addEventListener('click', function() {
    // Удаляем данные пользователя из localStorage
    localStorage.removeItem('user');
    alert("Сохранения удалены.");
    // Очищаем поля ввода логина и пароля
    loginInput.value = '';
    passwordInput.value = '';
});