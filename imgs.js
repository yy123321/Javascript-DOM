/*
* @Author: FF
* @Date:   2017-06-01 11:13:41
* @Last Modified by:   FF
* @Last Modified time: 2017-06-05 17:12:44
*/

'use strict';
function showPic(whichpic){
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src", source);
	var text = whichpic.getAttribute("title");
	var description = document.getElementById('description');
	description.firstChild.nodeValue = text;
	//alert(description.firstChild.nodeValue);

}

function countBodyChildren(){
	var body_element = document.getElementsByTagName('body')[0];
	//alert(body_element.childNodes.length);
	//alert(body_element.nodeType);
}

window.onload = countBodyChildren;