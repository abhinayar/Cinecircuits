$(document).ready(function(){
    function showMobileNav() {
        $(".mob-nav-link").click(function(){
            $(".nav").removeClass("closed").addClass("open");
            $(".menu-arrow-down").addClass("hidden");
        });

        $(".nav-item.mobile-close").click(function(){
            $(".nav").removeClass("open").addClass("closed");
            $(".menu-arrow-down").removeClass("hidden");
        });
    }
    showMobileNav();
    
    $(".top-link").click(function(){
        window.scrollTo(0,0); 
    });
});