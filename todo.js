const item = document.querySelector("#todoitem")
const todoBox = document.querySelector("#to-do-box")

item.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        if (this.value == "") {
            alert('plese enter somehing')
        }
        else {
            addTodolist(this.value);
            this.value = "";
        }
    }
})

const addTodolist = (item) => {
    const listItem = document.createElement("li")
    listItem.innerHTML = `
    ${item} 
    <i class="fa-solid fa-circle-xmark"></i>`;
    listItem.addEventListener("click", function () {
        this.classList.toggle("markdone")
    })
    listItem.querySelector("i").addEventListener("click", function () {
        listItem.remove()
    })
    todoBox.appendChild(listItem);
}

