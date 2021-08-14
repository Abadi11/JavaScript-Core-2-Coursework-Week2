function populateTodoList(todos) {
  const list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.

  list.replaceChildren([]);

  todos.map(createTodoList).forEach((liEl) => list.appendChild(liEl));
}
function createTodoList(todo){

    // create li with its stuff
    const liEl = document.createElement("li");
    liEl.innerText = todo.task;
    liEl.className = "list-group-item d-flex justify-content-between align-items-center";

    // create span element with its stuff
    const spanEl = document.createElement("span");
    spanEl.className = "badge bg-primary rounded-pill";

    // create i elements with their stuff
    const completedBtn = document.createElement("i");
    completedBtn.className = "fa fa-check";
    completedBtn.setAttribute("aria-hidden", true);
    completedBtn.dataset.task = todo.task;
    completedBtn.addEventListener("click", handleCompletedBtn);
    
    if(todo.completed){
      liEl.style.textDecoration = "line-through";
    }

    const deletedBtn = document.createElement("i");
    deletedBtn.className = "fa fa-trash";
    deletedBtn.setAttribute("aria-hidden", true);
    deletedBtn.dataset.task = todo.task;
    deletedBtn.addEventListener("click", handleDeletedBtn);
    

    // append child to all elements
    spanEl.appendChild(completedBtn);
    spanEl.appendChild(deletedBtn);
    liEl.appendChild(spanEl);
    
    
    // The first `<i>` tag that applies a line-through text-decoration styling
  //completedBtn.addEventListener("click", function(){
    //todo.completed = true;
    /*
    if (liEl.style.textDecoration === "line-through"){
      liEl.style.textDecoration = "none";
    }else{
      liEl.style.textDecoration = "line-through";
    };
    */
    //if(todo.completed){
      //liEl.style.textDecoration = "line-through";
    //} 
  //});

  // The second `<i>` tag that deletes the parent `<li>` element from the `<ul>`.
  //deletedBtn.addEventListener("click", function (){
  //    liEl.remove();
  //});

  return liEl;
}

function handleCompletedBtn(event){
  
  let currentTask = event.currentTarget.dataset.task;
  todos
    .filter((todo) => todo.task === currentTask)
    .forEach(toggleTodoCompleted);
  
  populateTodoList(todos);
}

function handleDeletedBtn (event){
  let currentTask = event.currentTarget.dataset.task;
  let index = todos.indexOf((todo) => todo.task === currentTask);
  //console.log(index)
  deleteTodo(index)
  populateTodoList(todos);
}

let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);





// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  
    const inputTodo = document.getElementById("todoInput"); 
    let newTodo = {task: inputTodo.value, completed: false};
    todos.push(newTodo);
    populateTodoList(todos);
    inputTodo.value = "";
  
}

function toggleTodoCompleted(todo){
  todo.completed = !todo.completed;
}

function deleteTodo(index){
  todos.splice(index , 1);
}


// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).

// create a delete completed button in the end of list

function deleteAllCompletedTodos(event) {
  // Write your code here...
  event.preventDefault();
  /*
    let allLi = document.querySelectorAll("#todo-list li");
    allLi.forEach((li) => {
      if (li.style.textDecoration === "line-through"){
        li.remove();
      }
    })
    */
  todos = todos.filter((todo) => !todo.completed);
  populateTodoList(todos);
}
console.log(todos);