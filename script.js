// Получаем элемент кнопки "Сбросить"
const resetButton = document.querySelector(".btn-secondary");
// Получаем элемент кнопки "+"
const plusButton = document.querySelector(".btn-success");
// Получаем элемент кнопки "-"
const minusButton = document.querySelector(".btn-danger");

// Получаем элемент счетчика
const counterElement = document.querySelector(".count span");






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
document.querySelector(".plus-btn").addEventListener("click", incrementCounter);

// Добавляем обработчик клика на кнопку "-"
document.querySelector(".minus-btn").addEventListener("click", decrementCounter);

// Добавляем обработчик клика на "Сбросить"
document.querySelector(".reset-btn").addEventListener("click", resetCounter);


// Получаем элемент кнопки "hw1"
const hw1Button = document.getElementById("hw1");
// Получаем элемент кнопки "HW2"
const hw2Button = document.getElementById("hw2");

// Получаем элемент HW1
const hw1Element = document.getElementById("collapse-1");
// Получаем элемент HW2
const hw2Element = document.getElementById("collapse-2");

// Обработчик события показа элемента HW1
hw1Element.addEventListener("shown.bs.collapse", function () {
    alert("Вы открыли HW1");
});

// Обработчик события скрытия элемента HW1
hw1Element.addEventListener("hidden.bs.collapse", function () {
    // Ничего не делаем при закрытии
});

// Обработчик события показа элемента HW2
hw2Element.addEventListener("shown.bs.collapse", function () {
    alert("Вы открыли HW2");
});

// Обработчик события скрытия элемента HW2
hw2Element.addEventListener("hidden.bs.collapse", function () {
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

const jsSuccessElements = document.querySelectorAll(".js.success");

// Проходим по каждому элементу и меняем его стиль
jsSuccessElements.forEach(function(element) {
    // Добавляем класс "new-background-color" к элементу
    element.classList.add("new-background-color");
});



hw2Button.addEventListener("click", function () {
    
    window.location.href = "LOGIN.html";
});