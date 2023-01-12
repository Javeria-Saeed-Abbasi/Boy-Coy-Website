// butter.init({
//     wrapperId: 'butter'
//   });

new WOW().init();

function init(){
	 new SmoothScroll(document,150,30)
}

function SmoothScroll(target, speed, smooth) {
	if (target === document)
		target = (document.scrollingElement 
              || document.documentElement 
              || document.body.parentNode 
              || document.body) // cross browser support for document scrolling
      
	var moving = false
	var pos = target.scrollTop
  var frame = target === document.body 
              && document.documentElement 
              ? document.documentElement 
              : target // safari is the new IE
  
	target.addEventListener('mousewheel', scrolled, { passive: true })
	target.addEventListener('DOMMouseScroll', scrolled, { passive: true })

	function scrolled(e) {
  //   if(!moving) {
  //     pos = target.scrollTop;
  // }
		e.preventDefault(); // disable default scrolling

		var delta = normalizeWheelDelta(e)

		pos += -delta * speed
		pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)) // limit scrolling

		if (!moving) update()
	}

	function normalizeWheelDelta(e){
		if(e.detail){
			if(e.wheelDelta)
				return e.wheelDelta/e.detail/40 * (e.detail>0 ? 1 : -1) // Opera
			else
				return -e.detail/3 // Firefox
		}else
			return e.wheelDelta/120 // IE,Safari,Chrome
	}

	function update() {
		moving = true
    
		var delta = (pos - target.scrollTop) / smooth
    
		target.scrollTop += delta
    
		if (Math.abs(delta) > 0.5)
			requestFrame(update)
		else
			moving = false
	}

	var requestFrame = function() { // requestAnimationFrame cross browser
		return (
			window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function(func) {
				window.setTimeout(func, 1000 / 50);
			}
		);
	}()
}

//--- Jquery scroll:
// $(document).ready(function(){
//   // $fn.scrollSpeed(step, speed, easing);
//   jQuery.scrollSpeed(200, 800);
// });


// (function($) {

// jQuery.scrollSpeed = function(step, speed, easing) {
    
//     var $document = $(document),
//         $window = $(window),
//         $body = $('html, body'),
//         option = easing || 'default',
//         root = 0,
//         scroll = false,
//         scrollY,
//         scrollX,
//         view;
        
//     if (window.navigator.msPointerEnabled)
    
//         return false;
        
//     $window.on('mousewheel DOMMouseScroll', function(e) {
        
//         var deltaY = e.originalEvent.wheelDeltaY,
//             detail = e.originalEvent.detail;
//             scrollY = $document.height() > $window.height();
//             scrollX = $document.width() > $window.width();
//             scroll = true;
        
//         if (scrollY) {
            
//             view = $window.height();
                
//             if (deltaY < 0 || detail > 0)
        
//                 root = (root + view) >= $document.height() ? root : root += step;
            
//             if (deltaY > 0 || detail < 0)
        
//                 root = root <= 0 ? 0 : root -= step;
            
//             $body.stop().animate({
        
//                 scrollTop: root
            
//             }, speed, option, function() {
        
//                 scroll = false;
            
//             });
//         }
        
//         if (scrollX) {
            
//             view = $window.width();
                
//             if (deltaY < 0 || detail > 0)
        
//                 root = (root + view) >= $document.width() ? root : root += step;
            
//             if (deltaY > 0 || detail < 0)
        
//                 root = root <= 0 ? 0 : root -= step;
            
//             $body.stop().animate({
        
//                 scrollLeft: root
            
//             }, speed, option, function() {
        
//                 scroll = false;
            
//             });
//         }
        
//         return false;
        
//     }).on('scroll', function() {
        
//         if (scrollY && !scroll) root = $window.scrollTop();
//         if (scrollX && !scroll) root = $window.scrollLeft();
        
//     }).on('resize', function() {
        
//         if (scrollY && !scroll) view = $window.height();
//         if (scrollX && !scroll) view = $window.width();
        
//     });       
// };

// jQuery.easing.default = function (x,t,b,c,d) {

//     return -c * ((t=t/d-1)*t*t*t - 1) + b;
// };

// })(jQuery);



//--- Scroll to specific values
// scrollTo is the same
window.scrollTo({
  top: 2500,
  left: 0,
  behavior: "smooth",
});

// // Scroll certain amounts from current position
window.scrollBy({
  top: 100, // could be negative value
  left: 0,
  behavior: "smooth",
});

// Scroll to a certain element
document.querySelector(".page").scrollIntoView({
  behavior: "smooth",
});

// ================= ScrollY =====================
// let layer = document.getElementById('div1');
let layer = document.querySelector(".layer");
let div1 = document.getElementById("div1");
let robbo = document.querySelector(".robbo");
let header = document.querySelector(".header");
let mainLeft = document.querySelector(".mainLeft");
let mainRight = document.querySelector(".mainRight");
let clouds3 = document.querySelector(".clouds3");
let clouds4 = document.querySelector(".clouds4");
let mainLeftPage2 = document.querySelector(".page2 .mainLeft");
let mainRightPage2 = document.querySelector(".page2 .mainRight");
let page3 = document.querySelector(".page3");
let backgroundpage3 = document.querySelector(".page3 .background");
let mountains1 = document.querySelector(".page3 .mountains1");
let mountains2 = document.querySelector(".page3 .mountains2");
let mainRight3 = document.querySelector(".page3 .mainRight");
let mainLeft3 = document.querySelector(".page3 .mainLeft");
let page4 = document.querySelector(".page4");
let background3Page4 = document.querySelector(".page4 .background3");
let background2Page4 = document.querySelector(".page4 .background2");
let background1Page4 = document.querySelector(".page4 .background1");
let wave3 = document.getElementById("wave3");
let wave2 = document.getElementById("wave2");
let wave1 = document.getElementById("wave1");
let wavePage4 = document.querySelector(".wave");
// let leftBaloon = document.querySelector(".baloonLeft");
window.addEventListener("scroll", function () {
  let value = window.scrollY;
  // layer.style.transform = "translateY(" + (value) * 0.25 + "px) ";
  robbo.style.transform = "translateY(" + value * 0.25 + "px) ";
  robbo.style.top = 43 + "px";
  header.style.transform = "translateY(" + value * 0.25 + "px) ";
  mainLeft.style.transform = "translateY(" + value * 0.25 + "px) ";
  mainLeft.style.top = 111 + "px";
  mainRight.style.transform = "translateY(" + value * 0.25 + "px) ";
  mainRight.style.top = 111 + "px";
  // div1.style.transform = "translateY(" + (value)* 0.25  + "px) ";
  clouds3.style.transform = "translateY(" + value * -0.5 + "px) ";
  clouds4.style.transform = "translateY(" + value * -0.3 + "px) ";
  // layer.style.transform = "translateY(" + value + "px)";
  mainLeftPage2.style.transform = "translateY(" + value * -0.25 + "px) ";
  mainLeftPage2.style.top = 750 + "px";
  mainRightPage2.style.transform = "translateY(" + value * -0.25 + "px) ";
  mainRightPage2.style.top = 750 + "px";
  // PAGE 3
  page3.style.top = 1530 + "px";
  backgroundpage3.style.transform="translateY(" + value * 0.1 + "px) ";
  mountains1.style.transform = "translateY(" + value * 0.058 + "px) ";
  // mountains1.style.top = 26 + "px";
  mountains2.style.transform = "translateY(" + value * 0.09 + "px) ";
  console.log(value, mountains2.style.transform + "mo8un");
  mainRight3.style.transform = "translateY(" + value * 0.28 + "px) ";
  mainLeft3.style.transform = "translateY(" + value * 0.28 + "px)";
  //PAGE4
  page4.style.top = 2692 + "px";
  background1Page4.style.transform = "translateY(" + value * -0.005 + "px)";
  background2Page4.style.transform = "translateY(" + value * -0.015 + "px)";
  background3Page4.style.transform = "translateY(" + value * -0.030 + "px)";
  // wavePage4.style.transform = "translateY(" + value * 0.3 + "px)";\
  wave1.style.transform = "translateX(-" + value * 0.05 + "px)";
  wave2.style.transform = "translateX(" + value * 0.003 + "px)";
  wave3.style.transform = "translateX(" + value * 0.005 + "px)";
});

// window.addEventListener("scroll", function () {
//   let value = window.scrollY;
//   $("#wave1").addClass("wave1Animate");
//   console.log(wave1);
// });


// var leftItem = document.getElementById('wave1'),
//     rightItem = document.getElementById('wave2');

// window.addEventListener("optimizedScroll", function(){
//   leftItem.style.transform = "translateX(-" + window.pageYOffset + "deg)";
//   rightItem.style.transform = "translateX(" + window.pageYOffset + "deg)";
// })


// var scrollPos = window.pageYOffset;
// console.log(scrollPos);
// document.querySelector("body").scrollHeight
// document.scrollingElement.offsetHeight
// var offset = window.pageYOffset/(document.querySelector("body").scrollHeight - document.scrollingElement.offsetHeight);
// console.log(offset);



// var prevScrollpos = window.pageYOffset
// $(window).scroll(function() {
//   $(".layer").css({transform: 'translateY(' + ($(window).scrollTop()) +'px)'});
//   console.log(window.pageYOffset);
// });

// ($body = $(document.body)),
//   ($window = $(window)),
//   (bodyHeight = $body.height());
// console.log(bodyHeight + " bodyheight");
// $(function(){
//   $('.layer ').each(function() {
//     var off = $(this).offset().top
//     $(this).data('orig-offset', off);
//   });
//   $(window).scroll(function(){
//     // var scrollTop = $(window).scrollTop();
//     let scrollTop = window.scrollY;
//      $('.layer').each(function(){
//       var off = $(this).data('orig-offset');

//       console.log(off  + " offset");

//       if (scrollTop >= off) {
//         var translate =  Math.floor((scrollTop - off) / $(window).height() * 100);
//         console.log(translate + " translate");
//         $(this).css({transform: 'translateY(' + translate +'px)'});
//       }
//      });
//   });
// });

//App menu hover
$(".menu.apps").hover(
  function over() {
    $(".apps .over").css({opacity: "1" });
    $(".apps .background").css({width: "72px" , height: "34px" ,marginLeft:"0px",marginTop:"0px",marginRight:"0px"});
    $(".apps .over").addClass("menuTransitionAnimation");
    console.log("mouseover");
  },
  function out() {
    $(".apps .over").css({opacity: "0" });
    $(".apps .over .background").css({width: "0px" , height: "0px" ,marginLeft:"0px"});
    $(".apps .over").addClass("menuTransitionAnimation");
    console.log("mouseout");
  }
);
//Home menu hover
$(".menu.home").hover(
  function over() {
    $(".home .over").css({opacity: "1" });
    $(".home .background").css({width: "35px" , height: "34px" ,marginLeft:"0px",marginTop:"0px",marginRight:"0px"});
    $(".home .over").addClass("menuTransitionAnimation");
    console.log("mouseover");
  },
  function out() {
    $(".home .over").css({opacity: "0" });
    $(".home .over .background").css({width: "0px" , height: "0px" ,marginLeft:"0px"});
    $(".home .over").addClass("menuTransitionAnimation");
    console.log("mouseout");
  }
);
//About menu hover
$(".menu.about").hover(
  function over() {
    $(".about .over").css({opacity: "1" });
    $(".about .background").css({width: "88px" , height: "34px" ,marginLeft:"0px",marginTop:"0px",marginRight:"0px"});
    $(".about .over").addClass("menuTransitionAnimation");
    console.log("mouseover");
  },
  function out() {
    $(".about .over").css({opacity: "0" });
    $(".about .over .background").css({width: "0px" , height: "0px" ,marginLeft:"0px"});
    $(".about .over").addClass("menuTransitionAnimation");
    console.log("mouseout");
  }
);
//Contact menu hover
$(".menu.contact").hover(
  function over() {
    $(".contact .over").css({opacity: "1" });
    $(".contact .background").css({width: "112px" , height: "34px" ,marginLeft:"0px",marginTop:"0px",marginRight:"0px"});
    $(".contact .over").addClass("menuTransitionAnimation");
    console.log("mouseover");
  },
  function out() {
    $(".contact .over").css({opacity: "0" });
    $(".contact .over .background").css({width: "0px" , height: "0px" ,marginLeft:"0px"});
    $(".contact .over").addClass("menuTransitionAnimation");
    console.log("mouseout");
  }
);
//letter hover
$(".envelopes").hover(
  function normalFb() {
    $(".letterWrapper").css("top", "20px");
    $(".letterWrapper").addClass("letterTransitionAnimation");
    // $(this).animate({ });
    console.log("mouseover");
  },
  function hoverFb() {
    $(".letterWrapper").css("top", "68px");
    $(".letterWrapper").addClass("letterTransitionAnimation");
    console.log("mouseout");
  }
);
//facebook hover
$("#fb").hover(
  function normalFb() {
    $(".fb .over").css("opacity", "1", "transition", "2s");
    $(".fb .over").addClass("transitionAnimation");
    // $(this).animate({ });
    console.log("mouseover");
  },
  function hoverFb() {
    $(".fb .over").css("opacity", "0");
    console.log("mouseout");
  }
);
//Am hover
$("#am").hover(
  //am hover
  function normalFb() {
    $(".am .over").css("opacity", "1", "transition", "0.2s");
    $(".am .over").addClass("transitionAnimation");
    console.log("mouseover");
  },
  function hoverFb() {
    $(".am .over").css("opacity", "0");
    console.log("mouseout");
  }
);
//twitter hover
$("#tw").hover(
  //twitter
  function normalFb() {
    $(".tw .over").css("opacity", "1", "transition", "0.2s");
    $(".tw .over").addClass("transitionAnimation");
    console.log("mouseover");
  },
  function hoverFb() {
    $(".tw .over").css("opacity", "0");
    console.log("mouseout");
  }
);
//logo hover
$(".logo").hover(
  function () {
    $(".over .head").css("opacity", "1");
    $(".over .head").addClass("transitionAnimation");
    console.log("mouseover");
  },
  function () {
    $(".over .head").css("opacity", "0");
    console.log("mouseover");
  }
);
// Downlaod Android
$(".download").hover(
  function () {
    $(".download .over").css("opacity", "1");
    $(".download .over").addClass("transitionAnimation");
    console.log("mouseover");
  },
  function () {
    $(".download .over").css("opacity", "0");
    console.log("mouseover");
  }
);
// Previous Button Tv
$(".button.previous").hover(
  function () {
    $(".previous .visibleShape").css({ opacity: "1", display: "block" });
    $(".previous .visibleShape").addClass("transitionAnimation");
    console.log("mouseover");
  },
  function () {
    $(".previous .visibleShape").css("opacity", "0");
    console.log("mouseover");
  }
);
// Next Button Tv
$(".button.next").hover(
  function () {
    $(".next .visibleShape").css({ opacity: "1", display: "block" });
    $(".next .visibleShape").addClass("transitionAnimation");
    console.log("mouseover");
  },
  function () {
    $(".next .visibleShape").css("opacity", "0");
    console.log("mouseover");
  }
);
// Slide TV slides:
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("tvImg");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

//Spin Hands hover
$(".roboHand").hover(
  //twitter
  function () {
    // $(".tw .over").css("opacity", "1", "transition", "0.2s");
    $(".roboHand .roboHandRight").addClass("rightHandAnimation");

    console.log("hand1");
    id1 = setInterval(() => {
      $(".roboHand .sparkOne").css("display", "block");
      $(".roboHand .sparkTwo").css("display", "block");
      $(".roboHand .sparkThree").css("display", "block");
    }, 1000);
  },
  function () {
    $(".roboHand .roboHandRight").removeClass("rightHandAnimation");
    id2 = setInterval(() => {
      $(".roboHand .sparkOne").css("display", "none");
      $(".roboHand .sparkTwo").css("display", "none");
      $(".roboHand .sparkThree").css("display", "none");
    }, 1000);

    console.log("hand2");
  }
);
//Spin Hands hover
$(".roboHand").hover(
  //twitter
  function () {
    // $(".tw .over").css("opacity", "1", "transition", "0.2s");
    // $('.roboHand .roboHandLeft').animate({rotate: "30deg"}, 1000, shrink_anim);
    // // $('.roboHand .roboHandLeft').css('rotate(30deg)');
    $(".roboHand .roboHandLeft").addClass("leftHandAnimation");
    console.log("hand1");
    id3 = setInterval(() => {
      $(".roboHand .sparkOne").css("display", "block");
      $(".roboHand .sparkTwo").css("display", "block");
      $(".roboHand .sparkThree").css("display", "block");
    }, 1000);
  },
  function () {
    $(".roboHand .roboHandLeft").removeClass("leftHandAnimation");
    id4 = setInterval(() => {
      $(".roboHand .sparkOne").css("display", "none");
      $(".roboHand .sparkTwo").css("display", "none");
      $(".roboHand .sparkThree").css("display", "none");
    }, 1000);
    console.log("hand2");
  }
);
