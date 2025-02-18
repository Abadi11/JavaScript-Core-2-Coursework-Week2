function highlightWords(paragraph, colours) {
  // ID content
  const contentId = document.getElementById("content");

  // create select and and options for each colour and append select to id and options to select
  const selectEl = document.createElement("select"); 
  // option for none
  const optionNone = document.createElement("option");
  optionNone.innerText = "Select a Colour";
  optionNone.value = "white";
  selectEl.appendChild(optionNone);
  contentId.appendChild(selectEl);
  colours.forEach(colour => {
    const optionEl = document.createElement("option");
    optionEl.value = colour;
    optionEl.innerText = colour;
    selectEl.appendChild(optionEl);
  });

  // declare paragraph element and appended to id, create the array of paragraph, create span element. 
  const paragraphEl = document.createElement("p");
  const words = paragraph.split(" ");
  words.forEach(word => {
  const spanEl = document.createElement("span");
    spanEl.innerText = word + " ";
// create event listener to the each of span 
    spanEl.addEventListener("click", highlight);
  function highlight(){
    const chooseColor = document.querySelector("select").value;
      spanEl.style.backgroundColor = chooseColor;
  } 
    paragraphEl.appendChild(spanEl);
  });

  contentId.appendChild(paragraphEl); 

  

  
  
    
}

  

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
