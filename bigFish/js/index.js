'use strict';

var tabTitle = document.querySelector('.tabTitle'),
	tabContent = document.querySelector('.tabContent');

function getStyle(t,e){return t.currentStyle?t.currentStyle[e]:getComputedStyle(t,!1)[e]}function moveAction(t,e,r){r=parseInt(r),clearInterval(t.timer),t.timer=setInterval(function(){var a=0;a="opacity"==e?100*Math.round(parseFloat(getStyle(t,e))):parseInt(getStyle(t,e));var l=(r-a)/6;l=l>0?Math.ceil(l):Math.floor(l),a==r?clearInterval(t.timer):"opacity"==e?(t.style.filter="alpha(opacity: "+(a+l)+")",t.style.opacity=(a+l)/100,text.value=t.style.opacity):t.style[e]=a+l+"px"},30)}

var fold = document.getElementsByClassName('Amount'),
		bdHei = null;
for(var i = 0;i < fold.length;i++){
	var Tit = fold[i].getElementsByClassName('AmountTt')[0];
	Tit.onclick = function(){
		var bd = this.parentNode.getElementsByClassName('AmountBd')[0];

		if(bd.offsetHeight != 0){
			bdHei = bd.offsetHeight;
			moveAction(bd, 'height', 0);
			this.className = 'AmountTt active';fsetHeight;
			changeTabHei(tabContHei);
		}else{
			moveAction(bd, 'height', bdHei);
			this.className = 'AmountTt';
		}
	}
}

function nTabs(thisObj, Num) {
	if (thisObj.className == 'active') return;
	var tabObj = thisObj.parentNode.id;
	var tabList = document.getElementById(tabObj).getElementsByTagName('li');
	for (i = 0; i < tabList.length; i++) {
		if (i == Num) {
			thisObj.className = 'active';
			document.getElementById(tabObj + '_Content' + i).style.display = 'block';
			activeRadius();
			changeTabHei();
		} else {
			tabList[i].className = 'normal';
			document.getElementById(tabObj + '_Content' + i).style.display = 'none';
			changeTabHei();
		}
	}
}

function getPrevElementSibling(el) {
	do {
		el = el.previousSbiling || el.previousElementSibling;
	}while(el && el.nodeType !== 1);
	return el;
}

function getNextElementSibling(el) {
	do {
		el = el.nextSibling;
	}while(el && el.nodeType !== 1);
	return el;
}

function activeRadius() {
	var tab = document.getElementById('myTab1'),
		tabLi = tab.getElementsByTagName('li'),
		active = tab.getElementsByClassName('active')[0];
	// var prev = active.previousElementSibling || active.previousSbiling;
	// var next = active.nextElementSibling || active.nextSibling;
	var prev = getPrevElementSibling(active),
		next = getNextElementSibling(active);

	for(var x = 0; x < tabLi.length; x++) {
		tabLi[x].style.borderRadius = 0;
	}

	if(prev){
		prev.style.borderBottomRightRadius = '5px';
	}
	if (next) {
		next.style.borderTopRightRadius = '5px';
	}
}
activeRadius();

function changeTabHei() {
	tabTitle.style.height = tabContent.offsetHeight + 'px';
}
changeTabHei();