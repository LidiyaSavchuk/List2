var names=['Иванов','Петров','Сидоров','Мельников','Кузнецов'];
var movingElement=event.target
for (i=0; i<names.length;i++){
		var el= document.createElement('div');
    el.classList.add('name');
    el.textContent=names[i]; 
    document.getElementById('list').appendChild(el);
}
/*document.getElementById('list').addEventListener('mousedown',onMoveStart);*/
function onMoveStart(event){
	if(event.target!=event.currentTarget){
  	var element=document.getElementsByClassName('name');

  }
}