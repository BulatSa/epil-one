/***********************
 отправка формы в php BEGIN
 ***********************/
$(function () {
	$(".ajax-form").on("submit", function (event) {
		var form = $(this);
		var send = true;
		event.preventDefault();

		$(this).find("[data-req='true']").each(function () {
			if ($(this).val() === "") {
				$(this).addClass('error');
				send = false;
			}
			if ($(this).is('select')) {
				if ($(this).val() === null) {
					$(this).addClass('error');
					send = false;
				}
			}
			if ($(this).is('input[type="checkbox"]')) {
				if ($(this).prop('checked') !== true) {
					$(this).addClass('error');
					send = false;
				}
			}
		});

		$(this).find("[data-req='true']").on('focus', function () {
			$(this).removeClass('error');
		});

		var form_data = new FormData(this);

		$("[data-label]").each(function () {
			var input_name = $(this).attr('name');
			var input_label__name = input_name + '_label';
			var input_label__value = $(this).data('label').toString();
			form_data.append(input_label__name, input_label__value)
		});

		if (send === true) {
			$.ajax({
				type: "POST",
				async: true,
				url: "/send.php",
				cache: false,
				contentType: false,
				processData: false,
				data: form_data,
				success: (function (result) {
					var response = JSON.parse(result);
					console.log(response);
					$.fancybox.close();
					if (response["MAILER_ERROR"] !== undefined) {
						$.fancybox.open({src: '#modal-error'});
					} else {
						$.fancybox.open({src: '#modal-thanks'});
						setTimeout(function () {
							$.fancybox.close();
						}, 4500);
						form[0].reset();
					}
				})
			});
		}
	});
});
/***********************
 отправка формы в php END
 ***********************/


/***********************
 Input mask BEGIN
 ***********************/
$(function () {
	$("input[type='tel']").mask("+7 (999) 999-99-99");
});

/***********************
 Input mask END
 ***********************/


/***********************
 fancybox BEGIN
 ***********************/
function init_fancy() {
	$().fancybox({
		selector: '.fancy',
		buttons: ['close'],
		backFocus: false
	});
	$().fancybox({
		selector: '.fancy-modal',
		backFocus: false,
		touch: false
	});
	$().fancybox({
		selector: '.fancy-map',
		toolbar: false,
		smallBtn: true,
		backFocus: false
	});
}

function init_fancy__video() {
	$().fancybox({
		selector: '.fancy-video',
		toolbar: false,
		smallBtn: true,
		backFocus: false,
		youtube: {
			controls: 1,
			showinfo: 0,
			autoplay: 1
		}
	});
}

$(function () {
	init_fancy();
	init_fancy__video();
});
/***********************
 fancybox END
 ***********************/


/***********************
 Прокрутка к секциям BEGIN
 ***********************/
$(function () {
	$('.scrollto').on('click', function () {
		var panelHeight = $('.header').outerHeight();
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top - panelHeight + 1;
		$('html,body').stop().animate({scrollTop: destination}, 1000);
		return false;
	});
});
/***********************
 Прокрутка к секциям END
 ***********************/


/***********************
 Waypoints BEGIN
 ***********************/
$(function () {
	$('.anim').waypoint(function () {
		$(this.element).toggleClass('animated');
	}, {
		offset: '85%'
	});
});
/***********************
 Waypoints END
 ***********************/


/***********************
header BEGIN
***********************/
$(function($){
	var headerLinks = $('.header__nav a');
	var headerPanel = $('.header');
	var wind = $(window);
	var w_height = wind.height();

	headerLinks.each(function () {
		var target = $(this).attr('href');
		$(target).addClass('__nav-section');
	});

	wind.on('scroll',function () {
		var w_scroll = wind.scrollTop();
		if (w_scroll > 5){
			headerPanel.addClass('sticky');
		} else {
			headerPanel.removeClass('sticky');
		}

		headerLinks.removeClass('active');
		$('.__nav-section').each(function() {
			var section_top = $(this).offset().top;
			var section_h = $(this).outerHeight();

			if ((w_scroll >= section_top-w_height/2) && (w_scroll < section_top + section_h-80)){
				var section_index = $(this).index('.__nav-section');
				headerLinks.eq(section_index).addClass('active');
			}
		});
	});

	var w_scroll = wind.scrollTop();
	if (w_scroll > 5){
		headerPanel.addClass('sticky');
	} else {
		headerPanel.removeClass('sticky');
	}
});
/***********************
header END
***********************/


/***********************
Photo-slider BEGIN
***********************/
$(function($){
	$('.s-photo-slider').flickity({
		cellAlign: 'center',
		wrapAround: true,
		prevNextButtons: false,
		imagesLoaded: true,
		lazyLoad: true,
		groupCells: true,
		on: {
			ready: function() {
				Waypoint.refreshAll();
			}
		}
	});
});
/***********************
Photo-slider END
***********************/


/***********************
faq BEGIN
***********************/
$(function($){
	var faqItems = $('.faq-item');
	var answerItems = $('.faq-answer');
	var answerItemsMob = $('.faq-answer-mobile');

	function selectFaq(index) {
		faqItems.removeClass('active');
		$('.faq-item[data-faq='+index+']').addClass('active');
		answerItems.slideUp(150);
		$('.faq-answer[data-faq='+index+']').slideDown(150);
		answerItemsMob.slideUp(150);
		$('.faq-answer-mobile[data-faq='+index+']').slideDown(150);
	}

	faqItems.on('click',function () {
		selectFaq($(this).data('faq'));
	});

	selectFaq(1);
});
/***********************
faq END
***********************/


/***********************
Btn BEGIN
***********************/
$(function($){
	var radbtn = document.querySelectorAll('.radbtn');
	for (var i = 0; i < radbtn.length; i++) {
		radbtn[i].addEventListener('mousemove',function (event) {
			var thisBtn =  event.target;
			var mouseXpercentage = Math.round(event.offsetX / event.target.clientWidth * 100);
			var mouseYpercentage = Math.round(event.offsetY / event.target.clientHeight * 100);
			thisBtn.style.background =
				'radial-gradient(circle at ' + mouseXpercentage + '% ' + mouseYpercentage + '%,  #00c3f3, transparent 30%),' +
				'radial-gradient(circle at ' + (75-mouseXpercentage/2) + '% ' + (75-mouseYpercentage/2) + '%,  rgba(255,255,255,0.4), transparent 60%) #4edffb';
		});
		radbtn[i].addEventListener('mouseout',function (event) {
			var thisBtn =  event.target;
			thisBtn.style.background = "#4edffb"
		});
	}

	var radbtnW = document.querySelectorAll('.radbtn-white');
	for (var i = 0; i < radbtnW.length; i++) {
		radbtnW[i].addEventListener('mousemove',function (event) {
			var thisBtn =  event.target;
			var mouseXpercentage = Math.round(event.offsetX / event.target.clientWidth * 100);
			var mouseYpercentage = Math.round(event.offsetY / event.target.clientHeight * 100);
			thisBtn.style.background =
				'radial-gradient(circle at ' + mouseXpercentage + '% ' + mouseYpercentage + '%,  #daf6fc, transparent 30%) #ffffff';
		});
		radbtnW[i].addEventListener('mouseout',function (event) {
			var thisBtn =  event.target;
			thisBtn.style.background = "#ffffff"
		});
	}
});
/***********************
Btn END
***********************/