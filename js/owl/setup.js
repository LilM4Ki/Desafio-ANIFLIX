$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:8
        }
    }
})


var stopVideo = () => {
    var iframe = document.querySelector('#video')
    if (iframe) {
        var iframeSrc = iframe.src;
        iframe.src = iframeSrc;
    }
};

var stopVideo2 = () => {
    var iframe2 = document.querySelector('#video2')
    if (iframe2) {
        var iframeSrc2 = iframe2.src;
        iframe2.src = iframeSrc2;
    }
};

var stopVideo3 = () => {
    var iframe3 = document.querySelector('#video3')
    if (iframe3) {
        var iframeSrc3 = iframe3.src;
        iframe3.src = iframeSrc3;
    }
};