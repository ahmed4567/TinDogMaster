/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */
//Global Variables
const sec = document.querySelectorAll('section')
const navey = document.querySelectorAll('a')
const newul = document.getElementById('navbar-nav')

/**
 * End Global Variables
 * Start Helper Functions
 * 
 */
onscroll = function() {
    var scrolp = document.documentElement.scrollTop
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;

    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")

    } else {
        navbar.classList.remove("sticky");
    }
    sec.forEach(element => {
        if (
            scrolp >= element.offsetTop - element.offsetHeight &&
            scrolp < element.offsetTop + element.offsetHeight * 0.5
        ) {

            //  console.log(curantId)
            var curantId = element.attributes.id.value
            adActiveClass(curantId)
        } else {
            var curantId = element.attributes.id.value
            removeActiveClass(curantId)


        }
    })
}


var removeActiveClass = function(id) {
    let navslec = document.querySelector('#nav_' + id)
    if (navslec.classList.contains('your-active-class')) {
        navslec.classList.remove('your-active-class')
    }

}
var adActiveClass = function(id) {
    let navslec = document.querySelector('#nav_' + id)
    navslec.classList.add('your-active-class')
}

// build the nav
sec.forEach(element => {
    const newli = document.createElement('li')
    const newa = document.createElement('a')
    newli.classList.add('nav-item')
    newli.innerHTML = `<a class="nav-link" id="nav_${element.getAttribute('id')}" data-link =${element.getAttribute('id')}>${element.getAttribute('data-nav')}</a>`

    newli.appendChild(newa)
    newul.appendChild(newli)
});
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
const links = document.querySelectorAll('.nav-link')
links.forEach(link => {
    const e = document.getElementById(link.getAttribute("data-link"))
    link.addEventListener("click", () => {
        console.log(e)
        e.scrollIntoView({ behavior: "smooth", block: "center" })

    })
})