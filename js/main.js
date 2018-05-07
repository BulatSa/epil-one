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
		touch: false,
		afterShow: function () {
			initPicker();
		}
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

	headerPanel.addClass('ready');

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
	var photoSlider = $('.s-photo-slider');
	photoSlider.flickity({
		cellAlign: 'center',
		wrapAround: true,
		prevNextButtons: false,
		imagesLoaded: true,
		lazyLoad: 2,
		on: {
			ready: function() {
				Waypoint.refreshAll();
			}
		}
	});

	photoSlider.waypoint(function (direction) {
		if (direction === "down"){
			photoSlider.flickity('next');
		}
	}, {
		offset: 'bottom-in-view'
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
				'radial-gradient(circle at ' + mouseXpercentage + '% ' + mouseYpercentage + '%,  #99effb, transparent 30%),' +
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


/***********************
map BEGIN
***********************/
$(function($){
	initMap()
});

var map;
var locations;

function initMap() {
	var markers = [];
	locations = locations_from_admin;

	var mapOptions = {
		zoom: 10,
		disableDefaultUI: true,
		zoomControl: true,
		zoomControlOptions: {
			position: google.maps.ControlPosition.LEFT_CENTER
		},
		scrollwheel: false,
		center: new google.maps.LatLng(55.644099, 37.525199),
		styles: [{"stylers": [{"saturation": -100}, {"gamma": 1}]}, {"elementType": "labels.text.stroke", "stylers": [{"visibility": "off"}]}, {"featureType": "poi.business", "elementType": "labels.text", "stylers": [{"visibility": "off"}]}, {"featureType": "poi.business", "elementType": "labels.icon", "stylers": [{"visibility": "off"}]}, {"featureType": "poi.place_of_worship", "elementType": "labels.text", "stylers": [{"visibility": "off"}]}, {"featureType": "poi.place_of_worship", "elementType": "labels.icon", "stylers": [{"visibility": "off"}]}, {"featureType": "road", "elementType": "geometry", "stylers": [{"visibility": "simplified"}]}, {"featureType": "water", "stylers": [{"visibility": "on"}, {"saturation": 50}, {"gamma": 0}, {"hue": "#50a5d1"}]}, {"featureType": "administrative.neighborhood", "elementType": "labels.text.fill", "stylers": [{"color": "#333333"}]}, {"featureType": "road.local", "elementType": "labels.text", "stylers": [{"weight": 0.5}, {"color": "#333333"}]}, {"featureType": "transit.station", "elementType": "labels.icon", "stylers": [{"gamma": 1}, {"saturation": 50}]}]
	};

	var mapElement = document.getElementById('map');
	var map = new google.maps.Map(mapElement, mapOptions);


	var marker, i;

	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][0], locations[i][1]),
			map: map,
			icon: '/img/contacts/pin.png'
		});
		markers.push(marker);
		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				select_contacts_tab(i);
			}
		})(marker, i));
	}


	var tab_links = $('.cont-chooser');
	var cities = $('.contact-item');

	function select_contacts_tab(index) {
		$('.cont-chooser').val(index);
		tab_links.niceSelect('update');
		cities.removeClass('active');
		cities.eq(index).addClass('active');
		var latLng = new google.maps.LatLng(locations[index][0], locations[index][1]);
		map.panTo(latLng);
	}

	tab_links.on('change', function () {
		var index = $(this).val();
		select_contacts_tab(index);
	});

	select_contacts_tab(0);
}
/***********************
map END
***********************/


/***********************
niceselect BEGIN
***********************/
$(function($){
	$('.select-style').niceSelect();
});
/***********************
niceselect END
***********************/


/***********************
Preims BEGIN
***********************/
$(function($){
	var navBtns = $('.preim-nav button');
	var preimBlocks = $('.preim');

	function selectPreim(index) {
		var thisPreim = preimBlocks.eq(index);

		navBtns.removeClass('active');
		navBtns.eq(index).addClass('active');
		preimBlocks.removeClass('active');
		thisPreim.addClass('active');
		thisPreim.find('[data-imgsrc]').each(function () {
			var thisImg = $(this);
			if (!thisImg.hasClass('loaded')){
				thisImg.attr('src',thisImg.data('imgsrc'));
				thisImg.on('load',function () {
					thisImg.addClass('loaded');
					thisImg.parent('.preim__imgwrap').addClass('loaded');
				})
			}
		})
	}

	selectPreim(0);
	Waypoint.refreshAll();

	navBtns.on('click', function () {
		var index = $(this).index();
		selectPreim(index);
	});
});
/***********************
Preims END
***********************/


/***********************
 Work slider BEGIN
 ***********************/
$(function($){
	var work_slider = $('.work-slider');
	work_slider.flickity({
		contain: true,
		imagesLoaded: false,
		pageDots: true,
		prevNextButtons: true,
		adaptiveHeight: true,
		dragThreshold: 20,
		bgLazyLoad: 1,
		arrowShape: {
			x0: 10,
			x1: 60, y1: 50,
			x2: 65, y2: 50,
			x3: 15
		}
	});

	var flkty = work_slider.data('flickity');
	var work_dots = $('.work-slider .dot');

	var figure = "<figure></figure>";
	work_dots.append(figure);

	work_slider.on( 'select.flickity', function() {
		var index = flkty.selectedIndex;
		var this_dot = work_dots.eq(index);
		this_dot.prevAll('.dot').addClass('active');
		this_dot.nextAll('.dot').removeClass('active');
	});

	if (device.desktop()){
		var $imgs = $('.work-slide__bg');
		var $panels = $('.work-panel');

		work_slider.on( 'scroll.flickity', function() {
			flkty.slides.forEach( function( slide, i ) {
				var img = $imgs[i];
				var panel = $panels[i];
				var x = ( slide.target + flkty.x ) * -1/1.5;
				var x2 = ( slide.target + flkty.x ) * -1/2;
				img.style.transform = 'translateX( ' + x  + 'px)';
				panel.style.transform = 'translateX( ' + x2  + 'px)';
			});
		});
	}
});
/***********************
 Work slider END
 ***********************/


/***********************
 Lazy BEGIN
 ***********************/
function lazyLoad(){
	var $images = $('.lazy_load');

	$images.each(function(){
		var $img = $(this),
			src = $img.attr('data-img');
		$img.attr('src',src);
	});
}

function lazyLoadBg(){
	var $images = $('.lazy_loadbg');

	$images.each(function(){
		var $img = $(this),
			src = $img.attr('data-img');
		$img.css('background-image','url('+src+')');
	});
}

$(function(){
	lazyLoad();
	lazyLoadBg();
});

$(window).on('load',function () {
	Waypoint.refreshAll();
});
/***********************
 Lazy END
 ***********************/


/***********************
 Data Picker BEGIN
 ***********************/
function initPicker() {
	$('.datepicker-input').datetimepicker({
		timepicker: false,
		format:'d.m.Y',
		todayButton: false
	});

	$('.timepicker-input').datetimepicker({
		datepicker:false,
		format:'H:i',
		minTime:'9:00',
		maxTime:'22:00',
		step: 30
	});
};

$(function ($) {
	$.datetimepicker.setLocale('ru');

	initPicker();

});
/***********************
 Data Picker END
 ***********************/


/***********************
Tech slider BEGIN
***********************/
$(function($){
	var dots = $('.tech-nav button');
	var techBlocks = $('.tech-slide');
	var techStage = $('.tech-stage');
	var nextArrow = $('.tech-arrows .i-right');
	var prevArrow = $('.tech-arrows .i-left');

	function selectTech(index) {

		// nav
		var this_dot = dots.eq(index);
		dots.removeClass('selected');
		dots.removeClass('active');
		this_dot.addClass('selected');
		this_dot.prevAll(dots).addClass('active');
		this_dot.nextAll(dots).removeClass('active');
		// nav

		// text
		techBlocks.removeClass('active');
		techBlocks.eq(index).addClass('active');
		// text

		//stage
		var indexStage = parseInt(index) + 1;
		techStage.removeClass('tech-stage--1 tech-stage--2 tech-stage--3 tech-stage--4');
		techStage.addClass('tech-stage--'+indexStage);
		//stage

		if (index === dots.length-1){
			nextArrow.addClass('disabled');
		} else {
			nextArrow.removeClass('disabled');
		}

		if (index === 0){
			prevArrow.addClass('disabled');
		} else {
			prevArrow.removeClass('disabled');
		}
	}


	function techNext(){
		var currentIndex = dots.filter('.selected').index();
		var nextIndex = parseInt(currentIndex) + 1;
		console.log(dots.length);
		if (currentIndex < dots.length-1){
			selectTech(nextIndex);
		}
	}
	function techPrev(){
		var currentIndex = dots.filter('.selected').index();
		var prevIndex = parseInt(currentIndex) - 1;
		selectTech(prevIndex);
	}

	dots.on('click',function () {
		var thisIndex = $(this).index();
		selectTech(thisIndex);
	});


	selectTech(0);

	$('.js-tech-next').on('click',function () {
		techNext();
	});
	$('.js-tech-prev').on('click',function () {
		techPrev();
	});
});
/***********************
Tech slider END
***********************/