document.getElementById('formulaire_contact').addEventListener("submit", function(e)
{
    var rnom = /(^[A-Z]+[a-zA-Zéèêëôœîïûüàáâæç-\s]+$)/;
    var remail = /(^[\w\.-]+@[a-z]+[\.]{1}[a-z]{2,3}$)/;

    var nom = document.getElementById("Nom").value;
    var email = document.getElementById("Email").value;
    var objet = document.getElementById("Objet").value;
    var message = document.getElementById("Message").value;

    if (!rnom.test(nom))
    {remail
        document.getElementById("erreurnom").innerHTML = "Veuillez renseigner votre nom";
        document.getElementById("erreurnom").style.color = 'red';
        e.preventDefault();
    }
    else
    {
        document.getElementById("erreurnom").innerHTML = "Validé !";
        document.getElementById("erreurnom").style.color = 'rgb(0, 182, 0)';
    }

    if (!remail.test(email))
    {
        document.getElementById("erreuremail").innerHTML = "Veuillez renseigner votre email";
        document.getElementById("erreuremail").style.color = 'red';
        e.preventDefault();
    }
    else
    {
        document.getElementById("erreuremail").innerHTML = "Validé !";
        document.getElementById("erreuremail").style.color = 'rgb(0, 182, 0)';
    }

    if (!objet)
    {
        document.getElementById("erreurobjet").innerHTML = "Veuillez renseigner votre objet";
        document.getElementById("erreurobjet").style.color = 'red';
        e.preventDefault();
    }
    else
    {
        document.getElementById("erreurobjet").innerHTML = "Validé !";
        document.getElementById("erreurobjet").style.color = 'rgb(0, 182, 0)';
    }

    if (!message)
    {
        document.getElementById("erreurmessage").innerHTML = "Veuillez écrire votre message";
        document.getElementById("erreurmessage").style.color = 'red';
        e.preventDefault();
    }
    else
    {
        document.getElementById("erreurmessage").innerHTML = "Validé !";
        document.getElementById("erreurmessage").style.color = 'rgb(0, 182, 0)';
    }
});