$(document).ready(function(){
  setInterval(function(){
    $(".true").each(function(){$(this).addClass("alive")});
    $(".false").each(function(){$(this).addClass("dead")});
  },1000);
    
});