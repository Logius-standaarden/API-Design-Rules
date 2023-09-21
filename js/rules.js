$(window).bind('load', function() {
    console.log($(".rule").length);
    var functionalList = [];
    var technicalList = [];

    function rules() {
        $(".rule").each(function() {
            id = this.id;
            //console.log(this.id);
            var titel = $(this).find(".rulelab")
            titel.prepend('<a href="#' + id + '">' + id + '</a>: ');
            let implications = "Unknown rule type in " + this.id;
            let flag = implications;
            let type = $(this).data("type");
            if (type == "functional") {
                implications = "Adherance to this rule needs to be manually";
                flag = "<div title=\"This is a functional design rule and hence cannot be tested automatically.\" class=\"flag\">functional</div>"
                functionalList.push(titel.html())
            } else if (type == "technical") {
                implications = "This rule is included in the automatic tests on <a href=\"https://developer.overheid.nl/\">developer.overheid.nl</a>. The source code of the technical test can be found <a href=\"https://gitlab.com/commonground/don/adr-validator/-/blob/main/pkg/adr/rules.go\">here</a>.";
                flag = "<div title=\"This is a technical design rule and hence should be tested automatically.\" class=\"flag\">technical</div>"
                technicalList.push(titel.html())
            } else {
                //throw new Error(implications);
            }
            $(this).prepend(flag);
            $(this).find("#implications").append(implications).removeAttr('id');
        });
        compileList(functionalList, "#functionalList");
        compileList(technicalList, "#technicalList");
    };

    function compileList(list, id) {
        var target = $(id)

        $.each(list, function(index, val) {
            target.append("<li>" + val + "</li>");
        });
    }

    if ($(".rule").length > 0) {
        rules();
    } else {
        window.setTimeout(rules, 500);
    }
});