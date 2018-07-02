var def = document.getElementById('block-def');
var dt = def.firstElementChild;
var dd = def.lastElementChild;

dt.addEventListener('click',function(){
		dd.classList.toggle( "on" );
})
