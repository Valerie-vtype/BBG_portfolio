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


// DISABILTIY: OPEN benefits SUB
// get more benfits button and benefits extra-subsection

const benefitsButton = document.getElementById("more-benefits-button");

const benefitsExtra = document.getElementById("benefits");

console.log("Benefits button", benefitsButton);

console.log("benefits extra section", benefitsExtra);

benefitsButton.addEventListener("click", benefitsOpen);


function benefitsOpen () {
    benefitsButton.style.display=("none");
    benefitsExtra.style.display=("block");
    console.log("button pressed");
}

// DISABILITY: CLOSE benefits SUB

const hideBenefitsButton = document.getElementById("less-benefits-button");

console.log("hide benefits button", hideBenefitsButton);

hideBenefitsButton.addEventListener('click', benefitsClose);

function benefitsClose () {
    benefitsButton.style.display=("block");
    benefitsExtra.style.display=("none");
    console.log("benefits close button pressed");
}

// DISABILTIY: OPEN work SUB
// get more benfits button and benefits extra-subsection

const workButton = document.getElementById("more-work-button");

const workExtra = document.getElementById("work");

console.log(workButton);

console.log(workExtra);

workButton.addEventListener('click', workOpen);


function workOpen () {
    workButton.style.display=("none");
    workExtra.style.display=("block");
    console.log("open work button pressed");
}

// DISABILITY: CLOSE work SUB

const hideWorkButton = document.getElementById("less-work-button");

console.log(hideWorkButton);

hideWorkButton.addEventListener('click', workClose);

function workClose () {
    workButton.style.display=("block");
    workExtra.style.display=("none");
    console.log("close work button pressed");
}


// DISABILTIY: OPEN poverty SUB
// get more benfits button and benefits extra-subsection

const povertyButton = document.getElementById("more-poverty-button");

const povertyExtra = document.getElementById("poverty");

console.log("poverty button", povertyButton);

console.log(" poverty extra section", povertyExtra);

povertyButton.addEventListener('click', povertyOpen);


function povertyOpen () {
    povertyButton.style.display=("none");
    povertyExtra.style.display=("block");
    console.log("poverty open button pressed");
}

// DISABILITY: CLOSE work SUB

const hidePovertyButton = document.getElementById("less-poverty-button");

console.log(hidePovertyyButton);

hidePovertyButton.addEventListener('click', povertyClose);

function povertyClose () {
    povertyButton.style.display=("block");
    povertyExtra.style.display=("none");
    console.log("poverty close button pressed");
}
