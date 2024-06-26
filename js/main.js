$(document).ready(function () {
    // sticky menu
    $(window).on('scroll', function () {
        if ($(window).scrollTop()) {
            $('.header').addClass('sticky');
        }
        else {
            $('.header').removeClass('sticky');
        }
    });


    //    current page
    var location = window.location.href;

    $('.header-holder-list a').each(function (e){
        var link = $(this).attr('href');

        if(location == link){
            $(this).closest('li').addClass('current');
            console.log($(this).addClass('current'))
        }
    });



// navigation markerLeft > 992
    var marker1 = document.querySelector('#marker1');
    var hoverLink = document.querySelectorAll('.header-holder-list li a');

    function indicator(e){
        marker1.style.left = e.offsetLeft+"px";
        marker1.style.width = e.offsetWidth+"px";
        marker1.style.height = '2px';
        marker1.style.transition = '0.7s';
        marker1.style.opacity = '1';
        marker1.style.visibility = 'visible';
    }

    hoverLink.forEach(link => {
        link.addEventListener('mousemove', (e)=>{
            indicator(e.target);
        })	;
        link.addEventListener('mouseout', function (){
            marker1.style.opacity = '0';
            marker1.style.visibility = 'hidden';
            // marker1.style.width = '0'
        });

    });


    //    mobile navigation
    $('.trigger-menu').click(function (event) {
        event.preventDefault();
        $('.header-holder, .trigger-menu,.header-holder-block, .header-holder-block-wrapper, .trunslucent-string').toggleClass('active');
        $('body').toggleClass('overflow');
        $('header').addClass('clip');
    });

    //language-switcher
    $('.language-switcher li a').click(function (e) {
        // e.preventDefault();
        $(this).addClass('active-language')
            .closest('li').siblings()
            .find('a')
            .removeClass('active-language');
    });


    //date picker en
    var dates = ["20-06-2022", "23-06-2022", "29-06-2022"];

    function disableDates(date) {
        var string = $.datepicker.formatDate('dd-mm-yy', date);
        return [dates.indexOf(string) == -1];
    }

    if($('#date-picker').length){
        $('#date-picker').datepicker({
            minDate: 0,
            beforeShowDay: disableDates
        });
    }

    //subscribe
    $('.subscribe-form input[type=submit]').click(() => {
        $('span.thank-you').addClass('success')
    })



});