function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  arrayOfPeople.forEach((obj) => {
    let heading1 = document.createElement("h1");
    let heading2 = document.createElement("h2");
    heading1.innerText = obj.name;
    heading2.innerText = obj.job;
    content.appendChild(heading1);
    content.appendChild(heading2);
  })
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
