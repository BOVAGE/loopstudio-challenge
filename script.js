const MENUICON = document.querySelector("#menuicon");
const HEADING = document.querySelector("#brandname");
const MENUBAR = document.querySelector("#menubar");


MENUICON.addEventListener("click", () => {
    MENUBAR.classList.toggle("show");
    if (MENUBAR.classList.contains("show")) {
        MENUICON.src="images/icon-close.svg"
        document.body.classList.toggle("overflow")
    }else {
        MENUICON.src="images/icon-hamburger.svg"
    }
})

