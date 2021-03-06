$(document).ready(function () {

    $(".slide-content").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [
            {
                breakpoint: 920,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                               
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
                
            },
            {            
                breakpoint: 576,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll:1,
                
                
                },       
            },

        ]
        
    });

    $(".slide-person").slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        //prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        //nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        dots: true, 
        arrows: false,
        
        responsive: [
            {
            breakpoint: 1920,
                settings: {
                    slidesToShow: 3,
                    sllidesToScroll: 1,
                    arrows: false,
                    dots: false,
                }           
        
            },
            
            {
                breakpoint: 1270,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 2,
                    arrows: false,
                    dots: true,
                    
                }
            
            },
           
            {
                breakpoint: 576,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1,
                    dots: true,
                }
            
            },
            
            
        ]
    
        
    
    })
    
    /*=========header-slide=======*/
    $(".bg-slide").slick({

        dots: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    })
    
    /*=====navigation======*/
    
    
    /*========AOS========*/
    AOS.init();
    
    /*===========toggle-button========*/    
    var myToggle =  document.getElementById('btnToggle');

    btnToggle.onclick = function () {

        btnToggle.classList.toggle('active');
    }
    /*========navOpen=====*/
    $('#openNav').click(function () {

        $('.nav-toggler').addClass('slide-nav');
    
    })
    $('#openNav').dblclick(function () {

        $('.nav-toggler').removeClass('slide-nav');
    
    })
    
    
})