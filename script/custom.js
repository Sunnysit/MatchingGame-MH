/*
 * @Author: Sunny Xue 
 * @Date: 2018-06-01 21:30:31 
 * @Last Modified by: Sunny Xue
 * @Last Modified time: 2018-06-27 22:48:08
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
    
  
            if(isMute)
            {
                startMusic.pause();
                bgMusic.pause();
                overMusic.pause();
            }
            else{
                bgMusic.load();
                startMusic.pause();
                overMusic.pause();
                bgMusic.play();
            }
   

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



