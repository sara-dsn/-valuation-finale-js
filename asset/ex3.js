var tab=["Audrey","Aurélien","Flavien","Jérémy","Laurent","Melik","Nouara","salem","stéphane"];

var pre=window.prompt("Entrez un prénom (avec Majuscule) correspondant au tableau mystère: ");
var index=tab.indexOf(pre)
if(index!=-1)
{
alert("Bien joué!")
var supp=tab.splice(index,1);
var ajout=tab.push(" ")
}
else
{
alert("Perdu ,rachraîchissez la page et recommencez!")
}
console.log(tab);