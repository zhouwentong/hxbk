$(function(){
    $('.tab .h li').hover(function(){
        $(this).addClass('active').siblings().removeClass('active');
        var index=$('.tab .h li').index(this);
        $('.tab .b').eq(index).addClass('active').siblings('.b').removeClass('active');
    })
})