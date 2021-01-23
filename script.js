document.getElementById("menuBtn").addEventListener("click", toggleMenu);

function toggleMenu() {
    var menuBar = document.getElementById("navbar");
    if(menuBar.style.display === "none") {
        menuBar.style.display = "block";
		this.src = "images/icon-close.svg";
    } else{
        menuBar.style.display = "none";
		this.src = "images/icon-hamburger.svg";
    }
}


