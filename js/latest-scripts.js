// search icon to pop up google search field

const search = document.querySelector(".search-pop-up-hidden");

console.log("hidden google search",search);

const searchIcon = document.querySelector(".search");

console.log("search icon",searchIcon);

searchIcon.addEventListener("click",OpenSearch);

function OpenSearch () {
    console.log("search icon pressed");
    search.classList.replace("search-pop-up-hidden","search-pop-up-open");
    searchIcon.style.display=("none");
}

// close search

const closeButton = document.getElementById("search-close");

closeButton.addEventListener("click",CloseSearch);

function CloseSearch () {
    console.log("close search icon pressed")
    search.classList.replace("search-pop-up-open", "search-pop-up-hidden");
    searchIcon.style.display=("block");
}



// hamburger icon to pop up nav menu

//get hamburger icon

const menuIcon = document.querySelector(".hamburger");

console.log("menu button",menuIcon);


// get nav 

const navList = document.querySelector("nav");

console.log("nav list",navList);

// get menu items [links and current page]

const navLink = document.querySelectorAll(".nav-link")

console.log("nav items",navLink);


// event listener

menuIcon.addEventListener("click",OpenNavMenu);

// function

function OpenNavMenu () {
    console.log("menu icon pressed")
    navList.classList.add("shown");
    menuIcon.style.display=("none");

//     for (const i = 0; i < navLink.length; i++)
//     navLink[i].classList.add("shown");  
}

