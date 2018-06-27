/*
 * @Author: Sunny Xue 
 * @Date: 2018-06-01 21:30:31 
 * @Last Modified by: Sunny Xue
 * @Last Modified time: 2018-06-26 17:54:08
 */

$('.header-menu a').on('click',function(){
    $('.greywall').slideDown();
});


$('#banner-start-btn').on('click',function(){

    $('game-banner ').fadeOut();
    $('.greywall').fadeOut();
});



$('.restart-btn').on('click',function(){
    
    $('.gameover-box').hide();
    $('.greywall').slideDown();
    $('.game-level-select').fadeIn();

});


$('.home-btn').on('click',function(){

    $('.game-banner').fadeIn();
    setTimeout(function(){
        $('.gameover-box').hide();
        $('.game-instruction').hide();
        $('.greywall').hide();
    },10);
});

$('.ins-btn').on('click',function(){

    $('.greywall').slideDown();
    $('.game-instruction').fadeIn();
});

$('.btn-close').on('click',function(){
    $('.game-instruction').hide();
    $('.greywall').slideUp();
  
});

$('.musicicon').on('click',function(){
    const bgMusic = $("#bgmusic")[0];
    $(this).toggleClass("music-on");
    if($(this).hasClass('music-on'))
    {
        $(this).attr('src','gameimg/speaker.png');
        if (bgMusic.paused){ 
            bgMusic.play(); 
        }

    }
    else{
        $(this).attr('src','gameimg/mute.png');
        bgMusic.pause();
    }
});