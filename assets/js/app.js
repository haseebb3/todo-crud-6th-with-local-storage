const addTodoBtn = document.getElementById("addTodoBtn");
const form = document.getElementById("form");
const todoItemControl = document.getElementById("todoItem");
const listsContainer = document.getElementById("listsContainer");

// const defaultTodos = [
//   {
//     todoId: "1",
//     title: "Complete JavaScript",
//   },
//   {
//     todoId: "2",
//     title: "Build Todo ",
//   },
//   {
//     todoId: "3",
//     title: "learning Angular",
//   },
// ];

// localStorage.setItem("allTodos", JSON.stringify(defaultTodos));
let todosArray = JSON.parse(localStorage.getItem("allTodos")) || [];

//read
function renderTodos(arr) {
  let res = ``;
  arr.forEach((todo) => {
    res += `
      <li class="list-group-item d-flex justify-content-between align-content-center" id="${todo.id}">
                  <strong>${todo.todoItem}</strong>
                  <div>
                    <button class="btn btn-sm btn-primary mr-2">Edit</button>
                    <button onclick="onTodoDeleteHandler(this)" class="btn btn-sm btn-danger">Delete</button>
                  </div>
                </li>
    `;
    listsContainer.innerHTML = res;
  });
}

renderTodos(todosArray);

function onFormSubmitHandler(event) {
  event.preventDefault();
  const newTodoObj = {
    todoItem: todoItemControl.value,
    id: Date.now().toString(),
  };
  form.reset();
  todosArray.unshift(newTodoObj);
  localStorage.setItem("allTodos", JSON.stringify(todosArray));
  let newLi = document.createElement("li");
  newLi.className =
    "list-group-item d-flex justify-content-between align-content-center";
  newLi.id = newTodoObj.id;
  newLi.innerHTML = `
    <strong>${newTodoObj.todoItem}</strong>
                  <div>
                    <button class="btn btn-sm btn-primary mr-2">Edit</button>
                    <button onclick="onTodoDeleteHandler(this)" class="btn btn-sm btn-danger">Delete</button>
                  </div>
  `;
  listsContainer.prepend(newLi);
  Swal.fire({
    text: `Todo ${newTodoObj.todoItem} is added successfully`,
    icon: "success",
    timer: 2500,
  });
}

function onTodoDeleteHandler(ele) {
  const deleteId = ele.closest("li").id;
  let isConfirm = confirm(
    `Are you sure you want to delete todo with id : ${deleteId}`,
  );
  if (isConfirm) {
    const deleteIndex = todosArray.findIndex((todo) => todo.id === deleteId);
    todosArray.splice(deleteIndex, 1);
    localStorage.setItem("allTodos", JSON.stringify(todosArray));
    //ui update 
    let deleteLi = document.getElementById(deleteId);
    deleteLi.remove();
    Swal.fire({
    text: `Todo ${deleteId} is delted successfully`,
    icon: "success",
    timer: 2500,
  });
  }
}

form.addEventListener("submit", onFormSubmitHandler);
