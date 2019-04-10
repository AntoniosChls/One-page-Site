$(document).ready(function() {

//get Data from json
$.getJSON('jason/results.json', function(jd) {
	$('#JsonGiveMeResults').append('<li>' + jd.firstText + '</li>');
	$('#JsonGiveMeResults').append('<li>' + jd.secondText + '</li>');
	$('#JsonGiveMeResults').append('<li>' + jd.thirdText + '</li>');
	$('#JsonGiveMeResults').append('<li>' + jd.fourthText + '</li>');
	$('#JsonGiveMeResults').append('<li>' + jd.fifthText + '</li>');
	$('#JsonGiveMeResults').append('<li>' + jd.sixthText + '</li>');
	$('#JsonGiveMeResults').append('<li>' + jd.seventhText + '</li>');
	$('#JsonGiveMeResults').append('<li>' + jd.eigthText + '</li>');
	$('#JsonGiveMeResults').append('<li>' + jd.ninthText + '</li>');
	$('#JsonGiveMeResults').append('<li>' + jd.tenthText + '</li>');
	$('#JsonGiveMeResults').append('<li>' + jd.eleventhText + '</li>');
	$('#JsonGiveMeResults').append('<li>' + jd.twelevthText + '</li>');
});


});
//Preloader Function
$(window).on('load', function() {
	$('#status').fadeOut(); 
	$('#preloader').delay(350).fadeOut();
	$('body').delay(350).css({'overflow':'visible'});
})
//Accordion Animation
$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		var links = this.el.find('.article-title');
		links.on('click', {
			el: this.el,
			multiple: this.multiple
		}, this.dropdown)
	}
	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
		$this = $(this),
		$next = $this.next();
		$next.slideToggle();
		$this.parent().toggleClass('open');
		if (!e.data.multiple) {
			$el.find('.accordion-content').not($next).slideUp().parent().removeClass('open');
		};
	}
	var accordion = new Accordion($('.accordion-container'), false);
});
//Scroll back to top Animation
$(document).ready(function(){
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
});
//typing Animation

function randomIntFromInterval(min,max)
{
	return Math.floor(Math.random()*(max-min+1)+min);
}

function typeWrite(span){
	$('#'+span).addClass('cursor')
	var text = $('#'+span).text();
	var randInt = 0
	for (var i = 0; i < text.length; i++) {
		randInt += parseInt(randomIntFromInterval(40,300));
		var typing = setTimeout(function(y){
			$('#'+span).append(text.charAt(y));
		},randInt, i);
	};
	setTimeout(function(){
		$('#'+span).removeClass('cursor');
	},randInt+2500);
}

$(document).ready(function(){
	typeWrite('typingAnimation');
});
