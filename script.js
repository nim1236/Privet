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

// Обработчик события показа элемента HW1
hw1Element.addEventListener("shown.bs.collapse", function () {
    alert("Вы открыли HW1");
});

// Обработчик события скрытия элемента HW1
hw1Element.addEventListener("hidden.bs.collapse", function () {
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

// Выбираем элементы, содержащие нужные тексты
const elementsWithText = Array.from(document.querySelectorAll(".js, .success")).filter(element => {
    const text = element.textContent.trim();
    return text === "Сделать счетчик с 2 кнопками (+ -) и числом count" ||
           text === "Сделать alert при клике на hw-1 в хедере" ||
           text === "Сделать alert при клике на ссылку меню";
});

// Добавляем новый класс "new-background-color" к найденным элементам
elementsWithText.forEach(function(element) {
    element.classList.add("new-background-color");
});
