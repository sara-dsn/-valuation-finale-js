
var multi = parseInt(window.prompt("Entrez le chiffre de la table de multiplication que vous souhaitez :"));
var resultat = 0;
var tableau = [];

function TableMultiplication(multi) {
    for (var i = 0; i <= 10; i++) {
        resultat = i * multi;
        console.log(i + " x " + multi + " = " + resultat);
        tableau[i] = [i + " x " + multi + " = " + resultat];
        console.log(tableau[i]);

}
}
console.log(TableMultiplication(multi));