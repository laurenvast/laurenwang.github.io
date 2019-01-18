// JavaScript Document

$(window).load(function () {
    "use strict";
    // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({
        'overflow': 'visible'
    });

    var myIndex = 0;
    carousel();

    function carousel() {
        var i;
        var x = document.getElementsByClassName("type");
        // var w = [30, 38, 42, 38, 35];
        for (i = 0; i < x.length; i++) {
           x[i].style.display = "none";  
        }
        myIndex++;
        // $('.design').css("transition","padding-left 1s ease");
        if (myIndex > x.length) {myIndex = 1}    
                // $('.design').css("padding-left", w[myIndex-1]+"px");
        x[myIndex-1].style.display = "block";  
        setTimeout(carousel, 2000); // Change image every 2 seconds
    }

    
        var j = [3, 5, 6, 7, 9, 11, 13];
        var gif = ["goosecover.gif", "emoticon.gif", "opening2f.gif","but_th.gif", "knock.gif", "tri.gif", "lushth.gif"];

        var image0 = document.images[j[0]];
        var downloadingImage = new Image();
        downloadingImage.onload = function(){
            image0.src = this.src;   
        };

        downloadingImage.src = "../img/portfolio/"+ gif[0];
     
        var image1 = document.images[j[1]];
        var downloadingImage = new Image();
        downloadingImage.onload = function(){
            image1.src = this.src;   
        };
        downloadingImage.src = "../img/portfolio/"+ gif[1];

        var image2 = document.images[j[2]];
        var downloadingImage = new Image();
        downloadingImage.onload = function(){
            image2.src = this.src;   
        };
        downloadingImage.src = "../img/portfolio/"+ gif[2];

        var image3 = document.images[j[3]];
        var downloadingImage = new Image();
        downloadingImage.onload = function(){
            image3.src = this.src;   
        };
        downloadingImage.src = "../img/portfolio/"+ gif[3];

        var image4 = document.images[j[4]];
        var downloadingImage = new Image();
        downloadingImage.onload = function(){
            image4.src = this.src;   
        };
        downloadingImage.src = "../img/portfolio/"+ gif[4];

        var image5 = document.images[j[5]];
        var downloadingImage = new Image();
        downloadingImage.onload = function(){
            image5.src = this.src;   
        };
        downloadingImage.src = "../img/portfolio/"+ gif[5];

        var image6 = document.images[j[6]];
        var downloadingImage = new Image();
        downloadingImage.onload = function(){
            image6.src = this.src;   
        };
        downloadingImage.src = "../img/portfolio/"+ gif[6];
})

$(document).ready(function () {
    "use strict";
            var w = 0;

    // scroll menu
    var sections = $('.section'),
        nav = $('.navbar-fixed-top,footer'),
        nav_height = nav.outerHeight(),
        window_height = window.innerHeight - nav_height;

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }


            if(cur_pos > window_height-10){

                $('#logo').css( "width", w);
                $('#defaultCanvas1').css( "width", w);
                w++;
                if (w>= 84){
                    w = 84;
                }

             }else{
                $('#logo').css( "width", w);
                $('#defaultCanvas1').css( "width", w);
                 w--;
                if (w<=0){
                    w = 0;
                } 
            }

            if ($(window).scrollTop() < 10) {
            w = 0;
            }
        });
    });

    nav.find('a').on('click', function () {
        var $el = $(this),
            id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height + 2
        }, 600);

        return false;
    });


    // Menu opacity
    if ($(window).scrollTop() > window_height/2) {
        $(".navbar-fixed-top").addClass("bg-nav");
    } else {
        $(".navbar-fixed-top").removeClass("bg-nav");
    }
    $(window).scroll(function () {
        if ($(window).scrollTop() > window_height/2) {
            $(".navbar-fixed-top").addClass("bg-nav");
        } else {
            $(".navbar-fixed-top").removeClass("bg-nav");
        }
    });



    // Parallax
    var parallax = function () {
        $(window).stellar();
    };

    $(function () {
        parallax();
    });

    // AOS
    AOS.init({
        duration: 1200,
        once: true,
        disable: 'mobile'
    });

    //  isotope
    $('#projects').waitForImages(function () {
        var $container = $('.portfolio_container');
        $container.isotope({
            filter: '*',
        });

        $('.portfolio_filter a').click(function () {
            $('.portfolio_filter .active').removeClass('active');
            $(this).addClass('active');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    animationEngine: "jquery"
                }
            });
            return false;
        });

    });

    //animatedModal
    $("#demo01,#demo02,#demo03,#demo04,#demo05,#demo06,#demo07,#demo08,#demo09").animatedModal();

    // Contact Form 	

    // validate contact form
    $(function () {
        $('#contact-form').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true
                },
                phone: {
                    required: false
                },
                message: {
                    required: true
                }

            },
            messages: {
                name: {
                    required: "This field is required",
                    minlength: "your name must consist of at least 2 characters"
                },
                email: {
                    required: "This field is required"
                },
                message: {
                    required: "This field is required"
                }
            },
            submitHandler: function (form) {
                $(form).ajaxSubmit({
                    type: "POST",
                    data: $(form).serialize(),
                    url: "process.php",
                    success: function () {
                        $('#contact :input').attr('disabled', 'disabled');
                        $('#contact').fadeTo("slow", 1, function () {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor', 'default');
                            $('#success').fadeIn();
                        });
                    },
                    error: function () {
                        $('#contact').fadeTo("slow", 1, function () {
                            $('#error').fadeIn();
                        });
                    }
                });
            }
        });

    });


});