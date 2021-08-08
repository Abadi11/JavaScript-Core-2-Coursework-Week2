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

 