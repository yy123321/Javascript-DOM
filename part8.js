/*
* @Author: FF
* @Date:   2017-06-07 14:48:45
* @Last Modified by:   FF
* @Last Modified time: 2017-06-07 17:00:00
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

//显示缩略语
function displayAbbrevations() {
	if (!document.getElementsByTagName) return false;
	if (!document.createElement) return false;
	if (!document.createTextNode) return false;

	var abbrevations = document.getElementsByTagName("abbr");
	if (abbrevations.length < 1) return false;

	var defs = new Array();
	for (var i = 0; i < abbrevations.length; i++) {
		var current_abbr = abbrevations[i];
		if (current_abbr.childNodes.length < 1) continue;//IE7以前的版本不能识别abbr元素
		var definition = abbrevations[i].getAttribute("title");
		var key = abbrevations[i].firstChild.nodeValue;
		//alert(key);
		defs[key] = definition;
	}

/*
	<dl>
	    <dt>Title</dt>
	    <dd>Description</dd>
	</dl>
*/
	var dlist = document.createElement("dl");
	for (key in defs) {
		var dtitle = document.createElement("dt");//定义标题
		var dtitle_text = document.createTextNode(key);
		dtitle.appendChild(dtitle_text);

		var ddesc = document.createElement("dd");//定义描述
		var ddesc_text = document.createTextNode(defs[key]);
		ddesc.appendChild(ddesc_text);

		dlist.appendChild(dtitle);
		dlist.appendChild(ddesc);
	}
	if (dlist.childNodes.length < 1) return false;

	//将定义列表插入到文档中
	var header = document.createElement("h2");
	var header_text = document.createTextNode("Abbrevations");
	header.appendChild(header_text);

	document.body.appendChild(header);
	document.body.appendChild(dlist);
}

//在引用末尾添加链接
function displayCitations() {
	if (!document.getElementsByTagName) return false;
	if (!document.createElement) return false;
	if (!document.createTextNode) return false;

	var quotes = document.getElementsByTagName("blockquote");
	for (var i = 0; i < quotes.length; i++) {
		if (!quotes[i].getAttribute("cite")) {
			continue;
		}
		var url = quotes[i].getAttribute("cite");

		//获取quotes[i]的所有元素节点
		var quoteElements = quotes[i].getElementsByTagName("*");
		if (quoteElements.length < 1) {
			continue;
		}
		var elem = quoteElements[quoteElements.length-1];

		//创建链接
		var link = document.createElement("a");
		var link_text = document.createTextNode("source");
		link.appendChild(link_text);
		link.setAttribute("href", url);

		//将链接插入到文档中
		var superscript = document.createElement("sup");
		superscript.appendChild(link);
		elem.appendChild(superscript);
	}
}

//显示快捷键列表
function displayAccssskeys() {
	if (!document.getElementsByTagName) return false;
	if (!document.createElement) return false;
	if (!document.createTextNode) return false;

	var links = document.getElementsByTagName("a");
	var infos = new Array();
	for (var i = 0; i < links.length; i++) {
		if (!links[i].getAttribute("accesskey")) {
			continue;
		}

		var acckey = links[i].getAttribute("accesskey");
		var dest = links[i].lastChild.nodeValue;
		infos[dest] = acckey;
	}

	var ulList = document.createElement("ul");
	for (dest in infos) {
		var list = document.createElement("li");
		var info = dest + ":" + infos[dest];
		var list_text = document.createTextNode(info);
		list.appendChild(list_text);
		ulList.appendChild(list);
	}

	if (ulList.childNodes.length < 1) return false;

	var header = document.createElement("h2");
	var header_text = document.createTextNode("AccessKeys");
	header.appendChild(header_text);

	document.body.appendChild(header);
	document.body.appendChild(ulList);
}


addLoadEvent(displayAbbrevations);
addLoadEvent(displayCitations);
addLoadEvent(displayAccssskeys);