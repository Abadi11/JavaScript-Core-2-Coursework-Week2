function readingList(books) {
  // Write your code here...
  let contentId = document.querySelector("#content");
  //contentId.style.display = "flex";
  let bookListHeading1 = document.createElement("h1");
  bookListHeading1.innerText = "Book List";
  let unorderedList = document.createElement("ul");
  unorderedList.className = "ul";
  contentId.appendChild(bookListHeading1);
  contentId.appendChild(unorderedList);
  books.forEach((book) => {
    let newParagraph = document.createElement("p")
    //newParagraph.style.display = "inline-block";
    let list = document.createElement("li");
    let imageEl = document.createElement("img");
    imageEl.src = book.coverPage.src;
    imageEl.alt = book.coverPage.alt;
    imageEl.style.width = "auto"
    newParagraph.innerText = book.title + " - " + book.author;
    if (book.alreadyRead){
      list.style.backgroundColor = "green";
    }else{
      list.style.backgroundColor = "red"
    }
    list.appendChild(newParagraph);
    list.appendChild(imageEl);
    list.className = "li";
    unorderedList.appendChild(list);
    //contentId.appendChild(newParagraph)
  })
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false, 
    coverPage : {
      src: "https://www.uxmetric.com/wp-content/uploads/2018/10/2013_design_of_everyday_things.jpg.300x400_q95_autocrop_crop-scale_upscale-300x381.jpg",
      alt: "Cover Page of The Design of Everyday Things"
    }
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    coverPage : {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRybscEdY3QcoQ8NPyIIPg0CfImXospbng4govp194T1ZFoIpnU-VSI0DRg6t8R5EjUgHeXIv8&usqp=CAc",
      alt: "Cover Page of The Most Human Human"
    }
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    coverPage : {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRznhuMiOe3CR6-s9LplZHSkv9p4UH5DC8aK_4MKtZtM6PTigrRpE3-ElDDxEKpyVZgUYxw2s6H&usqp=CAc",
      alt: "Cover Page of The Pragmatic Programmer"
    }
  }
];

readingList(books);