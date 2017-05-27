'use strict';
function tabFun (_tab, _list) {        // arguments[3]: which bind active inside tab li
	var cw = document.documentElement.clientWidth,
        ch = document.documentElement.clientHeight,
        header = document.getElementsByTagName('header')[0],
        tabTit = document.querySelector('.tabTit'),
        copyRight = document.querySelector('.copyRight'),
		_span = arguments[2],
		_tabCont=arguments[4],
		_cont = arguments[3];
		
var objcccc = getChildren(_list);
_list.style.width=cw*_tab.length+'px';
	for(var a = 0; a < _tab.length; a++) {
		_tab[a].index = a;
		var chh=(objcccc[a].offsetHeight+header.offsetHeight+tabTit.offsetHeight)-ch;
		
		//set defalut active shift automatically
		if((_span ? _tab[a].getElementsByTagName(_span)[0].className : _tab[a].className) == 'active') {
			moveAction(_list, 'left', -cw*_tab[a].index);
			if(_tabCont !=null){
			_tabCont.style.height=objcccc[a].offsetHeight+'px';
				if(chh>0){
					copyRight.style.position='static';
					copyRight.style.margin='3rem 0'
				}
			}
	
		}

		_tab[a].onclick = function () {	
			// sibling className set none
			for(var w = 0; w < _tab.length; w++) {
                (_span ? _tab[w].getElementsByTagName(_span)[0] : _tab[w]).className = '';
                if(_tabCont !=null){
                	    _tabCont.style.height=objcccc[this.index].offsetHeight+'px';
                }
            
			}
			// current item className set active
            (_span ? this.getElementsByTagName(_span)[0] : this).className = 'active';
			moveAction(_list, 'left', -cw*this.index);
		copyRigPosi(this.index);
		}
	}

	//set copyRight position
	function copyRigPosi (ind) {		
		copyRight.style.position = 'static';
		// copyRight.style.padding = '2rem 0';
		
		if(_cont && (parseInt(getStyle(_cont[ind], 'height')) < (ch - header.offsetHeight - tabTit.offsetHeight))) {
			setTimeout(function () {
				copyRight.style.position = 'fixed';
				copyRight.style.left = 0;
				copyRight.style.bottom = '3rem';
				copyRight.style.width = '100%';
				copyRight.style.height = '1.8rem';
			}, 200);
		}
	}
	

}



function getChildren(obj){
    var objChild = [] ;
    var objs = obj.getElementsByTagName('*');
    for(var i = 0,j = objs.length; i < j;++i){
            if(objs[i].nodeType != 1){
            	alert(objs[i].nodeType);
                continue;
            }
            var temp = objs[i].parentNode;
            if(temp.nodeType == 1){
                    if(temp == obj){
                            objChild[objChild.length] = objs[i];
                    }
            }else if(temp.parentNode == obj){
                    objChild[objChild.length] = objs[i];
            }
    }
    return objChild;
}


function bubbleSort (arr){
	for(var i = 0; i < arr.length-1; i++){
		for(var j = i+1; j < arr.length; j++){
			if(arr[i] < arr[j]){	// 如果前面的数据比后面的小就交换
				var temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		// console.log(arr);
		}
	}
	return arr;
}


function getElementTop (ele) {
　　var eleTop = ele.offsetTop;	//获得ele元素距相对定位的父元素的top
　　ele = ele.offsetParent;	//将ele换成起相对定位的父元素
　　while(ele != null) {		//只要还有相对定位的父元素 
　　　　//获得父元素 距他父元素的top值,累加到结果中
　　　　eleTop += ele.offsetTop;
　　　　//再次将ele换成他相对定位的父元素上;
　　　　ele = ele.offsetParent;
　　}
　　return eleTop;
}


function quickSort (arr){
	//如果数组长度小于等于1无需判断直接返回即可
	if(arr.length <= 1){
		return arr;
	}
	var midIndex = Math.floor(arr.length / 2);	//取基准点
	var midIndexVal = arr.splice(midIndex, 1);	//取基准点的值,splice(index,1)函数可以返回数组中被删除的那个数arr[index+1]
	var left = [];	//存放比基准点小的数组
	var right = [];	//存放比基准点大的数组
	//遍历数组，进行判断分配
	for(var i = 0; i < arr.length; i++){
		if(arr[i] < midIndexVal){
			left.push(arr[i]);	//比基准点小的放在左边数组
		}
		else{
			right.push(arr[i]);	//比基准点大的放在右边数组
		}
		// console.log(arr);
	}
	//递归执行以上操作,对左右两个数组进行操作，直到数组长度为<=1；
	return quickSort(left).concat(midIndexVal,quickSort(right));
};



function getStyle (obj, css) {
	if(obj.currentStyle){
		return obj.currentStyle[css];
	}else{
		return getComputedStyle(obj, false)[css];
	}
}

function getByClass(parent, clazz) {
	var result = [],
		ele = parent.getElementsByTagName('*');

	for(var i = 0; i < ele.length; i++) {
		if(ele[i].className == clazz) {
			result.push(ele[i]);
		}
	}
	return result;
}

function moveAction (obj, attr, target) {
	target = parseInt(target);
	clearInterval(obj.timer);
	obj.timer = setInterval( function () {
		var curr = 0;
		if(attr == 'opacity'){
			curr = Math.round(parseFloat(getStyle(obj, attr))) * 100;
		}else{
			curr = parseInt(getStyle(obj, attr));
		}
		var speed = (target - curr) / 3;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		if(curr == target){
			clearInterval(obj.timer);
		}else{
			if(attr == 'opacity'){
				obj.style.filter = 'alpha(opacity: ' + (curr + speed) + ')';
				obj.style.opacity = (curr + speed) / 100;
				text.value = obj.style.opacity;
			}else{
				obj.style[attr] = curr + speed + 'px';
			}
		}
	}, 30);
}
/*shujing*/
