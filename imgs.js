/*
* @Author: FF
* @Date:   2017-06-01 11:13:41
* @Last Modified by:   FF
* @Last Modified time: 2017-06-06 14:58:37
*/

'use strict';
//页面加载完毕时想要执行的函数，保存在oldonload中
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

function showPic(whichpic){
	var placeholder = document.getElementById("placeholder");
	if (!placeholder) return false;
	var source = whichpic.getAttribute("href");
	placeholder.setAttribute("src", source);
	
	var description = document.getElementById('description');
	if (description) {
		var text = whichpic.getAttribute("title");
		description.firstChild.nodeValue = text;
	}
	
	return true;
	//alert(description.firstChild.nodeValue);
}

/*
function countBodyChildren(){
	var body_element = document.getElementsByTagName('body')[0];
	//alert(body_element.childNodes.length);
	//alert(body_element.nodeType);
}

window.onload = countBodyChildren;
*/

function popUp(winURL) {
	window.open(winURL, "popUp", "width=320, height=480");
}
//将JavaScript分离出来，点击链接的时候打开新网页
 //window.onload = prepareLinks;
function prepareLinks(){
 	if(!document.getElementsByTagName || !document.getElementById) return false;//检查浏览器是否支持该方法
 	var gallery = document.getElementById("imagegallery");
 	if (!gallery) return false;

 	var links = gallery.getElementsByTagName("a");
 	for (var i = 0; i < links.length; i++) {
 		//if (links[i].getAttribute("class") == "popup") {
 			links[i].onclick = function() {
 				//popUp(this.getAttribute("href"));
 				return !showPic(this);
 				//return false;
 			}
 		//}
 	}
 }

 //动态创建
 function preparePlaceholder() {
 	if (!document.createElement) return false;
 	if (!document.createTextNode) return false;
 	if (!document.getElementById) return false;
 	if (!document.getElementById("imagegallery")) return false;

 	var placeholder = document.createElement("img");
 	placeholder.setAttribute("id", "placeholder");
 	placeholder.setAttribute("src", "images/placeholder.gif");
 	placeholder.setAttribute("alt", "My Image Gellery");
 	var description = document.createElement("p");
 	description.setAttribute("id", "description");
 	var desctext = document.createTextNode("Choose an image");
 	description.appendChild(desctext);

 	//document.getElementsByTagName("body")[0].appendChild(placeholder);
 	//document.getElementsByTagName("body")[0].appendChild(description);
 	var gallery = document.getElementById("imagegallery");
 	insertAfter(placeholder, gallery);
 	insertAfter(description, placeholder);
 }


addLoadEvent(preparePlaceholder);
addLoadEvent(prepareLinks);
