function todoList(todos) {
  // Write your code here...
  let contentId = document.querySelector("#content");
  let unorderedEl = document.createElement("ul");
  contentId.appendChild(unorderedEl);
  todos.forEach(todo => {
    let list = document.createElement("li");
    list.innerText = todo.todo;
    
    list.addEventListener("click", lineThrough);

    function lineThrough(){
      //list.style.textDecoration = "line-through";
      if(list.style.textDecoration === "line-through"){
        list.style.textDecoration = "none";
      } else {
      list.style.textDecoration = "line-through";
    }
    };

    unorderedEl.appendChild(list)

  });
}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);