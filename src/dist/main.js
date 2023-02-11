"use strict";
var _a;
const form = document.getElementById("book-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const id = (Math.random() * 100);
    const inputTitle = document.getElementById("title");
    const inputAuthor = document.getElementById("author");
    const inputIsbn = document.getElementById("isbn");
    const values = [inputTitle.value, inputAuthor.value, inputIsbn.value];
    const newBook = { id: id, values: values };
    inputTitle.value = "";
    inputAuthor.value = "";
    inputIsbn.value = "";
    displayResult(values);
});
function displayResult(arg) {
    const outputField = document.getElementById("book-list");
    const trElement = document.createElement("tr");
    for (let x = 0; x < arg.length; x++) {
        const tdElement = document.createElement("td");
        tdElement.innerText = arg[x];
        trElement.appendChild(tdElement);
    }
    ;
    const tdElement = document.createElement("td");
    tdElement.innerHTML = `<a href="#" class="delete">X</a>`;
    trElement.appendChild(tdElement);
    outputField.appendChild(trElement);
}
;
(_a = document.getElementById("book-list")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", (e) => {
    var _a, _b;
    const element = e.target;
    if (element.className === "delete") {
        (_b = (_a = element.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.remove();
    }
    ;
});
