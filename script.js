const MENUICON = document.querySelector("#menuicon");
const HEADING = document.querySelector("#brandname");
const MENUBAR = document.querySelector("#menubar");


MENUICON.addEventListener("click", () => {
    MENUBAR.classList.toggle("show");
    document.body.classList.toggle("overflow")
    if (MENUBAR.classList.contains("show")) {
        MENUICON.src="images/icon-close.svg"
    }else {
        MENUICON.src="images/icon-hamburger.svg"
    }
})

