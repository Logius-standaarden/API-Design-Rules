$(window).bind('load', function() {
    console.log($(".rule").length);

    function rules() {
        $(".rule").each(function() {
            console.log(this.id);
			let implications = "Unknown rule type in " + this.id;
			if ($(this).data("type") == "functional"){
				implications = "Adherance to this rule needs to be manually";
			}
			else if ($(this).data("type") == "technical"){
				implications = "This rule is included in the automatic tests on <a href=\"https://developer.overheid.nl/\">developer.overheid.nl</a>. The source code of the technical test can be found <a href=\"https://gitlab.com/commonground/don/adr-validator/-/blob/main/pkg/adr/rules.go\">here</a>.";
			}
			else {				
				//throw new Error(implications);
			}
			$(this).find("#implications").append(implications);			
        });
    };
    if ($(".rule").length > 0) {
        rules();
    } else {
        window.setTimeout(rules, 500);
    }
});