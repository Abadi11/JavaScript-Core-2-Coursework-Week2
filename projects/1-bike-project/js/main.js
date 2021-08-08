 // ----------------- Part #1 --------------

 // blue button 
 function blueBtn(){
   const blueBtnEl = document.getElementById("blueBtn")
   blueBtnEl.addEventListener("click", function(){
   const jumbotronEl = document.querySelector(".jumbotron");
   jumbotronEl.style.backgroundColor = "#588fbd";
   const donateABikeBtn = document.querySelector(".btn-lrg");
    donateABikeBtn.style.backgroundColor = `#ffa500`;
    const volunteerBtn = document.querySelector(".btn-secondary");
    volunteerBtn.style.backgroundColor = `white`;
  });
 }
blueBtn();

// orange button 

function orangeBtn(){
   const orangeBtnEl = document.getElementById("orangeBtn")
   orangeBtnEl.addEventListener("click", function(){
   const jumbotronEl = document.querySelector(".jumbotron");
   jumbotronEl.style.backgroundColor = `#f0ad4e`;
   const donateABikeBtn = document.querySelector(".btn-lrg");
    donateABikeBtn.style.backgroundColor = `#5751fd`;
    const volunteerBtn = document.querySelector(".btn-secondary");
    volunteerBtn.style.backgroundColor = `white`;
  });
 };
 orangeBtn();

 // green button
 function greenBtn(){
   const greenBtnEl = document.getElementById("greenBtn")
   greenBtnEl.addEventListener("click", function(){
   const jumbotronEl = document.querySelector(".jumbotron");
   jumbotronEl.style.backgroundColor = `#87ca8a`;
   const donateABikeBtn = document.querySelector(".btn-lrg");
    donateABikeBtn.style.backgroundColor = `black`;
    const volunteerBtn = document.querySelector(".btn-secondary");
    volunteerBtn.style.backgroundColor = `#8c9c08`;
  });
 };
 greenBtn();

 // ----------------- Part #2 --------------

 // Email
 // declare form, email, text, and describe yourself
 const formEl = document.querySelector("form");
 const emailEl = document.getElementById("exampleInputEmail1");
  const textEl = document.getElementById("example-text-input");
  const describeYourselfEl = document.getElementById("exampleTextarea");

  // add event listener
 formEl.addEventListener("submit", submitForm);

 // set the function of add event listener
 function submitForm(e){
  e.preventDefault();
  if (emailEl.value.length === 0 || !emailEl.value.includes("@")){
   emailEl.style.backgroundColor = "red";
  }else {
   emailEl.style.borderColor = "green"
  }
 
  if (textEl.value.length === 0){
   textEl.style.backgroundColor = "red";
  }else{
   textEl.style.borderColor = "green"
  }
  
  if(describeYourselfEl.value.length === 0){
   describeYourselfEl.style.backgroundColor = "red";
  }else{
   describeYourselfEl.style.borderColor = "green"
   alert("Thank you for filling out the form")
  }
  }
 