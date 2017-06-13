function judgeIE() {
 if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";" )[1].replace(/[ ]/g,"")== "MSIE8.0") {
	console.log( "IE 8.0");
	// $('head').append('<!--[if IE 8]> <link rel="stylesheet " href=" osoa/css /styleIE.css" type="text/css" /> <![endif]-->');
	$('head').append('<!--[if IE 8]><style>'
		+ $( 'body').css('height' , ch + 'px')
		+ '</style><![endif]-->')
	} else {
		console.log( 'IE的其他版本' );
	}
}


function isIE() {
	if (!!window.ActiveXObject || "ActiveXObject" in window){
		return true;
	}
	else{
		return false;
	}
}