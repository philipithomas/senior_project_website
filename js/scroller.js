$("document").ready(function() {
 
	$('#title-click').click(function(){

	    $('html, body').animate({
	        scrollTop: $("#title").offset().top
	    }, 1000);
	    
	    $('[data-spy="scroll"]').each(function () {
	    	var $spy = $(this).scrollspy('refresh')
		});

	 });

	$('.to-title').click(function(){

	    $('html, body').animate({
	        scrollTop: $("#title").offset().top
	    }, 1000);
	    
	    $('[data-spy="scroll"]').each(function () {
	    	var $spy = $(this).scrollspy('refresh')
		});

	 });
 
	$('.to-abstract').click(function(){

	    $('html, body').animate({
	        scrollTop: $("#abstract").offset().top
	    }, 1000);
	    
	    $('[data-spy="scroll"]').each(function () {
	    	var $spy = $(this).scrollspy('refresh')
		});

	 });
 
	$('.to-background').click(function(){

	    $('html, body').animate({
	        scrollTop: $("#background").offset().top
	    }, 1000);
	    
	    $('[data-spy="scroll"]').each(function () {
	    	var $spy = $(this).scrollspy('refresh')
		});

	 });
 
	$('.to-example').click(function(){

	    $('html, body').animate({
	        scrollTop: $("#example").offset().top
	    }, 1000);
	    
	    $('[data-spy="scroll"]').each(function () {
	    	var $spy = $(this).scrollspy('refresh')
		});

	 });
 
	$('.to-approach').click(function(){

	    $('html, body').animate({
	        scrollTop: $("#approach").offset().top
	    }, 1000);
	    
	    $('[data-spy="scroll"]').each(function () {
	    	var $spy = $(this).scrollspy('refresh')
		});

	 });
 
	$('.to-model').click(function(){

	    $('html, body').animate({
	        scrollTop: $("#model").offset().top
	    }, 1000);
	    
	    $('[data-spy="scroll"]').each(function () {
	    	var $spy = $(this).scrollspy('refresh')
		});

	 });
 
	$('.to-implementation').click(function(){

	    $('html, body').animate({
	        scrollTop: $("#implementation").offset().top
	    }, 1000);
	    
	    $('[data-spy="scroll"]').each(function () {
	    	var $spy = $(this).scrollspy('refresh')
		});

	 });


	$('.to-conclusion').click(function(){

	    $('html, body').animate({
	        scrollTop: $("#conclusion").offset().top
	    }, 1000);
	    
	    $('[data-spy="scroll"]').each(function () {
	    	var $spy = $(this).scrollspy('refresh')
		});

	 });
 
 
});