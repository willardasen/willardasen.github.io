var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents")

function openTab(tabName){
    for(tabLink of tabLinks){
        tabLink.classList.remove("active-link");
    }
    for(tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}

var sideMenu = document.getElementById("sidemenu");

function openMenu(){
    sideMenu.style.right = "0";
}

function closeMenu(){
    sideMenu.style.right = "-200px";
}

// scroll animation
ScrollReveal({
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200,
});


ScrollReveal().reveal(".logo, .about-col-1, .header-text, .sub-title,.services-list, .work-list,.certificate-list, .contact-left", { origin: "left" });
ScrollReveal().reveal(".sidemenu, .about-col-2, .contact-right", { origin: "right" });
ScrollReveal().reveal(".btn", { origin: "bottom" , delay: 400});

//contact form
const scriptURL = 'https://script.google.com/macros/s/AKfycbySArteCwrYNFYbaAytt0-WWxKWOlahS4WdxFFJEIO5Y8lZOhF-X-EPzhvaHQ8tHuMY/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        }, 3000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})



