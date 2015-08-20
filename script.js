$(document).ready(function(){
function FamilyMember(name, role, occupation, likesTo1, likesTo2, likesTo3) {
	this.name = name,
	this.role = role,
	this.occupation = occupation,
	this.likesTo1= likesTo1,
	this.likesTo2=likesTo2,
	this.likesTo3=likesTo3
}
var family = [new FamilyMember("Madeleine", "mother", "Prime student", "cook", "swim", "read"),
new FamilyMember("Philip", "father", "physician", "swim", "sing", "travel"),
new FamilyMember("Nicola", "daughter", "high school student", "socialize", "text", "play clarinet"),
new FamilyMember("Weston", "older son", "high school student", "cook", "collect weird facts", "debate"),
new FamilyMember("William", "younger son", "elementary school student", "play legos", "play tennis", "play video games")];

//copy from handlebars page ("Compile a template in JavaScript...")
// handlebars.compile will compile your template in JS.
var source   = $("#entry-template").html();
var template = Handlebars.compile(source);

//place the text on the page by referencing a tag and the template variable created above
$('.content').html(template(family));
//$('.content').html(template(mother));
console.log(family);
});

