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

  $("#start-game").on("click",function(){
    $(this).hide();
  });
    
});