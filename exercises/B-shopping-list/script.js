function shoppingList(arrayOfShopping) {
  // Write your code here...
  let content = document.querySelector("#content");
  let unordered = document.createElement("ul");
  arrayOfShopping.forEach((item) => {
    let orderedList = document.createElement("li");
    orderedList.innerText = item;
    unordered.appendChild(orderedList);
    content.appendChild(unordered)
  })
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
