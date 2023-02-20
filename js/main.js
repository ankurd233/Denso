
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