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

function OpenNavMenu() {
    console.log('menu icon pressed');
    navList.classList.add("shown");
    for (let i = 0; i < navLink.length; i++) {
      console.log('navList[i]', navLink[i]);
      navLink[i].classList.add("shown");
    }
  }


// BENEFITS: OPEN STIGMA SUB
// get more stigma button and stigma extra-subsection

const stigmaButton = document.getElementById("more-stigma-button");

const stigmaExtra = document.getElementById("stigma");

console.log("Stigma button", stigmaButton);

console.log("Stigma extra section", stigmaExtra);

// add event listener to stigma button 

stigmaButton.addEventListener('click', stigmaOpen);

// function to toggle display of link and sub-section

function stigmaOpen () {
    stigmaButton.style.display=("none");
    stigmaExtra.style.display=("block");
    console.log("stigma open button pressed");
}

// BENEFITS: CLOSE STIGMA SUB

const hideStigmaButton = document.getElementById("less-stigma-button");

console.log(hideStigmaButton);

hideStigmaButton.addEventListener('click', stigmaClose);

function stigmaClose () {
    stigmaButton.style.display=("block");
    stigmaExtra.style.display=("none");
    console.log("stigma close button pressed");
}

// BENEFITS: OPEN attitude SUB
// get more stigma button and stigma extra-subsection

const attitudeButton = document.getElementById("more-attitude-button");

const attitudeExtra = document.getElementById("attitude");

console.log(attitudeButton);

console.log(attitudeExtra);

attitudeButton.addEventListener('click', attitudeOpen);


function attitudeOpen () {
    attitudeButton.style.display=("none");
    attitudeExtra.style.display=("block");
    console.log("open attitude button pressed");
}

// BENEFITS: CLOSE attitude SUB

const hideAttitudeButton = document.getElementById("less-attitude-button");

console.log(hideAttitudeButton);

hideAttitudeButton.addEventListener('click', attitudeClose);

function attitudeClose () {
    attitudeButton.style.display=("block");
    attitudeExtra.style.display=("none");
    console.log("hide attitude button pressed");
}
