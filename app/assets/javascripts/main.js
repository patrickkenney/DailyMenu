$(document).ready(function(){
	$("html").addClass("js");
	$("html").removeClass("no-js");
	$(".menu-link").click(function(e) {
	  e.preventDefault();
	  $('body').removeClass("active-sidebar");
	  $('body').toggleClass("active-nav");
	});
	$(".sidebar-link").click(function(e) {
	  e.preventDefault();
	  $('body').removeClass("active-nav");
	  $('body').toggleClass("active-sidebar");
	});
	$("#nav li a").click(function(e) {
	  e.preventDefault();
	  $('body').removeClass("active-nav");
	  $('#nav').addClass("up-div");
	});
	$('#nav').onePageNav({ begin: function() { console.log('start') }, end: function() { console.log('stop') } }); $('.do').click(function(e) { $('#section-4').append('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>'); e.preventDefault(); }); });