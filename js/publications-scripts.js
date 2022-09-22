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




// Publications filter :: display: block on classes by default ::

// get all buttons 

const benefitsPubButton = document.getElementById("benefits-button");
const disabilityPubButton = document.getElementById("disability-button");
const SocialSciencePubButton = document.getElementById("social-science-button");
const ShowAllPubButton = document.getElementById("show-all-button");

console.log("filter benefits button", benefitsPubButton);
console.log("filter disability button", disabilityPubButton);
console.log("filter SocSci button", SocialSciencePubButton);
console.log("Show all pubs button", ShowAllPubButton);


// get all classes for filters 



const benefitsPub = document.getElementsByClassName("publication.benefits");

const disabilityPub = document.getElementsByClassName("publication.disability");

const socialSciencePub = document.getElementsByClassName("publication.social-science");

const otherPub = document.getElementsByClassName("publication.other");

console.log(otherPub);

// event listener "click" on all buttons

benefitsPubButton.addEventListener('click', FilterBenefits);

disabilityPubButton.addEventListener('click', FilterDisability);

SocialSciencePubButton.addEventListener('click', FilterSocialScience);

ShowAllPubButton.addEventListener('click', ShowAll);


// BENEFITS FILTER if benefits button = click => visability for publication.benefits = display:block // else visibility for publication =  toggle display:none

function FilterBenefits() {
    console.log("filtering by benefits")
    otherPub.style.display=("none");
    disabilityPub.style.display=("none");
    socialSciencePub.style.display=("none");
    disabilityPub.style.display=("none");
}

// DISABILITY FILTER

function FilterDisability() {

}

// SOC SCI FILTER

function FilterSocialScience() {

}

// SOC SCI FILTER -- REFRESH PAGE?

function ShowAll() {
    window.location.reload();
}


