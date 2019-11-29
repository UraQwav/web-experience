document.body.onload = function(){
    setTimeout(function(){
    document.getElementById('contentShow').classList.remove('content-hiden');
    document.getElementById('contentShow').classList.add('content');},300);
}
window.onscroll = function() {animationOnScrollWindow()};
function animationOnScrollWindow() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById('main-music').classList.remove('main-container-hiden');
        document.getElementById('main-music').classList.add('main-container');
  } else {
    document.getElementById('main-music').classList.remove('main-container');
    document.getElementById('main-music').classList.add('main-container-hiden');
  }
}
function OpenPlayer(){
    document.getElementById('player').classList.remove('media-player-audio-hiden');
    document.getElementById('player').classList.add('media-player-audio');
}
function BackToPlayList(){
    document.getElementById('player').classList.remove('media-player-audio');
    document.getElementById('player').classList.add('media-player-audio-hiden');
}