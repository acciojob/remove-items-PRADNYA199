function removeColor() {
    // Get the dropdown element
    let colorSelect = document.getElementById("colorSelect");
    
    // Get the index of the selected option
    let selectedIndex = colorSelect.selectedIndex;

    // If a valid option is selected, remove it
    if (selectedIndex !== -1) {
        colorSelect.remove(selectedIndex);
    }
}

// Attach the function to the button when the page is fully loaded
window.onload = function() {
    // Get the button and attach the click event
    let removeButton = document.querySelector('input[type="button"]');
    removeButton.addEventListener('click', removeColor);
};
