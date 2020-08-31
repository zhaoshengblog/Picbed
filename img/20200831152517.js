// ==UserScript==
// @name 窄边滚动条 (Narrow Scrollbar)
// @description 原始配色8px滚动条(仅适用于WebKit内核浏览器)
// @namespace https://github.com/ue1/userscripts
// @version 1.0.1
// @run-at document-start
// @include http*
// @compatible chrome
// @grant none
// ==/UserScript==
var _tag = "head|body|html".split("|");
for (var i = 0; i < _tag.length; i++) {
    var _head = document.getElementsByTagName(_tag[i])[0];
    if (!_head) continue;
    var _style = document.createElement('style');
    _style.setAttribute("type", "text/css");
    _style.innerHTML = "::-webkit-scrollbar{width:8px;height:8px;}::-webkit-scrollbar-thumb:hover{background-color:#a8a8a8;}::-webkit-scrollbar-thumb{background-color:#c0c0c0;}::-webkit-scrollbar-track-piece{background-color:#f1f1f1;}::-webkit-scrollbar-thumb:active{background-color:#787878;}";
    _head.appendChild(_style);
    break;
}