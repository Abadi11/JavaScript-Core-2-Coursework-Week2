function listOfColours(colours) {
  let contentId = document.querySelector("#content");
  let formEl = document.createElement("form");
  let selectEl = document.createElement("select");
  let paragraph = document.createElement("p");
  paragraph.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero...";
  contentId.appendChild(formEl)
  contentId.appendChild(paragraph);
  
  let optionNone = document.createElement("option");
  selectEl.appendChild(optionNone);
  formEl.appendChild(selectEl);


  colours.forEach(colour => {
    let optionEl = document.createElement("option");
    optionEl.value = colour; 
    optionEl.innerText =  colour;
    optionEl.addEventListener("click", change);
    function change (){
      
      paragraph.style.color = colour;
    }
    selectEl.appendChild(optionEl)
  })
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
