$(document).ready(function(){
  setInterval(function(){
    $(".alive").removeClass("alive");
    $(".dead").removeClass("dead");
    $(".true").each(function(){
      $(this).addClass("alive")
    });
    $(".false").each(function(){
      $(this).addClass("dead")
    });
  },11);

  setTimeout(function(){
    $("#start-game").on("click",function(){
      $(this).hide();
    });
  },1000);
 

  
    
});