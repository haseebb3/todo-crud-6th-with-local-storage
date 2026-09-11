











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
console.log(todosArray);








