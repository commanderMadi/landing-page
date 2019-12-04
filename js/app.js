/* The global Vars */

const sections = document.getElementsByTagName("section");
const navigationList = document.getElementById("navbar__list");

// Populating the nav using vanilla JS
function populateNav() {
    for (let section of sections) {
        let navItem = document.createElement("li");
        let navLink = document.createElement("a");
        navLink.setAttribute("href", `#${section.id}`);
        navItem.appendChild(navLink);
        navLink.textContent = section.getAttribute("data-nav");
        navigationList.appendChild(navItem);
        window.addEventListener("scroll", function () {
            if (checkIfInViewPort(section)) {
                section.classList.add("your-active-class");
                navItem.classList.add("active-link");
            } else {
                section.classList.remove("your-active-class");
                navItem.classList.remove("active-link");
            }
        });
    }
}

// A helper function to check if element is in viewport
function checkIfInViewPort(element) {
    const coords = element.getBoundingClientRect();
    // return true if yes and do something
    // we will check for the innerWidth/innerHeight or clientWidth/clientHeight to avoid browser compat issues
    return (
        coords.top >= 0 &&
        coords.left >= 0 &&
        coords.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
        coords.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Checking if the element is in the viewport upon each scroll. Is there a way to do it without using scroll?

populateNav();