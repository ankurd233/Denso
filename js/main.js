var words = ['AUTOS & TRANSPORTATION'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 5,
    speed = 300;

var wordflick = function () {
    setInterval(function () {
        if (forwards) {
            if (offset >= words[i].length) {
                ++skip_count;
                if (skip_count == skip_delay) {
                    forwards = false;
                    skip_count = 0;
                }
            }
        }
        else {
            if (offset == 0) {
                forwards = true;
                i++;
                offset = 0;
                if (i >= len) {
                    i = 0;
                }
            }
        }
        part = words[i].substr(0, offset);
        if (skip_count == 0) {
            if (forwards) {
                offset++;
            }
            else {
                offset--;
            }
        }
        $('.word').text(part);
    }, speed);
};

$(document).ready(function () {
    wordflick();
});










// ! Banner Swiper
var swiper = new Swiper('.bnr_swpr', {
    slidesPerView: 1,
    // autoplay: {
    //     delay: 2000,
    //     disableOnInteraction: false,
    //     reverseDirection: true,
    //     pauseOnMouseEnter: true,
    // },
    speed: 1000,
    loop: true,
    autoHeight: false,
    calculateHeight: true,
    /*** tab fixing******/
    observer: true,
    observeParents: true,
    delay: 2500,
    time: 1000,

    navigation: {
        nextEl: ".swpr_btn_nxt",
        prevEl: ".swpr_btn_prv",
    },
});

//! Testimonial Swiper


var swiper = new Swiper('.tstmnl_swpr', {
    slidesPerView: 2,
    spaceBetween: 35,
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        reverseDirection: true,

    },

    navigation: {
        nextEl: ".tstmnl-next",
        prevEl: ".tstmnl-prev",
    },

    breakpoints: {

        220: {
            slidesPerView: 1,
            spaceBetween: 0,
        },

        767: {
            slidesPerView: 1,
            spaceBetween: 0,
        },

        768: {
            slidesPerView: 2,
            spaceBetween: 10,

        },

    },


});

//! Input type Number for all Browser

function inpNum(e) {
    e = e || window.event;
    var charCode = (typeof e.which == "undefined") ? e.keyCode : e.which;
    var charStr = String.fromCharCode(charCode);
    if (!charStr.match(/^[0-9]+$/))
        e.preventDefault();
}


// ! Custom Responsive Navbar

const hamburger = document.querySelector("#hamburger");
const NavBar = document.querySelector(".nav_sec");

hamburger.addEventListener('click', () => {
    //Animate Links
    NavBar.classList.toggle("active");

    //Hamburger Animation
    hamburger.classList.toggle("active");
});



//! Back To Top

let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 800px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 800 ||
        document.documentElement.scrollTop > 800
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


//! Pre_loader

var loader = document.getElementById("pre_Loader");
window.addEventListener("load", function () {
    loader.style.display = "none";
})