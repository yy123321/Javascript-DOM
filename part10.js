/*
* @Author: FF
* @Date:   2017-06-09 10:20:52
* @Last Modified by:   FF
* @Last Modified time: 2017-06-09 14:17:09
*/

'use strict';
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}

function insertAfter(newElement, targetElement) {
	var parent = targetElement.parentNode;
	if (parent.lastChild == targetElement) {
	    parent.appendChild(newElement);
	} else {
	    parent.insertBefore(newElement, targetElement.nextSibling);
	}
}


function positionMessage() {
	if (!document.getElementById) return false;
	var elem = document.getElementById("message");
	elem.style.position = "absolute";
	elem.style.left = "50px";
	elem.style.top = "100px";

	moveElement("message", 200, 100, 10);
}

// function moveMessage() {
// 	if (!document.getElementById) return false;
// 	var elem = document.getElementById("preview");
// 	var xpos = parseInt(elem.style.left);
// 	var ypos = parseInt(elem.style.top);

// 	alert(xpos);
// 	if ((xpos == -100) && (ypos == 0)) {
// 		alert(1);
// 		return true;
// 	}

// 	if (xpos < -100) {
// 		xpos++;
// 	}
// 	if (xpos > -100) {
// 		alert(2);
// 		xpos--;
// 	}

// 	if (ypos < 0) {
// 		ypos++;
// 	}
// 	if (ypos > 0) {
// 		ypos--;
// 	}

// 	elem.style.left = xpos+"px";
// 	elem.style.right = ypos+"px";
// 	movement = setTimeout("moveMessage()", 10);//10的单位为毫秒
// }

function moveElement(elementID, final_x, final_y, interval) {
	if (!document.getElementById) return false;
	var elem = document.getElementById(elementID);
	if (elem.movement) {
		clearTimeout(elem.movement);
	}

	if (!elem.style.left) {
		elem.style.left = "0px";
	}
	if (!elem.style.top) {
		elem.style.top = "0px";
	}

	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	var dist = 0;

	if ((xpos == final_x) && (ypos == final_y)) {
		return true;
	}

	// if (xpos < final_x) {
	// 	xpos++;
	// }
	// if (xpos > final_x) {
	// 	xpos--;
	// }

	// if (ypos < final_y) {
	// 	ypos++;
	// }
	// if (ypos > final_y) {
	// 	ypos--;
	// }
	if (xpos < final_x) {
		dist = Math.ceil((final_x - xpos) / 10);
		xpos = xpos+dist;
	}
	if (xpos > final_x) {
		dist = Math.ceil((xpos - final_x) / 10);
		xpos = xpos - dist;
	}

	if (ypos < final_y) {
		dist = Math.ceil((final_y - ypos) / 10);
		ypos = ypos + dist;
	}
	if (ypos > final_y) {
		dist = Math.ceil((ypos - final_y) / 10);
		ypos = ypos - dist;
	}

	elem.style.left = xpos+"px";
	elem.style.right = ypos+"px";

	var repeat = "moveElement('" + elementID + "'," + final_x + "," + final_y + "," +interval + ")";
	elem.movement = setTimeout(repeat, interval);
}

function prepareSlideshow() {
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById) return false;

	if (!document.getElementById("linklist")) return false;
	//生成HTML标记
	var slideshow = document.createElement("div");
	slideshow.setAttribute("id", "slideshow");
	var preview = document.createElement("img");
	preview.setAttribute("src", "images/topics.jpg");
	preview.setAttribute("alt", "bulding blocks of color select");
	preview.setAttribute("id", "preview");
	slideshow.appendChild(preview);

	// if (!document.getElementById("preview")) return false;

	// var preview = document.getElementById("preview");
	// preview.style.position = "absolute";

	// preview.style.left = "0px";
	// preview.style.top = "0px";

	var list = document.getElementById("linklist");
	insertAfter(slideshow, list);
	
	var links = list.getElementsByTagName("a");

	//添加动画效果
	links[0].onmouseover = function() {
		moveElement("preview", 0, 0, 10);
	}
	links[1].onmouseover = function() {
		moveElement("preview", -198, 0, 10);
	}
	links[2].onmouseover = function() {
		moveElement("preview", -198*2, 0, 10);
	}
}



//addLoadEvent(positionMessage);
addLoadEvent(prepareSlideshow);