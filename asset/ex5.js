var envoyer = document.getElementById("envoi");
envoyer.addEventListener("click", function(){
    f_valid();
});
function f_valid() {

    var prenom = document.getElementById("prenom").value;
    var p_manquant = document.getElementById("p_manquant");
    var p_validation=/^[a-z]+$/;

   

    var cp = document.getElementById("cp").value;
    var cp_manquant = document.getElementById("cp_manquant");
    var cp_validation=/^[0-9]{5}$/;


    var mail = document.getElementById("email").value;
    var e_manquant = document.getElementById("e_manquant");  
    
    var e_validation=/^[a-z]+[@a-z]+[.a-z]+$/;

    var date = document.getElementById("date").value;
    var d_manquant = document.getElementById("d_manquant");
    var d_validation=/^[0-9]+[-0-9]+[-0-9]+$/;

    var question = document.getElementById("question").value;
    var q_manquant = document.getElementById("q_manquant");
    var q_validation=/^[a-z]+$/;

    var femme=document.querySelector('input[name="femme"][value="femme"]');
    var homme=document.querySelector('input[name="homme"][value="homme"]');
    var g_manquant=document.getElementById("g_manquant");

    var sujet=document.getElementById("sujet");
    var s_manquant=document.getElementById("s_manquant");

    var ok=document.getElementById("ok");
    var o_manquant=document.getElementById("o_manquant");

    var nom = document.getElementById("nom").value;
    var n_manquant = document.getElementById("n_manquant");
    var n_validation=/^[a-z]+$/;


  
  if (n_validation.test(nom)==false) {
    n_manquant.textContent = "Entrez votre nom (seulement en  minuscules)s'il vous plaît.";
    n_manquant.style.color = "red";
}

  else {
    n_manquant.textContent ="";
};
    
    if (p_validation.test(prenom)==false) {   
        p_manquant.textContent = "Entrez votre prénom (seulement en minuscules)s'il vous plaît.";
        p_manquant.style.color = "red";
    }
    else {
        p_manquant.textContent ="";
    };
    
   
    if (d_validation.test(date)==false) {
        alert(date);
        d_manquant.textContent = "Entrez votre date de naissance s'il vous plaît.";
        d_manquant.style.color = "red";
    }
    else {
        d_manquant.textContent ="";
    };
    
   
    if (cp_validation.test(cp)==false) {
        cp_manquant.textContent = "Entrez votre code postal s'il vous plaît.";
        cp_manquant.style.color = "red";
    }
    else {
        cp_manquant.textContent ="";
    };
    
    if (e_validation.test(mail)==false) {
        e_manquant.textContent = "Entrez votre e-mail (seulement en minuscules) s'il vous plaît.";
        e_manquant.style.color = "red";
    }
    else {
        e_manquant.textContent ="";
    };
    
    if (!femme.checked && !homme.checked)
    {
      g_manquant.textContent="Veuille séléctionner votre genre s'il vous plaît.";
      g_manquant.style.color="red";
    }
    else {
      g_manquant.textContent="";
    };


    if(sujet.value=="rien"){
        s_manquant.textContent="veuillez séléctionner un sujet (seulement en minuscules) s'il vous plaît.";
        s_manquant.style.color="red";
       }
       else {
           s_manquant.textContent="";
       };

       if (q_validation.test(question)==false) {
        q_manquant.textContent = "Entrez votre question(seulement en minuscules) s'il vous plaît.";
   
        q_manquant.style.color = "red";
    }
    else {
        q_manquant.textContent="";
      };
    
    if (!ok.checked){
        o_manquant.textContent="Veuillez cochez cette case s'il vous plaît. ";
        o_manquant.style.color="red";
    }
     else {
         o_manquant.textContent ="";
     };
    
    
};
