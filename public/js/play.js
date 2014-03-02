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

  setTimeout(function(e){
    $("#start-game").on("click",function(){
      $(this).hide();
      onKEEF();
    });
  },1000);
  
    
});

 var player;
 function onKEEF() {
  
  player = new YT.Player('player', {
    width: 420,
    height: 315,
    videoId: '_dnZHea_TI0',
    events: {
      'onReady': onPlayerReady    
    }
  });
 }

  //Set up youtube
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
 
  function onPlayerReady(event) {
    event.target.setVolume(50);
    event.target.playVideo();
  } 