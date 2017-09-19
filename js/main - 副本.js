var app = {};
app.slideWidth = 0;
app.iNow =0;
app.$navLis = $(".nav li");
app.$pageLis = $(".page");

app.init = function(){	
	app.resize();
	app.mainAnimate();
  app.submenuInit();
	app.events();

	$(".page_wrapper").height(Math.round($(".page1").height()));	
}

$(document).ready(app.init);

//事件
app.events = function(){
   $(window).resize(app.resize); //屏幕大小改变
   app.slide();
   app.submenu();
}

//submenu事件
app.submenu = function(){
  $P2H = $(".page2 h2");
  console.log($P2H);
  app.submenuHover();
}

app.submenuHover = function(){
  $(".tipBox").delegate("a","mouseover",function(ev){
     $(this).parent().find(".tip").css("display","block").animate({"opacity":1},500,"linear");
  });
  $(".tipBox").delegate("a","mouseout",function(ev){
     $(this).parent().find(".tip").css("display","none").animate({"opacity":0},500,"linear");
  });
}

//排布slide的位置
app.slideposition = function(){
	var $pageLis = $(".page");
	$pageLis.eq(app.iNow).css("left",0);
  var pageHeight = $pageLis.eq(app.iNow).find(".main_wrapper").height() + 208;
  $pageLis.eq(app.iNow).css("height",pageHeight);
  $(".page_wrapper").height(Math.round(pageHeight));
	for(i=0;i<$pageLis.length;i++){
       if(i<app.iNow){
       	  $pageLis.eq(i).css("left",-app.slideWidth);
       }else if(i>app.iNow){   
       	  $pageLis.eq(i).css("left",app.slideWidth);
       }
    }
}
//导航初始动画
app.mainAnimate = function(){
    $(".menu").animate({"left":"30px"},500,"linear");
    setTimeout(function(){
  	   $(".nav").animate({"opacity":1},500,"linear");
       $(".welcom").animate({"opacity":1},500,"linear");
    },500);
    var image = new Image();
    image.src = "./img/s1bg.png";
    image.onload = function(){
    	 $(".backPic1").animate({"opacity":1},500,"linear");
    };
}
//主页面slide效果
app.slide = function(){
  var $navLis = $(".nav li");
  var $pageLis = $(".page");

  $navLis.on('click',slideChange);

  function slideChange(){
  	clearTimeout(timer);

  	var timer = setTimeout($.proxy(function(){
		$(this).attr("class","selected").siblings().attr("class","");
		    var index =  $(this).index();
        //根据内容长度设置页面高度
        var pageHeight = $pageLis.eq(index).find(".main_wrapper").height() + 208;
        $pageLis.eq(index).css("height",pageHeight);
		    $(".page_wrapper").height(Math.round(pageHeight));
        $(".page_wrapper").width($(window).width());

        //判断submenu显示
        if(index == 1){
          $(".p2-submenu").css("display","block").animate({"opacity":1},1000,"linear");
        }else{
          $(".p2-submenu").css("display","none").css("opacity",0);
        }

        if(index == 2){
          $(".p3-submenu").css("display","block").animate({"opacity":1},1000,"linear");
        }else{
          $(".p3-submenu").css("display","none").css("opacity",0);
        }

		    if(app.iNow < index){
		       $pageLis.eq(index).css("left",app.slideWidth);
               $pageLis.eq(app.iNow).animate({left:-app.slideWidth},500,"linear");
		       
		    }else if(app.iNow > index){
		    	$pageLis.eq(index).css("left",-app.slideWidth);
                $pageLis.eq(app.iNow).animate({left: app.slideWidth},500,"linear");
            }

    
		    $pageLis.eq(index).animate({left:0},500,"linear");

		    app.iNow = index;
		},this),100);
		
  }
}

//根据屏幕大小设置主页面宽度
app.resize = function(){
	$(".page_wrapper").width($(window).width());
	$(".page").width($(window).width());
	app.slideWidth = $(window).width();
	app.iNow = $('.selected').index();
  app.slideposition();
}
