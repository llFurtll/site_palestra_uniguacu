$(document).ready(function () {
    $(document).on('scroll', function () {
        if ($(".imagem-sobre").position().top - $(this).scrollTop() < 200) {
            $(".imagem-sobre").animate({left: '2%'}, 500, function() {
                $(".imagem-sobre").addClass("show");
            });
            $(".informacoes-sobre p").animate({right: '2%'}, 500, function() {
                $(".informacoes-sobre p").addClass("show");
            });
        }
    
        /* services */
        if ($("#servicos").position().top - $(this).scrollTop() < 200) {
            $(".item-1, .item-4").animate({left: '0%'}, 500, function() {
                $(".item-1, .item-4").addClass("show");
                $(".item-2").animate({left: '0%'}, 500, function () {
                    $(".item-2").addClass("show");
                });
            });
    
            $(".item-3, .item-6").animate({right: '0%'}, 500, function() {
                $(".item-3, .item-6").addClass("show");
                $(".item-5").animate({right: '0%'}, 500, function () {
                    $(".item-5").addClass("show");
                });
            });
        }
    
         /* Botao flutuante  */
         if ($(window).scrollTop() > 300) {
            $("#botao-flutuante").addClass("show");
        } else {
            $("#botao-flutuante").removeClass("show");
        }
    
    });

    $("#botao-flutuante").on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });
});