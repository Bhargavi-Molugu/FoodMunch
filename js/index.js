let exploreMenu = [
  {
    title: "Non-Veg Starters",
    image: "./images/em-ginger-fried-img.png",
  },
  {
    title: "Non-Veg Starters",
    image: "./images/em-ginger-fried-img.png",
  },
  {
    title: "Non-Veg Starters",
    image: "./images/em-ginger-fried-img.png",
  },
  {
    title: "Non-Veg Starters",
    image: "./images/em-ginger-fried-img.png",
  },
  {
    title: "Non-Veg Starters",
    image: "./images/em-ginger-fried-img.png",
  },
  {
    title: "Non-Veg Starters",
    image: "./images/em-ginger-fried-img.png",
  },
  {
    title: "Non-Veg Starters",
    image: "./images/em-ginger-fried-img.png",
  },
  {
    title: "Non-Veg Starters",
    image: "./images/em-ginger-fried-img.png",
  },
  {
    title: "Non-Veg Starters",
    image: "./images/em-ginger-fried-img.png",
  },
  {
    title: "Non-Veg Starters",
    image: "./images/em-ginger-fried-img.png",
  }
];
function onLoad() {
  let menuList = document.querySelector(".menu-list");
  exploreMenu.forEach((menuObj) => {
    let listItem = document.createElement("li");
    let img = document.createElement("img");
    let listDiv = document.createElement("div");
    let listPara = document.createElement("p");
    let listLink = document.createElement("a");
    listItem.classList.add("menu-items");
    img.classList.add("menu-img");
    listDiv.classList.add("menu-div");
    listPara.classList.add("menu-text");
    listLink.classList.add("menu-link");
    img.src = menuObj.image;
    listPara.innerHTML = menuObj.title;
    listLink.innerText = "View All";
    listItem.append(img);
    listDiv.append(listPara);
    listDiv.append(listLink);
    listItem.append(listDiv);
    menuList.append(listItem);
  });
}

//what is for loop
//different ways to loop array
//difference between for loop and for each
//what is map in javascript
//what is arrow function
//difference between let,const and var