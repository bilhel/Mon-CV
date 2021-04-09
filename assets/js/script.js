document.addEventListener("scroll", function(){
    let header = document.querySelector("nav")
    header.classList.toggle("sticky", window.scrollY > 0);
});

document.getElementById('formulaire_contact').addEventListener("submit", function(e)
{
    let rnom = /(^[A-Z]+[a-zA-Zéèêëôœîïûüàáâæç-\s]+$)/;
    let remail = /(^[\w\.-]+@[a-z]+[\.]{1}[a-z]{2,3}$)/;

    let nom = document.getElementById("nom").value;
    let email = document.getElementById("email").value;
    let objet = document.getElementById("objet").value;
    let message = document.getElementById("message").value;

    if (!rnom.test(nom))
    {remail
        document.getElementById("erreurnom").innerHTML = "Veuillez renseigner votre nom";
        document.getElementById("erreurnom").style.color = 'red';
        e.preventDefault();
    }
    else
    {
        document.getElementById("erreurnom").innerHTML = "Valide !";
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
        document.getElementById("erreuremail").innerHTML = "Valide !";
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
        document.getElementById("erreurobjet").innerHTML = "Valide !";
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
        document.getElementById("erreurmessage").innerHTML = "Valide !";
        document.getElementById("erreurmessage").style.color = 'rgb(0, 182, 0)';
    }
});