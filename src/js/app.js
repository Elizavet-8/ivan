document.addEventListener("DOMContentLoaded", function () {

	var sliderStud = new Swiper(".stud-saying__slider", {
		spaceBetween: 30,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});

	$('.burger, .overlay').click(function () {
		$('.burger').toggleClass('clicked');
		$('.overlay').toggleClass('show');
		$('nav').toggleClass('show');
		$('body').toggleClass('overflow');
	});

	let nav = $('.nav__menu');
	let line = $('<div />').addClass('line');
	line.appendTo(nav);
	let active = nav.find('.active');
	let pos = 0;
	let wid = 0;
	if (active.length) {
		pos = active.position().left;
		wid = active.width();
		line.css({
			left: pos,
			width: wid
		});
	}

	$('#emailModal').on('shown.bs.modal', function () {
		$('#emailModal').trigger('focus')
	});
	$('#sort').on('shown.bs.modal', function () {
		$('#sort').trigger('focus')
	});
	$('#filter').on('shown.bs.modal', function () {
		$('#filter').trigger('focus')
	});
	$('#folder').on('shown.bs.modal', function () {
		$('#folder').trigger('focus')
	});
	$('#removefolder').on('shown.bs.modal', function () {
		$('#removefolder').trigger('focus')
	});
	$('#renamefolder').on('shown.bs.modal', function () {
		$('#renamefolder').trigger('focus')
	});
	$('#editText').on('shown.bs.modal', function () {
		$('#editText').trigger('focus')
	});





	jQuery(document).ready(function () {
		jQuery('.toast__close').click(function (e) {
			e.preventDefault();
			var parent = $(this).parent('.toast');
			parent.fadeOut("slow", function () { $(this).remove(); });
		});
	});




	$("document").ready(function () {
		$(".tab__body").hide();
		$(".tab__body:first").show();
	});

	$(".tab__nav li").click(function () {
		$(".tab__body").hide();
		var activeTab = $(this).attr("rel");
		$("#" + activeTab).fadeIn();
		$(".tab__nav li").removeClass("active");
		$(this).addClass("active");
	});


	// $(".tab-slider__desc-btn").click(function () {
	// 	$(".card__container").toggleClass("active");  
	// });
	$(".tab-slider__desc-btn").click(function () {
		$('.card__container').toggleClass("active");
	});


	$(".card__row").on("click", ".card__container", function () {
		$(this).toggleClass("active");
	});


	$(window).keyup(function (e) {
		var target = $('.checkbox-other input:focus');
		if (e.keyCode == 9 && $(target).length) {
			$(target).parent().addClass('focused');
		}
	});

	$('.checkbox-other input').focusout(function () {
		$(this).parent().removeClass('focused');
	});

	$(".acordeon").on("click", ".acordeon-cabecera", function () {
		$(this).toggleClass("active").next().slideToggle();
	});

	Dropzone.options.uploadWidget = {
		paramName: 'file',
		maxFilesize: 2, // MB
		maxFiles: 1,
		dictDefaultMessage: 'Drag an image here to upload, or click to select one',
		headers: {
			'x-csrf-token': document.querySelectorAll('meta[name=csrf-token]')[0].getAttributeNode('content').value,
		},
		acceptedFiles: 'image/*',
		init: function () {
			this.on('success', function (file, resp) {
				console.log(file);
				console.log(resp);
			});
			this.on('thumbnail', function (file) {
				if (file.accepted !== false) {
					if (file.width < 640 || file.height < 480) {
						file.rejectDimensions();
					}
					else {
						file.acceptDimensions();
					}
				}
			});
		},
		accept: function (file, done) {
			file.acceptDimensions = done;
			file.rejectDimensions = function () {
				// done('The image must be at least 640 x 544px')
				done('The image must be at least 400 x 400px')
			};
		}
	};

	$("#jpId").jPlayer( {
		ready: function () {
		  $(this).jPlayer("setMedia", {
			 m4v: "/media/myVideo.mp4", 
			 ogv: "/media/myVideo.ogv" 
		  }).jPlayer("play"); //Включаем авто старт
		},
		solution: "flash, html", 
		supplied: "mp4, ogv",
		swfPath: "/scripts"
	});


	$('.js-navtoggle').click(function() {
		$('.sidebar-push').toggleClass('open');
  });

  var btns = document.getElementsByClassName('library__btn');
	var par = document.getElementsByClassName('tab__trigger');
	btns[0].onclick = function() {
	par[0].classList.add("active");
	}
})


import Vue from "vue";

import Studyset from "./components/Studyset.vue";
import Folder from "./components/Folder.vue";
import Formstep from "./components/Formstep.vue";
import Formindex from "./components/Formindex.vue";
import VueDraggable from 'vue-draggable'


new Vue({

	el: '#app',

	components: { Folder, Formstep, Formindex, Studyset, VueDraggable }

})
// ue.use(VueDraggable)
Vue.use(VueDraggable.default);

