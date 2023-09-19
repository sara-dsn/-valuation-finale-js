var n=1
do{
    var age=window.prompt("Entrez l'âge n°"+n+" :");
    
    var mature= age>40;
    if (age<20)
    {
        console.log(" Le n°"+n+" est "+age+" de la catégorie : Jeune");
    document.write(" Le n°"+n+" est "+age+" de la catégorie : Jeune <br>");
    }
    else if (age>40)
    {
        console.log(" Le n°"+n+" est "+age+" de la catégorie : Mature");
        document.write(" Le n°"+n+" est "+age+" de la catégorie : Mature <br>");
    }
    
    else 
    {
        console.log(" Le n°"+n+" est "+age+" de la catégorie : Adulte");
        document.write(" Le n°"+n+" est "+age+" de la catégorie : Adulte <br>");
    }
   
   
    n++;
}while(age!=100)

