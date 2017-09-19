var app = {};
app.slideWidth = 0;
app.iNow =0;

app.init = function(){
	app.resize();
	app.mainAnimate(); 
  app.getProduct();
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
   app.orderInfo();
   app.checkForm();
   app.sent();
}

//submenu事件
app.submenu = function(){
  var $page2 = $(".page2");
  var $submenu2 = $(".p2-submenu");
  app.submenuAnimate($page2,$submenu2);
  var $page3 = $(".page3");
  var $submenu3 = $(".p3-submenu");
  app.submenuAnimate($page3,$submenu3);
  app.submenuHover();
}

app.submenuHover = function(){
  $(".tipBox").delegate("a","mouseenter",function(ev){
     $(this).parent().find(".tip").css("display","block").animate({"opacity":1},200,"linear");
  });
  $(".tipBox").delegate("a","mouseleave",function(ev){
     $(this).parent().find(".tip").css("display","none").animate({"opacity":0},200,"linear");
  });
}

app.submenuAnimate = function($page,$submenu){
  var $h2 = $($page).find("h2");
  var $num = $($submenu).find("a");
  submenuScroll();
  $($submenu).find(".tipBox").delegate("a","click",function(ev){
     var index = $(this).data("index");     
     if(index == 99){     
       $("body").animate({"scrollTop":0},500,"linear");
     }else{
       var top = $($h2[index]).offset().top-20;
       $("body").animate({"scrollTop":top},500,"linear");
     }
  });

  $(window).scroll(submenuScroll);

  function submenuScroll(){
    var changTop = $(window).scrollTop() + $(window).height()/2; 

    for(var i= 0;i<$h2.length;i++){
      var sqrtTop = $($h2[i]).offset().top;
      var sqrtBottom = $($h2[i]).offset().top + $($h2[i]).parent().parent().height();

      if(sqrtTop<changTop && sqrtBottom>changTop){
        for(var j=0;j<$num.length;j++){
            $($num[j]).css({"background":"#d4d2ff","color":"#505797"});
          if($($num[j]).data("index")==i){            
            $($num[j]).css({"background":"#505797","color":"#fff"});
          }
        }
      }
    }
  }
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

//根据页面创建submenu
app.submenuInit = function(){
  var $page2 = $(".page2");
  var $submenu2 = $(".p2-submenu");
  app.createSubmenu($page2,$submenu2);
  var $page3 = $(".page3");
  var $submenu3 = $(".p3-submenu");
  app.createSubmenu($page3,$submenu3);
}

app.createSubmenu = function($page,$submenu){
  var $h2 = $page.find("h2");
  var $back = $submenu.find(".back");
  $back.data("index",99);
  for(i=0;i<$h2.length;i++){
    var $line = $("<em></em>");
    $line.attr("class","line");
    var $tipBox = $("<div></div>");
    $tipBox.attr("class","tipBox");
    var $tip = $("<div></div>");
    $tip.attr("class","tip");
      var $span = $("<span></span>");
      $span.html($($h2[i]).html());
      var $i = $("<i></i>");
      $i.attr("class","corrow");
    $tip.append($span);
    $tip.append($i);
    var $a = $("<a></a>");
    $a.attr("class","num");
    $a.attr("href","javascript:;");
    $a.html(i+1);
    $a.data("index",i);
    $tipBox.append($tip);
    $tipBox.append($a);    
    $submenu.append($line); 
    $submenu.append($tipBox);    
  }
}

//订购信息
app.orderInfo = function(){
  var $span = $(".orderInfo").find("span");
  var $li =$(".orderDetil").find("li");
  $span.on("mouseover",infoChange);

  function infoChange(){
    $(this).attr("class","choosed").siblings().attr("class","");
    $($li).eq($(this).index()).attr("class","choosed").siblings().attr("class","");
    var tandH = $($li).eq($(this).index()).position().top+$($li).eq($(this).index()).outerHeight(true)/2-42;
    var pLeft = $(this).position().left + $(this).width()/2;
    var rowW = $($li).eq($(this).index()).position().left-pLeft-10;
    $(".orderPoint").css("left",pLeft+12);
    $(".tand").css("left",pLeft+17).css("height",tandH);
    $(".row").css("left",pLeft+17).css("top",tandH+42).css("width",rowW);

  }
}

//检查表单
app.checkForm =function(){
  var $required = $(".p4-form").find(".required");
  var $btn = $(".sent")
  for(var i=0; i<$required.length; i++){
    $($required[i]).blur(function(){     
      if($(this).val() == ""){ 
        $(this).css("border-color","#ff0800");
        $(this).siblings(".info").css("display","block");
        $(this).removeClass("ok");
      }else{
        if($(this).attr("id") == "email"){
           var mail = $(this).val();
           var reg = /\w+[@]{1}\w+[.]\w+/;
           if(reg.test(mail)){      
             $(this).css("border-color","#505797");
             $(this).siblings(".info").css("display","none");
             $(this).addClass("ok");
           }else{            
             $(this).css("border-color","#ff0800");
             $(this).siblings(".info").css("display","block");
             $(this).removeClass("ok");
           }
        }else{
          $(this).css("border-color","#505797");
          $(this).siblings(".info").css("display","none");
          $(this).addClass("ok");
        }
      }
      console.log($(".p4-form").find(".ok").length);
      if($(".p4-form").find(".ok").length == 5){
        $btn.removeAttr("disabled");
      } 
    });
  }
}

//提交表单
app.sent = function(){
  var $btn = $('.sent');
  $btn.on('click',ajaxSent);

  function ajaxSent(){
    console.log($(".p4-form").serialize());
      $.ajax({    
        type:'post',        
        url:'contact.asp',    
        data:$(".p4-form").serialize(),    
        cache:false,        
        success:function(data){   
          app.infoAlert();
        },
      });    
  }
}

//提交成功
app.infoAlert = function(){
  var $info = $(".info-wrapper");
  $info.css("display","block");
  var $infoBtn = $(".info-btn");
  $infoBtn.on("click",function(){
    $info.css("display","none");
  });
  var $input = $(".p4-form").find("input");
  for(var i=0;i<$input.length;i++){
    $($input[i]).val("");
  };
  $("#content").val("");

}

//初始化产品信息
app.getProduct = function(){
  var $p3 = $(".page3 .main_wrapper .p3-sqrtWapper:last-child");
  //产品部分添加
  for(var i =0; i<productsData.length;i++){
    var $sqrtWapper = $("<div></div>");
    $sqrtWapper.attr("class","p3-sqrtWapper");
      var $size = $("<div></div>");
      $size.attr("class","p3-size");
        var $sqrt = $("<div></div>");
        $sqrt.attr("class","p3-sqrt");
          var $title = $("<div></div>");
          $title.attr("class","p-title");
            var $span = $("<span></span>");
            $span.attr("class","glyphicon glyphicon-tags");
            var $h2 = $("<h2></h2>");
            $h2.html(productsData[i].title);
          $title.append($span).append($h2);
          var $introduce = $("<p></p>");
          $introduce.attr("class","twoEm");
          $introduce.html(productsData[i].introduce);
          var $pWapper = $("<div></div>");
          $pWapper.attr("class","p3-pWapper f-clear");
            var $pinfo = $("<div></div>");
            $pinfo.attr("class","p3-pinfo");
            var pinfolen = productsData[i].sections.length;
            for(var j=0 ; j<pinfolen; j++){
                var $infoh3 = $("<h3></h3>");
                $infoh3.html(productsData[i].sections[j].head);
                $pinfo.append($infoh3);
                var paralen = productsData[i].sections[j].para.length;
                for(var k=0; k<paralen;k++){
                  var $p = $("<p></p>");
                  $p.html(productsData[i].sections[j].para[k]);
                  $pinfo.append($p);
              }
            };
            var $pimgs = $("<div></div>");
            $pimgs.attr("class","p3-pimgs");
            var imglen= productsData[i].imgs.length;
            for(var j=0; j<imglen; j++){
              var $imgh3 = $("<h3></h3>");
              $imgh3.html(productsData[i].imgs[j].imgH);
              var $img = $("<a></a>");
              $img.attr("class","img").attr("href","javascript:;");
              $img.css("background","url("+productsData[i].imgs[j].imgAddr+")");
              $pimgs.append($imgh3).append($img);
            }
          $pWapper.append($pinfo).append($pimgs);
        $sqrt.append($title).append($introduce).append($pWapper);
      $size.append($sqrt);
    $sqrtWapper.append($size);
    $p3.before($sqrtWapper);
  };

  for(var i =0; i<productsTable.length;i++){
    var $sqrtWapper = $("<div></div>");
    $sqrtWapper.attr("class","p3-sqrtWapper");
      var $size = $("<div></div>");
      $size.attr("class","p3-size");
        var $sqrt = $("<div></div>");
        $sqrt.attr("class","p3-sqrt");
          var $title = $("<div></div>");
          $title.attr("class","p-title");
            var $span = $("<span></span>");
            $span.attr("class","glyphicon glyphicon-tags");
            var $h2 = $("<h2></h2>");
            $h2.html(productsTable[i].title);
            $title.append($span).append($h2);
          $sqrt.append($title)
          var imageLen = productsTable[i].tableAddr.length;
          for(var j=0; j<imageLen; j++){
            var image = new Image();
            image.src = productsTable[i].tableAddr[j];
            $sqrt.append(image);
          }         
      $size.append($sqrt);
    $sqrtWapper.append( $size);
    $p3.before($sqrtWapper);
  };

  for(var i =0; i<dtuData.length;i++){
    var $sqrtWapper = $("<div></div>");
    $sqrtWapper.attr("class","p3-sqrtWapper");
      var $size = $("<div></div>");
      $size.attr("class","p3-size");
        var $sqrt = $("<div></div>");
        $sqrt.attr("class","p3-sqrt");
          var $title = $("<div></div>");
          $title.attr("class","p-title");          
            var $span = $("<span></span>");
            $span.attr("class","glyphicon glyphicon-tags");
            var $h2 = $("<h2></h2>");
            $h2.html(dtuData[i].title);
            $title.append($span).append($h2);
          var $introduce = $("<p></p>");
          $introduce.attr("class","twoEm");
          $introduce.html(dtuData[i].introduce);
          var $img = new Image();
          $img.src = dtuData[i].imageAddr;
          $($img).attr("class","dtuImg");
          $sqrt.append($title).append($introduce).append($img);
      $size.append($sqrt);
    $sqrtWapper.append( $size);
    $p3.before($sqrtWapper);
  };

  for(var i =0; i<dimData.length;i++){
    var $sqrtWapper = $("<div></div>");
    $sqrtWapper.attr("class","p3-sqrtWapper");
      var $size = $("<div></div>");
      $size.attr("class","p3-size");
        var $sqrt = $("<div></div>");
        $sqrt.attr("class","p3-sqrt");
          var $title = $("<div></div>");
          $title.attr("class","p-title");     
            var $span = $("<span></span>");
            $span.attr("class","glyphicon glyphicon-tags");
            var $h2 = $("<h2></h2>");
            $h2.html(dimData[i].title);
            $title.append($span).append($h2);
          var detilLen = dimData[i].detil.length;
          $sqrt.append($title);
          for(var j=0; j<detilLen; j++){
            var $imgsWapper = $("<div></div>");
            $imgsWapper.attr("class","imgsWapper f-clear");
            var $h3 = $("<h3></h3>");
            $h3.html(dimData[i].detil[j].head)
            var $img1 = new Image();
            $img1.src = dimData[i].detil[j].imagAddr1;
            $($img1).attr("class","imagDiv");
            var $img2 = new Image();
            $img2.src = dimData[i].detil[j].imagAddr2;
            $($img2).attr("class","imagDiv");
            $imgsWapper.append($h3).append($img1).append($img2);
            $sqrt.append($imgsWapper);
          }         
          
      $size.append($sqrt);
     $sqrtWapper.append( $size);
    $p3.before($sqrtWapper);
  }
}

//根据屏幕大小设置主页面宽度
app.resize = function(){
   if($(window).width() <= 1000){
      $("body").addClass("r950");
    }else{
      $("body").removeClass("r950");
    }
	$(".page_wrapper").width($(window).width());
	$(".page").width($(window).width());
	app.slideWidth = $(window).width();
	app.iNow = $('.selected').index();
  app.slideposition();
  var $span = $(".orderInfo").find(".choosed");
  var $li =$(".orderDetil").find(".choosed");
  var tandH = $($li).position().top+$($li).outerHeight(true)/2-42;
  var pLeft =$($span).position().left + $($span).width()/2;
  var rowW = $($li).position().left-pLeft-10;
  $(".orderPoint").css("left",pLeft+12);
  $(".tand").css("left",pLeft+17).css("height",tandH);
  $(".row").css("left",pLeft+17).css("top",tandH+42).css("width",rowW);
}
