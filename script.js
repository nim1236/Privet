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


// Получаем элемент кнопки "hw1"
const hw1Button = document.getElementById("hw1");

// Получаем элемент HW1
const hw1Element = document.getElementById("collapse-1");

// Переменная для отслеживания состояния HW1
let hw1IsOpen = false;

// Обработчик события click для кнопки "hw1"
hw1Button.addEventListener("click", function () {
    // Проверяем состояние HW1
    if (!hw1IsOpen) {
        alert("Вы открыли HW1");
    }

    // Изменяем состояние HW1
    hw1IsOpen = !hw1IsOpen;
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
