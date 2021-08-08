function listOfColours(colours) {
  // select content
  let contentId = document.getElementById("content");
  
  // Create form and appended to content
  let formEl = document.createElement("form");
  contentId.appendChild(formEl);

  // create select and appended to form
  let selectEl = document.createElement("select");
  formEl.appendChild(selectEl);
  
  // create P and appended to content
  let paragraph = document.createElement("p");
  paragraph.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero...";
  contentId.appendChild(paragraph);
  
  
  // create none option in the first of dropdown list and appended to select
  let optionNone = document.createElement("option");
  optionNone.innerText = "Select Colour";
  selectEl.appendChild(optionNone);
  

  // create forEach method to select each color and append them to select
  colours.forEach(colour => {
    let optionEl = document.createElement("option");
    optionEl.value = colour; 
    optionEl.innerText =  colour;
    selectEl.appendChild(optionEl)
  });
  // add event listener to select
  selectEl.addEventListener("change", changeColour);
    function changeColour (){
      let chooseColor = document.querySelector("select").value;
      paragraph.style.color = chooseColor;
      alert("You have selected: " + chooseColor);
    }
  
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
