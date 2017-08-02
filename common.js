$(function(){
  // category page
  var href = location.href;
  if(href.match("category")){
    var cate_name = href.split("category/")[1];
    if(cate_name.match("%")){
      var cate_name = decodeURI(cate_name);
    }
    $(".forcate").hide();
    $(".fornocate").show();
    $(".topic_brd.fornocate").append(cate_name);
  }

  // contact
  var txt_contact = "{text:contact_topics}";
  if($(".inquirySection").size()){
    var txt_contact = $(".txt_contact").text();
    $(".inquirySection h1").text(txt_contact);
    $(".control-panel").append('<div class="bd1 bd"><div class="bdT"></div><div class="bdB"></div><div class="bdR"></div><div class="bdL"></div></div>');
  }
  if($("#inquiryCompleteSection").size()){
    $("#inquiryCompleteSection a").wrap('<div class="btn_top"></div>')
    $("#inquiryCompleteSection .btn_top").append('<div class="bd1 bd"><div class="bdT"></div><div class="bdB"></div><div class="bdR"></div><div class="bdL"></div></div>');
  }

  // blog
  var txt_blog = "{text:blog_topics}";
  if($("#blog_block").size()){
    var txt_blog = $(".txt_blog").text();
    $("#blog_block .main").prepend('<p class="topic_brd">'+txt_blog+'</p>');
  }

  // page_load
  $("#page_load").hide();

  // sp_menu_btn
  $(".sp_menu_btn").click(function(){
    $(this).toggleClass("on");
    $("#main_navigation_sp, body, .close_area").toggleClass("on");
  });
  $(".close_area").click(function(){
    $(".sp_menu_btn, #main_navigation_sp, body, .close_area").removeClass("on");
  });

  // sp totop
  $(".totop").click(function(){
    $("html,body").animate({scrollTop: $("body").offset().top},500);
  });

  // widget
  $(".widgetLink").click(function(){
    $("#widgetSection").fadeToggle(500);
  });
  $(".closeWidgetSection").click(function(){
    $("#widgetSection").fadeOut(500);
  });

  // slider
  if($(".bxslider").size()){
    $(".bxslider").bxSlider({
      auto: true,
      speed: 500,
      pause: 4000,
      controls: false
    });
  }

});
