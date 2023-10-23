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


// Получаем элемент HW1
const hw1Element = document.getElementById("collapse-1");

// Обработчик события показа элемента HW1
hw1Element.addEventListener("shown.bs.collapse", function () {
    alert("Вы открыли HW1");
});

// Обработчик события скрытия элемента HW1
hw1Element.addEventListener("hidden.bs.collapse", function () {
    // Ничего не делаем при закрытии
});

// Находим элемент по его id
const homework2Link = document.getElementById("homework2");

// Функция для обработки клика на элементе Homework_2
function handleClickOnHomework2() {
    alert("Вы кликнули на Homework_2");
}

// Добавляем обработчик события onclick для Homework_2
homework2Link.addEventListener("click", handleClickOnHomework2);



const jsSuccessElements = document.querySelectorAll(".js.success");

// Проходим по каждому элементу и меняем его стиль
jsSuccessElements.forEach(function(element) {
    // Добавляем класс "new-background-color" к элементу
    element.classList.add("new-background-color");
});



hw2Button.addEventListener("click", function () {
    
    window.location.href = "LOGIN.html";
});

