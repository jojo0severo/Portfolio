// Openned navbar (DataScience, Speech, Languages...)
var current_navbar;

// Who called the navbar (Ver Linguagens, Ver DataScience, Ver Outros ...)
var rollback_navitem;

// Open a chosen navbar
function open_nav(nav, caller) {
    let window_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    // Measure for different screen size
    if (window_width <= 600) {
        document.getElementById("main_knowledges").style.marginLeft = "160px";
        document.getElementById(nav).style.width = "160px";
    }
    else {
        document.querySelector(".main_knowledges").style.marginLeft = "260px";
        document.getElementById(nav).style.width = "260px";
    }

    // Close the older navbar if another was openned
    if (current_navbar != null && current_navbar != nav) {
        document.getElementById(current_navbar).style.width = "0";
    }

    // Set rollback to the most recent caller
    rollback_navitem = caller.parentElement.parentElement;
    current_navbar = nav;
}

// Close the current navbar
function close_nav() {
    document.getElementById(current_navbar).style.width = "0";
    document.querySelector(".main_knowledges").style.marginLeft = "0";
    current_navbar = null;
}

// The selected item inside navbar (Languages: Python, Java, R...)
var current_navitem;

// Show the item
function open_item(item, sub_menu) {
    // Get all the children of the selected navbar item
    // It is necessary because not all the items are unique and each one will display different results
    let selected_menu_children = document.getElementById(sub_menu).children;

    for (let i = 0; i < selected_menu_children.length; i++) {
        // Get the class name to see if it is the requested (Python, SQLite, Java, Heroku...)
        let child_class_name = selected_menu_children[i].className.substring(5, selected_menu_children[i].className.lastIndexOf(' '));

        if (child_class_name == item) {
            // Close any openned navbar item
            look_after_openned(item)
            current_navitem = selected_menu_children[i]
            selected_menu_children[i].style.display = 'block';
            selected_menu_children[i].style.margin = 'auto';

            // Shadows the previous text
            document.getElementById('screens').style = 'box-shadow: inset 0 0 100vw  black;'

            // Scroll to the openned element
            selected_menu_children[i].scrollIntoView({ block: 'start', behavior: 'smooth' });
        }
    }
    // Show the button to go back to the previous 
    document.getElementById('back_button').style.display = 'block';

    // Close the navbar
    close_nav()

    let sticky_button = document.getElementById("back_button");

    // Get the back button position (aka sticky button)
    let sticky = sticky_button.offsetTop;

    window.onscroll = function () {
        // Control if the button will desappear from the screen and set 'position: fixed' whenever it will happen
        sticky_func(sticky_button, sticky) 
    };

}

// Closes the current navbar
function close_menu() {
    document.getElementById('screens').style.boxShadow = 'none';
    document.getElementById('back_button').style.display = 'none';
    current_navitem.style.display = 'none';
    rollback_navitem.scrollIntoView({ block: 'start', behavior: 'smooth' });
}

// Look over al the navbar items and closes the openned
function look_after_openned(item) {
    let menu_items = document.getElementById('menu_knowledges').children;

    for (let i = 0; i < menu_items.length; i++) {
        for (let j = 0; j < menu_items[i].children.length; j++) {
            let temp = menu_items[i].children[j].className
            if (temp.substring(5, temp.lastIndexOf(' ')) != item) {
                if (menu_items[i].children[j].style.display == 'block') {
                    menu_items[i].children[j].style.display = 'none';
                    return 1;
                }
            }
        }
    }
    return 0;
}

// Control the position of the sticky button
function sticky_func(sticky_button, sticky) {
    // If the page top will overlap the sticky button
    if (window.pageYOffset > sticky) {
        sticky_button.classList.add("sticky_top");
        sticky_button.classList.remove("sticky_bottom");

        // Margin added to keep the element in the desired position
        current_navitem.style.marginTop = '170px'
    }

    // if the page bottom will overlap the sticky button
    else if (window.pageYOffset + window.innerHeight < sticky + sticky_button.offsetHeight) {
        sticky_button.classList.add("sticky_bottom");
        sticky_button.classList.remove("sticky_top");
        current_navitem.style.marginTop = '0px'
    }

    // if none of the above cases happen
    else{
        current_navitem.style.marginTop = '0px'
        sticky_button.classList.remove("sticky_bottom");
        sticky_button.classList.remove("sticky_top");
    }
}