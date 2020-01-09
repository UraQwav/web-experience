/*------Scroller--------*/

var d = document;
var wrap = d.querySelector('.wrap');
var items = d.querySelector('.items');
var itemCount = d.querySelectorAll('.item').length;
var scroller = d.querySelector('.scroller');
var pos = 0;
var transform = Modernizr.prefixed('transform');

function setTransform() {
 items.style[transform] = 'translate3d(' + (-pos * (items.offsetWidth+2)) + 'px,0,0)';
}

function prev() {
 pos = Math.max(pos - 1, 0);
 setTransform();
}
function next() {
 pos = Math.min(pos + 1 , itemCount - 1);
 setTransform();
}
window.addEventListener('resize', setTransform);﻿


var d1 = document;
var wrap1 = d1.querySelector('.wrap1');
var items1 = d1.querySelector('.items1');
var itemCount1 = d1.querySelectorAll('.item1').length;
var scroller1 = d1.querySelector('.scroller1');
var pos1 = 0;
var transform1 = Modernizr.prefixed('transform');

function setTransform1() {
 items1.style[transform] = 'translate3d(' + (-pos1 * (items1.offsetWidth+2)) + 'px,0,0)';
}

function prev1() {
 pos1 = Math.max(pos1 - 1, 0);
 setTransform1();
}
function next1() {
 pos1 = Math.min(pos1 + 1 , itemCount1 - 1);
 setTransform1();
}
window.addEventListener('resize', setTransform1);﻿

var d2 = document;
var wrap2 = d2.querySelector('.wrap2');
var items2 = d2.querySelector('.items2');
var itemCount2 = d2.querySelectorAll('.item2').length;
var scroller2 = d2.querySelector('.scroller2');
var pos2 = 0;
var transform2 = Modernizr.prefixed('transform');

function setTransform2() {
 items2.style[transform] = 'translate3d(' + (-pos2 * (items2.offsetWidth+2)) + 'px,0,0)';
}

function prev2() {
 pos2 = Math.max(pos2 - 1, 0);
 setTransform2();
}
function next2() {
 pos2 = Math.min(pos2 + 1 , itemCount - 1);
 setTransform2();
}
window.addEventListener('resize', setTransform2);﻿

/*-------To-top-------*/
 $(function() { 
    $(window).scroll(function() { 
    if($(this).scrollTop() != 0) { 
    $('#toTop').fadeIn(); 
    } else { 
    $('#toTop').fadeOut();
    }
    }); 
    $('#toTop').click(function() { 
        $('body,html').animate({scrollTop:0},800); 
        }); 
        });
 
 /*------Jakor-----*/
 $(document).ready(function(){
    $("#refOnButton").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
 
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
 
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
         
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
$(document).ready(function(){
    $("#refOnButton2").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
 
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
 
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
         
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
