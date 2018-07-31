$(
  $("#fullpage").fullpage({
    verticalCentered: false,
    css3: true,
    //默认值：true，确定是否使用JavaScript和CSS3转换滚动在切片和幻灯片。加快平板电脑和移动设备的浏览器支持CSS3的运动有益。如果此选项设置为true，浏览器不支持CSS3，jQuery回调函数将被替代。
    // autoScrolling:false,
    //默认值：true，定义屏幕是否自动滚动，还是需要用户触发事件滚动，它也影响了部分适合在平板电脑和手机浏览器/设备窗口。
    loopBottom: false,
    //默认值：false，定义屏幕滚动到最后一个后，是否循环滚动到第一个。
    fixedElements: '.sheader, .arrow',
    //默认值：null，定义的某个元素是否在网页的固定位置，元素将被关闭的插件是必要的时候，使用CSS3的选项保持滚动结构固定。它需要对这些元素的jQuery选择器字符串。例如：fixedElements: ‘#element1, .element2’。
    afterRender: function () {
      $('.page1').find('.title').delay(500).animate({

        top: '0'

      }, 500, 'easeOutExpo');  

      $('.car').find('.cbox').delay(1000).animate({

        left: '0'

      }, 500, 'easeOutExpo');  
    },
    afterLoad: function (anchorLink, index) {
      if (index == 1) {
        //第1屏
        $('.page1').find('.title').delay(500).animate({

          top: '0'
  
        }, 500, 'easeOutExpo');  
  
        $('.page1').find('.cbox').delay(1000).animate({
  
          left: '0'
  
        }, 500, 'easeOutExpo'); 

      }
      if (index == 2) {
        //第2屏
        $('.page2').find('.title').delay(500).animate({

          top: '0'

        }, 500, 'easeOutExpo');

        $('.page2').find('.page2-txt').delay(1000).animate({
  
          left: '0'
  
        }, 500, 'easeOutExpo'); 

        $('.page2').find('.cbox').delay(1500).animate({
  
          left: '0'
  
        }, 500, 'easeOutExpo'); 

      }
      if (index == 3) {
        //第3屏
        $('.page3').find('.title').delay(500).animate({

          top: '0'

        }, 500, 'easeOutExpo');

        $('.page3').find('.page3-city').delay(1000).animate({

          opacity: 1

        }, 500, 'easeOutExpo');

      }
      if (index == 4) {
        //第4屏
        $('.page4').find('.title').delay(500).animate({

          top: '0'

        }, 500, 'easeOutExpo');

        $('.page4').find('.left-car-4').delay(1000).animate({

          left: '0'

        }, 500, 'easeOutExpo');

        $('.page4').find('.right-car-4').delay(1000).animate({

          right: '0'

        }, 500, 'easeOutExpo');

        $('.page4').find('.line-light').delay(1500).animate({

          bottom: '0'

        }, 500, 'easeOutExpo');

        $('.page4').find('.page4-txt').delay(2000).animate({

          bottom: '0'

        }, 500, 'easeOutExpo');
        
      }

      if (index == 5) {
        //第5屏
        $('.page5').find('.left-car-5').delay(500).animate({

          left: '0'

        }, 500, 'easeOutExpo');

        $('.page5').find('.right-car-5').delay(1500).animate({

          right: '0'

        }, 500, 'easeOutExpo');

        $('.page5').find('.line-light').delay(1000).animate({

          bottom: '0'

        }, 500, 'easeOutExpo');
      }

    },
    onLeave: function (index, direction) {
      if (index == '1') {

        $('.page1').find('.title').delay(500).animate({

          top: '-120%',

        }, 500, 'easeOutExpo');

        $('.page1').find('.cbox').delay(1000).animate({

          left: '-120%'
  
        }, 500, 'easeOutExpo');

      }
      if (index == 2) {
        //第2屏
        $('.page2').find('.title').delay(500).animate({

          top: '-120%',

        }, 500, 'easeOutExpo');

        $('.page2').find('.page2-txt').delay(1000).animate({
  
          left: '-120%'
  
        }, 500, 'easeOutExpo'); 

        $('.page2').find('.cbox').delay(1500).animate({
  
          left: '-120%'
  
        }, 500, 'easeOutExpo'); 

      }
      if (index == 3) {
        //第3屏
        $('.page3').find('.title').delay(500).animate({

          top: '-120%'

        }, 500, 'easeOutExpo');

        $('.page3').find('.page3-city').delay(1000).animate({

          opacity: 0

        }, 500, 'easeOutExpo');

      }
      if (index == 4) {
        //第4屏
        $('.page4').find('.title').delay(500).animate({

          top: '-120%'

        }, 500, 'easeOutExpo');

        $('.page4').find('.left-car-4').delay(1000).animate({

          left: '-120%'

        }, 500, 'easeOutExpo');

        $('.page4').find('.right-car-4').delay(1000).animate({

          right: '-120%'

        }, 500, 'easeOutExpo');

        $('.page4').find('.line-light').delay(1500).animate({

          bottom: '-120%'

        }, 500, 'easeOutExpo');

        $('.page4').find('.page4-txt').delay(2000).animate({

          bottom: '-120%'

        }, 500, 'easeOutExpo');

      }
      if (index == 5) {
        //第5屏
        $('.page5').find('.left-car-5').delay(500).animate({

          left: '-120%'

        }, 500, 'easeOutExpo');

        $('.page5').find('.right-car-5').delay(1500).animate({

          right: '-120%'

        }, 500, 'easeOutExpo');

        $('.page5').find('.line-light').delay(1000).animate({

          bottom: '-120%'

        }, 500, 'easeOutExpo');
      }

    }


  })
)
