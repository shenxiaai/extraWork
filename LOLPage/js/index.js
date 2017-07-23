$(function(){
	var obj = {
		selectedPayment:0,     //选择的支付方式：0：微信支付、1：支付宝
		selectedPaymentNum:10,   //选择的支付金额
		stepIndex:0,             //引导页页数
		alertMsg:'',
		alert:function(){
			$('.alert-box').show();
			$('.alert-info').text(this.alertMsg);
		},
		closeAlert:function(){
			$('.close-alert-btn').on('click',function(){
				$('.alert-box').hide();
			});
		}
	};
	init();
	function init(){
		// $(".toggle-box").mCustomScrollbar();
		// $('.buy-list').mCustomScrollbar();
		// $('.order-list').mCustomScrollbar();
		initProgressBar();
		obj.closeAlert();
	}
	//倒计时
	function countDown(){
		var n = 120;
		var t = setInterval(function(){
			countDownFn(n);
			if(n == 0){
				clearInterval(t);
				
			}else{
				n--;
			}
		},1000);
	}
	
	function countDownFn(n){
		n = (Array(3).join(0) + n).slice(-3);
		var l = n.length;
		for(var i = 0; i < l; i++){
			$('.second').eq(i).text(n[i]);
		}
		
	}
	
	$('body').on('click','.toggle-item',function(e){
		var index = $(this).index();
		$(this).addClass('active').siblings('.toggle-item').removeClass('active');
		$(this).parent('.record-toggle').next('.record-list-box').children('.toggle-box').eq(index).show().siblings('.toggle-box').hide();
	});
	$('body').on('click','.dialog',function(){
		var dom = $(this).attr('data-show');
		obj.stepIndex = 0;
		$('.boot-con').hide().eq(obj.stepIndex).show();
		showDialog(dom);
	});
	
	$('body').on('click','.getCode-btn',function(){
		var n = 120, dom = $(this);
		dom.addClass('disabled').attr('disabled',true).text('发送中' + n);
		var t = setInterval(function(){
			if(n === 1){
				dom.removeClass('disabled').attr('disabled',false).text('获取验证码');
				clearInterval(t);
			}else{
				n--;
				dom.text('发送中' + n);
			}
		}, 1000);
	});
	
	$('input[data-validate]').on('blur',function(){
		var dom = $(this);
		validata(dom);
	});
	
	function validata(dom){
		var type = dom.attr('data-validate'), result = false;
		switch(type){
			case 'mobile':
				result = validataMobile(dom);
				break;
			case 'code':
				result = validataCode(dom);
				break;
			default:
				result = validataEmpty(dom);
				break;
		};
		return result;
	}
	
	function validataMobile(dom){
		var value = dom.val(), reg = /^1[3|4|5|7|8][0-9]{9}$/;;
		if(value == ''){
			obj.alertMsg = '请填写手机号码';
			obj.alert();
			return false;
		}else if(reg.test(value)){
			 return true;    
		}else{
			obj.alertMsg = '请填写正确的手机号码';
			obj.alert();
			return false;
		}
	}
	
	function showDialog(dom){
		$('.pop-box').hide();
		$(dom).show();
		$('.pop-bg').show();
	}
	
	$('.close-btn, .close-btn-bottom').on('click',function(){
		$('.pop-box, .pop-bg').hide();
	});
	
	$('#checkLogin').on('click',function(){
		$(this).prop('checked') ? $('.login-item').show() : $('.login-item').hide();
	});
	
	$('#paymentBtn').on('click',function(){
		var dom = $(this).attr('data-show');
		$('.pop-box').hide();
		$(dom + ', .pop-bg').show();
		if(obj.selectedPayment){
			//支付宝
			$('.payment-info').text('支付扫一扫');
		}else{
			//微信
			$('.payment-info').text('微信扫一扫');
		}
	});
	
	$('.select-money-list').on('click','li',function(){
		$(this).addClass('active').siblings('li').removeClass('active');
		obj.selectedPaymentNum = $(this).attr('data-value');
	});
	
	$('.payment-item').on('click',function(){
		obj.selectedPayment = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
	});
	
	$('body').on('click','.next-step-btn',function(){
		obj.stepIndex++;
		obj.stepIndex < 4 ? $('.boot-con').hide().eq(obj.stepIndex).show() : $('.pop-box, .pop-bg').hide();
		
	});
	
	//进度条初始化
	function initProgressBar(){
		var doms = $('.bar-body');
		for(var i = 0, l = doms.length; i < l; i++){
			var dom = $(doms[i]), val = dom.attr('data-value');
			val = val < 4 ? 4 : val;
			dom.children('.bar-img').css('left',(val - 100)+'%');
			val > 30 ? dom.children('.high-light').css('left',(val - 38)+'%').show() : dom.children('.high-light').hide();
		}
	}


	// 数据请求
	$.ajax({
		url: 'test.html',
		data: ''
	}).done(function() {
		$(this).addClass('done');
	});
});