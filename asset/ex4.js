var pu = window.prompt("Entrez le prix du produit:");
var qtecom = window.prompt("Entrez la quantité commandée:");

var tot = pu * qtecom;

if (tot > 200) {
    remise = 10 ;
}
else if (tot<100)
{
    remise =0;
}
else if (100 <= tot <= 200) {
    var remise = 5 ;
}
var reduc = tot / 100 * remise;
var totRemise =tot-reduc;
if (totRemise > 500) {
    var port = 0 ;
}
else if (totRemise < 500) {
    port = 2 ;
}
var horsTaxe = tot - reduc;
var prixPort = horsTaxe / 100 * port;

if (prixPort < 6) {
    prixPort = 6 ;
}


var total=horsTaxe+prixPort;

console.log("La remise est de " + remise + "% (" + reduc + "€) soit " + horsTaxe + " et frais port " + port + "% ; à payer : " + total + " €");
// console.log("La remise est de " + remise + "% (" + reduc + ") soit " + horsTaxe + " et frais port " + port + " (de " + horsTaxe + " €) soit +" ; à payer: "+total+ " €")
// document.getElementById("affiche").innerHTML="La remise est de " + remise + "% (" + reduc + ") soit " + horsTaxe + " et frais port " + port + " ; à payer : " + total + " €" ;