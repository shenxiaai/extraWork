Zepto(function($){
	//用fastclick防止点透
	window.addEventListener('load', function() {
		FastClick.attach(document.body);
	}, false);
	//	冉崔
	
	//薛淑玉
	
	
	//陶元
	
	
	//李祎娜
	$('.ui-select-list li').tap(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
	$(".ui-select-form select").change(function () {
		$(this).css("color", '#181818');
	});
	//倒计时
	var endTime = 91;
	var sleet = function(){
		if(endTime > 0){										
			window.setTimeout(function(){
				sleet();
			},1000);
			endTime--;
			$('#countdown').html(endTime+'s');
		}
	};
	//获取动态码弹层
	$('#js-getdtcode').tap(function(){
		$('.ui-getdtcode').addClass('show');
		sleet();/*倒计时开始*/
	})
	$('button[data-role=button]').tap(function(){
		$(this).parents('.ui-dialog').removeClass('show');
	})
	//手机认证定位问题
	 var originHeight = $(window).height();
    $(window).on('resize', function () {
    	var newH = $(window).height();
    	if(newH<originHeight){
        	$('.ui-warm-tip').css('display','none');
    	}else{
        	$('.ui-warm-tip').css('display','block');
    	}
    });
	//程敏
	//选择期限
	$(".ui-arrow-down").on("tap",function(){
		$(".ui-select-qx").toggle();
		$(this).toggleClass("ui-arrow-up");
	});
	$(".ui-select-qx li").on("tap",function(){
		var txt=$(this).text();
		$("#select-qx").text(txt);
		$(".ui-arrow-down").toggleClass("ui-arrow-up");
		$(".ui-select-qx").toggle();
	})
	//豆豆问答
	$('.ui-know-item').on('click',function(){
			$(this).siblings('.ui-know-item-inner').show();
			$(this).parent('.ui-know').siblings('.ui-know').find('.ui-know-item-inner').hide();
	})
	
	
});