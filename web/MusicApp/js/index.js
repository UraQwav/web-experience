document.body.onload = function(){
    setTimeout(function(){
    document.getElementById('contentShow').classList.remove('content-hiden');
    document.getElementById('contentShow').classList.add('content');},300);
}