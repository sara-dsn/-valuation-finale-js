var envoyer = document.getElementById("envoi");
envoyer.addEventListener("click", function(){
    f_valid();
});
function f_valid() {

    var prenom = document.getElementById("prenom").value;
    var p_manquant = document.getElementById("p_manquant");
    var p_validation=/^[a-zA-ZéèêëËÊÉÈÎÏîï][a-zéèëêîïâç]+([-'\[a-zA-ZéèêëËÊÉÈÎÏîï][a-zéèëêîïâç]+])$/;

    var nom = document.getElementById("nom").value;
    var n_manquant = document.getElementById("n_manquant");
    var n_validation=/^[a-zA-ZéèêëËÊÉÈÎÏîï][a-zéèëêîïâç]+([-'\[a-zA-ZéèêëËÊÉÈÎÏîï][a-zéèëêîïâç]+])$/;

    var cp = document.getElementById("cp").value;
    var cp_manquant = document.getElementById("cp_manquant");
    var cp_validation=/^0[0-9]{9}$/;


    var mail = document.getElementById("email").value;
    var e_manquant = document.getElementById("e_manquant");
    var e_validation=/^[a-zA-ZéèêëËÊÉÈÎÏîï][a-zéèëêîïâç]([-'\[a-zA-ZéèêëËÊÉÈÎÏîï][a-zéèëêîïâç]+])+@+[[a-zA-ZéèêëËÊÉÈÎÏîï][a-zéèëêîïâç]+].[a-zéèëêîïâç]{2}$/;

    var date = document.getElementById("date").value;
    var d_manquant = document.getElementById("d_manquant");
    var d_validation= /^[0-9][0-9]?\/[0-9][0-9]?\/[0-9][0-9]([0-9][0-9])?$/;

    var question = document.getElementById("question").value;
    var q_manquant = document.getElementById("q_manquant");
    var q_validation=/^[a-zA-ZéèêëËÊÉÈÎÏîï][a-zéèëêîïâç]+([-'\[a-zA-ZéèêëËÊÉÈÎÏîï][a-zéèëêîïâç]+])$/;

    var femme=document.querySelector('input[name="femme"][value="femme"]');
    var homme=document.querySelector('input[name="homme"][value="homme"]');
    var g_manquant=document.getElementById("g_manquant");

    var ok=document.getElementById("ok");
    var o_manquant=document.getElementById("o_manquant");

    var sujet=document.getElementById("sujet");
    var s_manquant=document.getElementById("s_manquant");

    if(sujet.value=="rien"){
     s_manquant.textContent="veuillez séléctionner un sujet s'il vous plaît.";
     s_manquant.style.color="red";
    }

  if (!femme.checked && !homme.checked)
  {
    g_manquant.textContent="Veuille séléctionner votre genre s'il vous plaît.";
    g_manquant.style.color="red";
  }
  else{
    g_manquant.textContent="";
  }

    if (!nom.checkValidity) {
        n_manquant.textContent = "Entrez votre nom s'il vous plaît.";
        n_manquant.style.color = "red";
    }

    else{
        n_manquant.textContent="";
      }

    if (!prenom.checkValidity) {
        p_manquant.textContent = "Entrez votre prénom s'il vous plaît.";
        p_manquant.style.color = "red";
    }
    else{
        p_manquant.textContent="";
      }
    if (!question.checkValidity) {
        q_manquant.textContent = "Entrez votre question s'il vous plaît.";
        q_manquant.style.color = "red";
    }
    else{
        q_manquant.textContent="";
      }
    
    if (!date.checkValidity) {
        d_manquant.textContent = "Entrez votre date de naissance s'il vous plaît.";
        d_manquant.style.color = "red";
    }
    else{
        d_manquant.textContent="";
      }
    if (!cp.checkValidity) {
        cp_manquant.textContent = "Entrez votre code postal s'il vous plaît.";
        cp_manquant.style.color = "red";
    }
    else{
        cp_manquant.textContent="";
      }
   
    if (!mail.checkvalidity) {
        e_manquant.textContent = "Entrez votre e-mail s'il vous plaît.";
        e_manquant.style.color = "red";
    }
    else{
        e_manquant.textContent="";
      }
   
    if (!ok.checked){
        o_manquant.textContent="Veuillez cochez cette case s'il vous plaît. ";
        o_manquant.style.color="red";
    }
    else{
        o_manquant.textContent="";
      }
};