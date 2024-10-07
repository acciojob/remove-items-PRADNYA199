//your JS code here. If required.
function removeColore(){
	let colorSelect=document.getElementByID("colorSelect");
	let selectIndex=colorSelect.selectIndex;
	if(selectIndex !==-1)
	{
		colorSelect.remove(selectIndex);
		
		
	}
}
window.onload = function() {
    // Get the button and attach the click event
    let removeButton = document.querySelector('input[type="button"]');
    removeButton.addEventListener('click', removeColor);
};