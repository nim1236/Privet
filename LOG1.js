const finishButton = document.querySelector(".finish-button");

finishButton.addEventListener("click", function() {
    window.location.href = "index.html";
});

const deleteStorageButton = document.querySelector(".delete-storage-button");

deleteStorageButton.addEventListener("click", function() {
    localStorage.removeItem('user');
    alert("Сохранения удалены.");
});