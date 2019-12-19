var flag=true;
function hiden(){
    if(flag){
    document.getElementById('hiden').classList.remove('hiden');
    document.getElementById('hiden').classList.add('visible');
    flag=false;
    }
    else{
        document.getElementById('hiden').classList.remove('visible');
        document.getElementById('hiden').classList.add('hiden');
        flag=true;
    }
}