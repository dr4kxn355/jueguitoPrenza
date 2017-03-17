var piezas = document.getElementsByClassName('');

var tamWidh = [200,200,200,200,200,200,200,200,200];
var tamHeight = [200,200,200,200,200,200,200,200,200];

for(var i=0; i<piezas.length; i++){
	piezas[i].setAttribute("width", tamWidh[i]);
	piezas[i].setAttribute("height", tamHeight[i]);
	piezas[i].serAttribute("x", Math.floor((Math.random() +10) +1));
	piezas[i].serAttribute("y", Math.floor((Math.random() +209) +1));
	piezas[i].serAttribute("onmousedown","seleccionarElemento(evt)");
}

var elementSelect = 0;
var currentX = 0;
var currentY = 0;
var currentPosX = 0;
var currentPosY = 0;

function seleccionarElemento (evt){
	elementSelect = reordenar(evt);
	currentX = evt.clientX;
	currentY = evt.clientY;
	currentPosx = parseFloat(elementSelect.getAttribute("x"));
	currentPosy = parseFloat(elementSelect.getAttribute("y"));
	elementSelect.setAttribute("onmousemove", "moverElemento(evt)");
	}

function moverElemento(evt){
	var dx = evt.clientX - currentX;
	var dy = evt.clientY - currentY;
	currentPosx = currentPosx + dx;
	currentPosy = currentPosy + dy;
	elementSelect.setAttribute("x",currentPostx);
	elementSelect.setAttribute("y",currentPosty);
	currentX = evt.clientX;
	currentY = evt.clientY;
	elementSelect.setAttribute("onmouseout", "deseleccionarElemento(evt)");
	elementSelect.setAttribute("onmouseup", "deseleccionarElemento(evt)");
	iman();	
}

function deseleccionarElemento(evt){
	testing();
	if(elementSelect !=0){
	elementSelect.removeAttribute("onmousemove");
	elementSelect.removeAttribute("onmouseout");
	elementSelect.removeAttribute("onmouseup");
	elementSelect = 0;
	}
}

var entorno = document.getElementById('entorno');
	function reordenar(evt){
	var padre  = evt.target.parentNode;
	var clone = padre.cloneNode(true);
	var id = padre.getAttribute("id");
	entorno.removeChild(document.getElementById(id));
	entorno.appenChild(clone);
	return entorno.lastChild.firstChild;
	}
	
var origX = [200,200,200,200,200,200,200,200,200];
var origY = [200,200,200,200,200,200,200,200,200];

function iman(){
	for(var i=0; i<piezas.length; i++){
	if (Math.abs(currentPosx-origX[i])<15 && Math.abs(currentPosy-origY[i])<15){
	elementSelec.setAttribute("x", origX[i]);
	elementSelec.setAttribute("y", origY[i]);
	}
	}
}	
 var win  = document.getElementById("win");
 

function testing(){
    var bien_ubicada = 0;
	var padres = document.getElementsByClassName('padre');
	for (var i=0; i<piezas.length; i++){
	 var posx = parseFloat(padres[i].firstChild.getAttribute("x"));
     var posy = parseFloat(padres[i].firstChild.getAttribute("y"));
			ide = padres[i].getAttribute("id");
				if(origX[ide] == posx && origY[ide]== posy){
				bien_ubicada = bien_ubicada +1;	
				}

	}
		if(bien_ubicada == 9){
			win.play();
		}
}
	