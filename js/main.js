$(document).ready(function () {

    var slideNum = 1;
    var slideTime;
    slideCount = $(".slider .slide").length;

    var animSlide = function (arrow) {
        clearTimeout(slideTime);

        if (arrow == "next") {
            if (slideNum == slideCount) {
                slideNum = 1;
            } else {
                slideNum++
            }
            translateWidth = -$('.slider-container').width() * (slideNum - 1);
            $('.slider').css({'transform': 'translate(' + translateWidth + 'px, 0)'});
        } else if (arrow == "prew") {
            if (slideNum == 1) {
                slideNum = slideCount;
            } else {
                slideNum -= 1
            }
            translateWidth = -$('.slider-container').width() * (slideNum - 1);
            $('.slider').css({'transform': 'translate(' + translateWidth + 'px, 0)'});
        } else {
            slideNum = arrow;
            translateWidth = -$('.slider-container').width() * (slideNum - 1);
            $('.slider').css({'transform': 'translate(' + translateWidth + 'px, 0)'});
        }

        $(".ctrl-select.active").removeClass("active");
        $('.ctrl-select').eq(slideNum - 1).addClass('active');

        $(".slide.active").removeClass("active");
        $('.slide').eq(slideNum - 1).addClass('active');
    }

    var adderSpan = '';
    $('.slide').each(function (index) {
        adderSpan += '<span class = "ctrl-select">' + index + '</span>';
    });
    $('<div class ="radios">' + adderSpan + '</div>').appendTo('.slider-container');
    $(".slide:first").addClass("active");
    $(".ctrl-select:first").addClass("active");
    $('.ctrl-select').click(function () {
        var goToNum = parseFloat($(this).text());
        animSlide(goToNum + 1);
    });
    var pause = false;
    $('.slider-wrap').hover(
        function () {
            clearTimeout(slideTime);
            pause = true;
        },
        function () {
            pause = false;
            rotator();
        });

    var clicking = false;
    var prevX;
    $('.slide').mousedown(function (e) {
        clicking = true;
        prevX = e.clientX;
    });

    $('.slide').mouseup(function () {
        clicking = false;
    });

    $(document).mouseup(function () {
        clicking = false;
    });

    $('.slide').mousemove(function (e) {
        if (clicking == true) {
            if (e.clientX < prevX) {
                animSlide("next");
                clearTimeout(slideTime);
            }
            if (e.clientX > prevX) {
                animSlide("prew");
                clearTimeout(slideTime);
            }
            clicking = false;
        }
    });
    $('.slide').hover().css('cursor', 'pointer');

});

function diplay_hide(blockId) {
    var par = document.getElementsByClassName('navigation--feed');
    if ($(blockId).css('display') == 'none') {
        $(blockId).animate({height: 'show'}, 500);
        par[0].classList.add("active")
    } else {
        $(blockId).animate({height: 'hide'}, 500);
        par[0].classList.remove("active")
    }
}

function initMap() {
    // The location of Uluru
    var uluru = {lat: 53.8900300, lng: 27.5828772};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 6,
            center: uluru,
            styles: [
                {
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#212121"
                        }
                    ]
                },
                {
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#212121"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "administrative.country",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative.locality",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#bdbdbd"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#181818"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#616161"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#1b1b1b"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ff8000"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#8a8a8a"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#373737"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#3c3c3c"
                        }
                    ]
                },
                {
                    "featureType": "road.highway.controlled_access",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#4e4e4e"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#616161"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#000000"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#3d3d3d"
                        }
                    ]
                }
            ]
        });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
}