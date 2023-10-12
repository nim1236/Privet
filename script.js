// Получаем элемент с id "counter"
const counterElement = document.getElementById("counter");

// Получаем элемент кнопки "Сбросить"
const resetButton = document.getElementById("reset-btn");

// Инициализируем переменную count
let count = 0;

// Функция для обновления значения счетчика на странице
function updateCounter() {
    counterElement.textContent = count;
}

// Функция для увеличения значения счетчика
function incrementCounter() {
    count++;
    updateCounter();
}

// Функция для уменьшения значения счетчика
function decrementCounter() {
    count--;
    updateCounter();
}

// Функция для сброса счетчика
function resetCounter() {
    count = 0;
    updateCounter();
}

// Добавляем обработчик клика на кнопку "+"
document.getElementById("plus-btn").addEventListener("click", incrementCounter);

// Добавляем обработчик клика на кнопку "-"
document.getElementById("minus-btn").addEventListener("click", decrementCounter);

// Добавляем обработчик клика на "Сбросить"
document.getElementById("reset-btn").addEventListener("click", resetCounter);


// Обработчик события для открытия HW1
document.getElementById("hw1").addEventListener("show.bs.collapse", function () {
    alert("Вы открыли HW1");
});

// Обработчик события для закрытия HW1
document.getElementById("hw1").addEventListener("hide.bs.collapse", function () {
    // Ничего не делаем при закрытии
});

// Получаем элемент с id "homework-list"
const homeworkList = document.getElementById("homework-list");

// Функция для обработки клика на элементе homework
function handleClickOnHomework() {
    alert("Вы кликнули на элемент homework");
}

// Получаем все элементы с классом "homework"
const homeworkItems = document.querySelectorAll(".homework");

// Добавляем обработчик клика для каждого элемента homework
homeworkItems.forEach(function(item) {
    item.addEventListener("click", handleClickOnHomework);
});
