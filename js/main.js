$(function(){

	$('.btn_menu').click(function(){
    $('.hidden_menu').slideToggle();
    });

	$('#owl1').owlCarousel({
		singleItem: true,
		pagination: true,
		paginationSpeed: 500
	});

	$("#main_menu").on("click","a", function (event) {

        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);

    });


    $("#menu_right").on("click","a", function (event) {

        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);

    });


	$('.box3 .sizes a').click(function() {
        $('.box3 .sizes a').removeClass("active"); // удаляем у всех ссылок класс active
        $(this).addClass("active"); // устанавливаем класс active при нажатии
    });





});