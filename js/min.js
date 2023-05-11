$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");

        } else {
            $('.navbar').removeClass("sticky");

        }
    });
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $(' .menu-btn i').toggleClass("active");
    });
//     $('.carousel').owlCarousel({
//         margin: 20,
//         loop: true,
//         autoplayTimeOut: 2000,
//         autoplayHoverPause: true,
//         responsive:{
//             0:{
//                 items:1,
//                 nav:false
//             },
//             600:{
//                 items:2,
//                 nav:false
//             },
//             1000:{
//                 items:3,
//                 nav:false
//             }
//         }
//     });
});
// let nav=document.querySelector(".navbar");
// window.onscroll=function(){
//     if(document.documentElement.scrollTop>20){
//         nav.classList.add("header-scrolled");
//     }else{
//         nav.classList.remove("header-scrolled");
//     }
// }
// let navBar=document.querySelector(".nav-link");
// let navCollapse=document.querySelector(".navbar-collapse.collapse");
// navBar.forEach(function(a){
//     a.addEventListener("click",function(){
//         navCollapse.classList.remove("show");
//     })
// })