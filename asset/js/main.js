// MAP
function initMap() {
    //map options
    var options = {
            zoom: 18,
            center: {
                lat: 5.6391,
                lng: -0.1715
            }
        }
        //new map
    var map = new google.maps.Map(document.getElementById('map'), options)
        //add marker
    var marker = new google.maps.Marker({
        position: { lat: 5.6391, lng: -0.1715 },
        map: map
    })
}

// GALLERY
var i = 0;
var images = [];
var time = 3000;

images[0] = 'asset/img/gallery/img1.jpg';
images[1] = 'asset/img/gallery/img5.jpg';
images[2] = 'asset/img/gallery/img6.jpg';
images[3] = 'asset/img/gallery/img7.jpg';
images[4] = 'asset/img/gallery/img9.jpg';
images[5] = 'asset/img/gallery/img11.jpg';
images[6] = 'asset/img/gallery/img3.jpg';
images[7] = 'asset/img/gallery/img2.jpg';
images[8] = 'asset/img/gallery/img4.jpg';
images[9] = 'asset/img/gallery/img8.jpg';
images[10] = 'asset/img/gallery/img10.jpg';

function changeImg() {
    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout('changeImg()', time)
}
window.onload = changeImg;

//smooth scrolling

$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});
//top scroll
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function() {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $('#back-to-top').tooltip('show');

});