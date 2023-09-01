$(window).bind('load', function(){
  rules = document.getElementsByClassName("rule");
console.log(rules.length);
for (let r of rules) {
console.log(r.id);
let type = r.getAttribute("data-type");
console.log(type);
}
});
