$(document).ready(function() {
    var activeWidth = $('.poster-container').width();
    var activeImgWidth = $('.poster-container .poster a img').width();

    function balancePosters() {
        // Calc offset for active card
        var index = $('.poster-container').index($('.active'));
        var offset = -1 * ((index * activeWidth) + (activeImgWidth / 2));
        console.log($('.poster-container.active .poster img').width() / 2);

        $('.poster-container.active').css({"margin-left": offset + "px"});
    }

    balancePosters();

    $('.poster a').click(function (e) {
        e.preventDefault();
        $(this).parents('.poster-container').siblings().not('.' + $(this).attr("class")).removeClass("active").css({"margin-left": "0px"});
        $(this).parents('.poster-container').addClass("active");
        balancePosters();
    });
});