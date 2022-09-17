
{/* // TODO: Deklarasi variable sesuai dengan kebutuhan di sini */ }
let button;
let output;
let form = document.querySelector('#addToDo');
let input = document.querySelector('#todo-input');
let todolist = document.querySelector('#todo-output');

function fnClickHandler(toDoItem) {

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let newToDo = document.createElement('li');
        let newToDoName = document.createElement('span');
        let completeBtn = document.createElement('button');
        newToDoName.innerText = input.value;
        newToDo.appendChild(newToDoName);
        input.value = '';
        todolist.appendChild(newToDo);

        // TODO: register event onclick / addEventListener untuk button
        // akan menjalankan fungsi fnClickHandler
        completeBtn.addEventListener("click", function (e) {
            newToDo.innerHTML = newToDoName.innerText.strike();
        })

    })
}

{/* // TODO: register event onkeypress / addEventListener untuk input */ }
{/* // sehingga saat di input ditekan enter akan menjalankan fungsi fnClickHandler juga */ }

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("todo-submit").click();
    }
});


