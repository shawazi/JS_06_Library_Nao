const form = document.getElementById("book-form") as HTMLFormElement;

// let books = localStorage.getItem("books") === null
// ? [] : JSON.parse(localStorage.getItem("books"))


// console.log(books)

form.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    const id = (Math.random() * 100);
    
    const inputTitle = document.getElementById("title") as HTMLInputElement;
    const inputAuthor = document.getElementById("author") as HTMLInputElement;
    const inputIsbn = document.getElementById("isbn") as HTMLInputElement;

    const values: string[] = [inputTitle.value, inputAuthor.value, inputIsbn.value];

    const newBook = {id: id, values: values};

    // books.push(newBook);

    inputTitle.value = "";
    inputAuthor.value = "";
    inputIsbn.value = "";

    displayResult(values);

    // localStorage.setItem("books", JSON.stringify(books));
});

function displayResult(arg: string[]) {
    const outputField = document.getElementById("book-list") as HTMLElement;
    const trElement = document.createElement("tr") as HTMLElement;

    for (let x = 0; x < arg.length; x++) {
        const tdElement = document.createElement("td") as HTMLElement;
        tdElement.innerText = arg[x];
        trElement.appendChild(tdElement);
    };

    const tdElement = document.createElement("td") as HTMLElement;
    tdElement.innerHTML = `<a href="#" class="delete">X</a>`;
    
    trElement.appendChild(tdElement);

    outputField.appendChild(trElement);
};

document.getElementById("book-list")?.addEventListener("click", (e) => {
    // console.log(e);
    const element = e.target as HTMLElement;
    // console.log(element.className === "delete");
    
    if (element.className === "delete") {
        element.parentElement?.parentElement?.remove();
    };
});

