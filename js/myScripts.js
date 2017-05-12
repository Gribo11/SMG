$(document).ready(function () {

    //скрол по секциям
    $(".top-nav a").mPageScroll2id();
    
});


$(document).ready(function(){
			// Фикмированная шапка при скролле
			$("#hed").removeClass("default");
			$(window).scroll(function(){
				if ($(this).scrollTop() > 20) {
					$("#hed").addClass("default").fadeIn('fast');
				} else {
					$("#hed").removeClass("default").fadeIn('fast');
				};
                
			});
		});


		
