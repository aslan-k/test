$(document).ready(function() {
    
    $('.main_btna, .main_btn, a[href="#sheldure"], .close').on("click", function() {
        $(".overlay").fadeToggle("slow");
        $(".modal").animate(
            {
                opacity: 'toggle',
                height: 'toggle'
            }, "slow"   
        );
    });
});