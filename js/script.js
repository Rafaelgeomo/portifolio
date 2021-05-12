$ (function(){
    $('.voltar-ao-topo').hide();

    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('.voltar-ao-topo').fadeIn();
        }else{
            $('.voltar-ao-topo').fadeOut();
        }
    });

    $('.voltar-ao-topo').click(function(){
        $('html,body').animate({
            scrollTop: 0
        }, 800);
    })

});