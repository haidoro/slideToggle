var def = document.getElementById('block-def');
var dt = def.firstElementChild;
var dd = def.lastElementChild;
var flag = false;

dt.addEventListener('click',myToggle);
function myToggle(){
	if(flag){
		dd.classList.add('on');
		flag = false;
	}else{
		dd.classList.remove('on');
		flag = true;
	}
}