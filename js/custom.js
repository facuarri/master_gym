// nav-bg effect & scroll to top btn
$(document).scroll(() => {
    if($(document).scrollTop() < 600){
        $("nav").removeClass("nav-background");
        $(".button-up").removeClass("button-visible");
    }   else{
        $("nav").addClass("nav-background");
        $(".button-up").addClass("button-visible");
    }
});

// WOW JS ini
new WOW().init();

// IMG PopUp
$('.img-parent-container').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{
        enabled:true
        }
});

// members carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin: 30,
    nav:true,
    autoplay:true,
    autoplayTimeout: 1750,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        750:{
            items:3
        }
    }
})

// Current year footer
document.querySelector(".currentYear").innerHTML = new Date().getFullYear();