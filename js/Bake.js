let x =$("#ourlocationn").offset().top;

$(window).scroll(function(){
    let wScroll=$(window).scrollTop( );
    if(wScroll>x){
     $("#main-nav").css("backgroundColor","rgb(0,0,0,0.7)");
     $("#btn").fadeIn(500); 

     //console.log(wScroll)
  
}
else{
    $("#main-nav").css("backgroundColor","transparent");
    $("#btn").fadeOut(500);
}
}
)
$("#btn").click(function(){

    $("html,body").animate({scrollTop:"0"},3000);
}
)
