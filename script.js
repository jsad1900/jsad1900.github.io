wow = new WOW(
	{
	boxClass:     'wow',      // default
	animateClass: 'animated', // default
	offset:       0,          // default
	mobile:       true,       // default
	live:         true        // default
  }
  )
  wow.init();

$(document).ready(function () {
	var previousScroll = 0;
	$(window).scroll(function () {
		var currentScroll = $(this).scrollTop();
		if (currentScroll < 100) {
			showTopNav();
		} else if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()) {
			if (currentScroll > previousScroll) {
				hideNav();
			} else {
				showNav();
			}
			previousScroll = currentScroll;
		}
	});

	function hideNav() {
		$("header").removeClass("sticky");
	}

	function showNav() {
		$("header").addClass("sticky");
	}
	if($(window).width()<769){	
		$(".mobile-click").click(function(){
			$(".menu").toggleClass("open-menu");
			$(".mobile-click span").toggleClass("closed");
		})
		$("header .menu ul li a").click(function(){
			$(".menu").removeClass("open-menu");
			$(".mobile-click span").removeClass("closed");
		})
	}

	$(".star").click(function(){
		$("body").toggleClass("light");
		$(".star i").toggleClass("fa-cloud-sun").toggleClass("fa-sun");
	})
});
$(document).ready(function() {
	$('.menu li a').click(function(e) {
		
		var targetHref = $(this).attr('href');
		
	  $('html, body').animate({
		  scrollTop: $(targetHref).offset().top
	  }, 800);
	  
	  e.preventDefault();
	});
  });
