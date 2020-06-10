// JQuery
$(document).ready(function() {
	var checkHeight = $("#content2").height()
	var checkHeight2 = $("#content1").height()
	$(window).scroll(function() {
		if ($(window).scrollTop() < checkHeight) {
			$("#second_menu1").css("color","#16161A");
			$("#second_menu2").css("color","#707070");
		}
		else {
			$("#second_menu1").css("color","#707070");
			$("#second_menu2").css("color","#16161A");
		}
	});
});


$(document).ready(function() {
	$("#second_menu1").click(function() {
		$('html, body').animate({
			scrollTop: $("html").offset().top
		}, 1000);
		$("#home_button").css("color", "#16161A");
		$("#about_button").css("color", "#707070");
	});
});
$(document).ready(function() {
	$("#home_button").click(function() {
		$('html,body').animate({
			scrollTop: $("html").offset().top
		}, 1000);
		$("#home_button").css("color", "#16161A");
		$("#about_button").css("color", "#707070");
	});
});


$(document).ready(function() {
	$("#second_menu2").click(function() {
		$('html, body').animate({
			scrollTop: $("#content2").offset().top+2
		}, 1000);
		$("#home_button").css("color", "#707070");
		$("#about_button").css("color", "#16161A");
	});
});
$(document).ready(function() {
	$("#about_button").click(function() {
		$('html, body').animate({
			scrollTop: $("#content2").offset().top+2
		}, 1000);
		$("#home_button").css("color", "#707070");
		$("#about_button").css("color", "#16161A");
	});
});
// JQuery END

/*
// JavaScript 사용
// Javascript scrollTo behavior가 최신 브라우저에서 동작하지 않는 문제점이 있어 JQuery로 사용했습니다.
function mvscroll1() {
	var checkHeight = document.getElementById("content1").offsetHeight;
	var changecolor1 = document.getElementById("home_button");
	var changecolor2 = document.getElementById("about_button");
	
	window.scrollTo({
		top: checkHeight,
		left: 0,
		behavior: "smooth",
	});
	
	changecolor1.style.color="#16161A";
	changecolor2.style.color="#707070";
}
function mvscroll2() {
	var checkHeight = document.getElementById("content1").offsetHeight;
	
	window.scrollTo({
		top: checkHeight,
		left: 0,
		behavior: "smooth",
	});
}


function mvscroll3() {
	var checkHeight = document.getElementById("content2").offsetHeight;
	var changecolor1 = document.getElementById("home_button");
	var changecolor2 = document.getElementById("about_button");
	
	window.scrollTo({
		top: checkHeight,
		left: 0,
		behavior: "smooth",
	});

	changecolor1.style.color="#707070";
	changecolor2.style.color="#16161A";

}
function mvscroll4() {
	var checkHeight = document.getElementById("content2").offsetHeight;
	
	window.scrollTo({
		top: checkHeight,
		left: 0,
		behavior: "smooth",
	});
}
*/
// JavaScript END
