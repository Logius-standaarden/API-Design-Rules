$(window).bind('load', function() {
    console.log($(".rule").length);

    function rules() {
        $(".rule").each(function() {
            console.log(this.id);
        });
    };
    if ($(".rule").length > 0) {
        rules();
    } else {
        window.setTimeout(rules, 500);
    }
});