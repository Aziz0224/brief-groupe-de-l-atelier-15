const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // récupérer les valeurs des champs du formulaire
  const nom = document.getElementById('nom').value;
  const email = document.getElementById('email').value;

  // validation des champs
  if (!nom || !email) {
 alert('veillez remplir les champs')
} else{
    alert("Demande envoyée! A bientôt dans votre espace digital!");
    form.submit();
}

});