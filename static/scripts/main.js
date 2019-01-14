function open(tela) {
    var children = document.getElementsByClassName('child');
    var shown_screen = ''
    var hidden_screen = ''

    for (var x = 0; x < children.length; x++) {
        if (window.getComputedStyle(children[x]).getPropertyValue('display') != 'none') {
            shown_screen = children[x]
        }
        else if (window.getComputedStyle(children[x]).getPropertyValue('display') == 'none') {
            if (children[x].id == tela) {
                hidden_screen = children[x]
            }
        }
        else {
            console.log('não entrou: ' + children[x])
        }
    }

    if (shown_screen) {
        if (shown_screen.id != tela) {
            shown_screen.style.display = 'none';
        }
    }
    if (hidden_screen){
        hidden_screen.style.display = 'block';
    }
}

function navBarFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


var current = null;

function openNav(nav) {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    if (w <= 600) {
        document.getElementById("mainconhecimentos").style.marginLeft = "160px";
        document.getElementById(nav).style.width = "160px";
    }
    else {
        if (w <= 889) {
            document.getElementById("mainconhecimentos").style.marginLeft = "260px";
        }
        document.getElementById(nav).style.width = "260px";
    }

    if (current != null && current != nav) {
        document.getElementById(current).style.width = "0";
    }

    current = nav
}

function sleep() {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > 5) {
            break;
        }
    }
}

function closeNav() {
    document.getElementById(current).style.width = "0";
    document.getElementById("mainconhecimentos").style.marginLeft = "0";
    current = null;
}