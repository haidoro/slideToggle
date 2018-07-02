var def = document.getElementById('block-def');
var dt = def.firstElementChild;
var dd = def.lastElementChild;

dt.addEventListener('click',myToggle);
function myToggle(){
		dd.classList.toggle( "on" );
}