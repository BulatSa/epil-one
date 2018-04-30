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
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
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
map BEGIN
***********************/
function initMap() {
	var mapOptions = {
		zoom: 16,
		scrollwheel:  false,
		center: new google.maps.LatLng(55.644099, 37.525199),
		styles: [{"elementType":"geometry","stylers":[{"hue":"#ff4400"},{"saturation":-68},{"lightness":-4},{"gamma":0.72}]},{"featureType":"road","elementType":"labels.icon"},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"hue":"#0077ff"},{"gamma":3.1}]},{"featureType":"water","stylers":[{"hue":"#00ccff"},{"gamma":0.44},{"saturation":-33}]},{"featureType":"poi.park","stylers":[{"hue":"#44ff00"},{"saturation":-23}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"hue":"#007fff"},{"gamma":0.77},{"saturation":65},{"lightness":99}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"gamma":0.11},{"weight":5.6},{"saturation":99},{"hue":"#0091ff"},{"lightness":-86}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"lightness":-48},{"hue":"#ff5e00"},{"gamma":1.2},{"saturation":-23}]},{"featureType":"transit","elementType":"labels.text.stroke","stylers":[{"saturation":-64},{"hue":"#ff9100"},{"lightness":16},{"gamma":0.47},{"weight":2.7}]}]
	};

	var mapElement = document.getElementById('map');

	var map = new google.maps.Map(mapElement, mapOptions);

	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(55.644099, 37.525199),
		map: map,
		title: 'Москва, ул.Профсоюзная 104 50 метров от метро Беляево',
		icon: '/img/contacts/pin.png' //пусть до своей иконки, если нужна нестандартная
	});
}
/***********************
map END
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