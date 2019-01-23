
// Show the selected screen
function show(selected_screen_id, is_loading) {
    if (is_loading){
        setTimeout(_=>{
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }, 20);
    }

    let children = document.getElementsByClassName('child');
    let shown_screen = ''
    let selected_screen = ''

    // If the user decides to change screen without using the sticky button it will set the elements back to "normal"
    if (current_navitem){
        document.getElementById('screens').style.boxShadow = 'none';
        document.getElementById('back_button').style.display = 'none';
        current_navitem.style.display = 'none';
    }

    for (let i = 0; i < children.length; i++) {
        // Get the current screen that is being shown 
        if (window.getComputedStyle(children[i]).getPropertyValue('display') != 'none') {
            shown_screen = children[i]
        }
        // Get the selected screen by id
        else if (window.getComputedStyle(children[i]).getPropertyValue('display') == 'none') {
            if (children[i].id == selected_screen_id) {
                selected_screen = children[i]
            }
        }
    }

    if (shown_screen) {
        // If the displayed screen is not the screen that i selected...
        if (shown_screen.id != selected_screen_id) {
            shown_screen.style.display = 'none';
        }
    }
    if (selected_screen){
        selected_screen.style.display = 'block';
    }
}