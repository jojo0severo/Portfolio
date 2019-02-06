// Control whether the navbar will be displayed like a list side by side or with a sandwich button
function navBarFunction() {
    let navbar = document.getElementById("navbar");
    if (navbar.className === "topnav") {
        navbar.className += " responsive";
    } else {
        navbar.className = "topnav";
    }
}