$(window).on("load", function() {
    $(".loader .inner").fadeOut(100, function() {
        $(".loader").fadeOut(300);
    });

    $(".items").isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });

})

$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        items: 4,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    }); // end owl carousel

    let skillsTopOffset = $('.skillsSection').offset().top;
        //console.log(skillsTopOffset); //836.8

    $(window).scroll(function(){// on scroll for skills section

        if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }
    });// end scroll function for skills section


    $("[data-fancybox]").fancybox();

    $("#filters a").click(function() {

        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        let selector = $(this).attr("data-filter");

            $(".items").isotope({
                filter: selector,
                animationOptions: {
                    duration: 1500,
                    easing: 'linear',
                    queue: false
                }
            });

        return false;

    });// filter portfolio

    $("#navigation a").click(function(e) {
        e.preventDefault();
        let targetElement = $(this).attr("href");
        let targetPosition = $(targetElement).offset().top;
        $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow")

    });//scroll to link

    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);
        function stickyNavigation () {
            let body = $("body");
            if ($(window).scrollTop() >= navTop) {
                body.css("padding-top", nav.outerHeight() + "px")
                body.addClass("fixedNav");
            } else {
                body.css("padding-top", 0)
                body.removeClass("fixedNav");
            }
        }// sticky nav

});//end doc ready