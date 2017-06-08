/*
* @Author: FF
* @Date:   2017-06-08 16:11:43
* @Last Modified by:   FF
* @Last Modified time: 2017-06-08 17:05:25
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

function addClass(element, value) {
	if (!element.className) {
	    element.className = value;
	}
	else {
	    var newClassName = element.className;
	    newClassName += " ";
	    newClassName += value;
	    element.className = newClassName;
	}
}

function stripeTables() {
	if (!document.getElementsByTagName) return false;
	var tables = document.getElementsByTagName("table");
	var odd, rows;
	for (var i = 0; i < tables.length; i++) {
		odd = false;
		rows = tables[i].getElementsByTagName("tr");
		for (var j = 0; j < rows.length; j++) {
			if (odd == true) {
				//rows[j].style.background = "#ffc";
				addClass(rows[j], "odd");//网页的表示层和行为层分离，更好！
				odd = false;
			}
			else {
				odd = true;
			}
		}
	}
}

function highlightRows() {
	if (!document.getElementsByTagName) return false;

	var rows = document.getElementsByTagName("tr");
	for (var i=0; i<rows.length; i++) {
		rows[i].onmouseover = function () {
			this.style.fontWeight = "bold";
		}
		rows[i].onmouseout = function () {
			this.style.fontWeight = "normal";
		}
	}
}

addLoadEvent(stripeTables);
addLoadEvent(highlightRows);