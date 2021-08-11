function populateTodoList(todos) {
  const list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  todos.forEach((todo) => {
    // create li with its stuff
    const liEl = document.createElement("li");
    liEl.innerText = todo.task;
    liEl.className = "list-group-item d-flex justify-content-between align-items-center";

    // create span element with its stuff
    const spanEl = document.createElement("span");
    spanEl.className = "badge bg-primary rounded-pill";

    // create i elements with their stuff
    const iEl1 = document.createElement("i");
    iEl1.className = "fa fa-check";
    iEl1.setAttribute("aria-hidden", true);
    const iEl2 = document.createElement("i");
    iEl2.className = "fa fa-trash";
    iEl2.setAttribute("aria-hidden", true);

    

    // append child to all elements
    spanEl.appendChild(iEl1);
    spanEl.appendChild(iEl2);
    liEl.appendChild(spanEl);
    list.appendChild(liEl);
    
    // The first `<i>` tag that applies a line-through text-decoration styling
  iEl1.addEventListener("click", function(){
    todo.completed = true;
    /*
    if (liEl.style.textDecoration === "line-through"){
      liEl.style.textDecoration = "none";
    }else{
      liEl.style.textDecoration = "line-through";
    };
    */
    if(todo.completed){
      liEl.style.textDecoration = "line-through";
    } 
  });

  // The second `<i>` tag that deletes the parent `<li>` element from the `<ul>`.
  iEl2.addEventListener("click", function (){
      liEl.remove();
  });
  
  });

  

  

}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];



// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  
    const inputTodo = document.getElementById("todoInput").value; 
    let obj = {task: inputTodo, completed: false};
    populateTodoList([obj]);
    todos.push(obj)
    
  
}
console.log(todos);

populateTodoList(todos);
// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).

// create a delete completed button in the end of list

function deleteAllCompletedTodos() {
  // Write your code here...
  const contentOfList = document.querySelector(".col-sm");
  const deleteCompletedBtn = document.createElement("button");
  deleteCompletedBtn.innerText = "Delete Completed Task";
  deleteCompletedBtn.className = "btn btn-primary mb-3";
  contentOfList.appendChild(deleteCompletedBtn)

  //

  

  deleteCompletedBtn.addEventListener("click", () => {
    list = document.querySelectorAll("li .list-group-item")
    list.forEach((li) => {
      if (li.style.textDecoration === "line-through"){
      li.delete();
    }
    })
    
  })
}
deleteAllCompletedTodos()