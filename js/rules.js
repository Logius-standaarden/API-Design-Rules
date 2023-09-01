$(window).bind('load', function() {
    console.log($(".rule").length);

    function rules() {
        $(".rule").each(function() {
            console.log(this.id);
			let implications = "Unknown rule type in " + this.id;
			let flag = implications;
			let type = $(this).data("type");
			if (type == "functional"){
				implications = "Adherance to this rule needs to be manually";
				flag = "<div title=\"This is a functional design rule and hence cannot be tested automatically.\" class=\"flag\">functional</div>"
			}
			else if (type == "technical"){
				implications = "This rule is included in the automatic tests on <a href=\"https://developer.overheid.nl/\">developer.overheid.nl</a>. The source code of the technical test can be found <a href=\"https://gitlab.com/commonground/don/adr-validator/-/blob/main/pkg/adr/rules.go\">here</a>.";
			}
			else {				
				//throw new Error(implications);
			}
			$(this).prepend(flag);
			$(this).find("#implications").append(implications);			
        });
    };
    if ($(".rule").length > 0) {
        rules();
    } else {
        window.setTimeout(rules, 500);
    }
});