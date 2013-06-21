$(function(){
	//数字型幻灯
		var slide1_width=$('#slide1 li').width();
		$('#slide1').width(slide1_width).switchable({
		putTriggers: 'appendTo',
		panels: 'li',
		initIndex: 0, // display the last panel
		effect: 'scrollLeft', // taking effect when autoplay == true
		easing: 'cubic-bezier(.455, .03, .515, .955)', // equal to 'easeInOutQuad'
		end2end: true, // if set to true, loop == true
		loop: false, // not taking effect, because end2end == true
		autoplay: true,
		interval: 5,
		api: true // if set to true, Switchable returns API
	}).play();
	//热门推荐切换
	$('.m3 .bleft li').hover(function(){
        $(this).addClass('active').siblings().removeClass('active');
        var index=$('.m3 .bleft li').index(this);
        $('.m3 .bc').eq(index).addClass('active').siblings('.bc').removeClass('active');
    })
	//标签卡切换
	$('.tab .h li').hover(function(){
        $(this).addClass('active').siblings().removeClass('active');
        var index=$('.tab .h li').index(this);
        $('.tab .b').eq(index).addClass('active').siblings('.b').removeClass('active');
    })
	//海博草根名博滚动
	var slider1={
		page_width:871,
		page_num:52,
		m:$('.m22')
	}
	Slider(slider1);
	function Slider(s){
		s.index=0;
		s.num=s.m.find('dl').length;
		s.page=Math.ceil(s.num/s.page_num);
		s.next=s.m.find('.next');
		s.prev=s.m.find('.prev');
		s.ul=s.m.find('.pic');
		s.dl=s.m.find('dl');
		s.ul.width(s.page_width*s.page);
		for(i=0;i<s.page;i++){
			s.dl.slice(s.page_num*i,s.page_num*(i+1)).wrapAll('<div class="page"></div>');
		}
		s.next.click(function(){
			slider_next();
		})
		s.prev.click(function(){
			slider_prev();
		})
		function slider(){
			s.ul.stop(true,false).animate({left:-s.page_width*s.index},500);
		}
		function slider_next(){
			s.index++;
			if(s.index>s.page-1){
				s.index=0;	
			}
			slider();	
		}
		function slider_prev(){
			s.index--;
			if(s.index<0){
				s.index=s.page-1;	
			}
			slider();
		}
	}
	//博文推荐
	$(".m25 .close").click(function(){
		$("#b .r14").hide();	
	})
	$(".m26 .li2").toggle(function(){
		$("#b .r14").show();
	},function(){
		$("#b .r14").hide();	
	})
	//回到顶部
	$('.m26 .li1').click(function(){
		$('body,html').animate({scrollTop:0},1000);
		return false;
	})
})