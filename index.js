let storagePrenom = "";
//console.log(storagePrenom),
localStorage.setItem('prenom', storagePrenom);
storagePrenom = localStorage.getItem('prenom');

document
  .getElementById("prenom")
  .addEventListener("input", function (prenom) {
    //console.log(e.target.value),
    document
      .getElementById("prenom")
      .innerText = prenom.target.value;
    storagePrenom = prenom.target.value;
    //console.log(storagePrenom);
    //console.log(window.location.href)
  });


const commencer = document.querySelector('.btn');

//const nonPassif = {
//  passif: false
//};

commencer.addEventListener('click', nonePassiveHandler)//, nonPassif);

function nonePassiveHandler(event) {
  event.preventDefault();
  // event.stopPropagation();
  //console.log("Cliqué !");
  //console.log(storagePrenom);

  if (storagePrenom === "") {
    return;
  }
  else if (storagePrenom != "") {
    //console.log(storagePrenom),
    localStorage.setItem('prenom', storagePrenom);
    var prenom = localStorage.getItem('prenom');
    //console.log('prenom', prenom);

    if (!prenom) {
      console.log("Oups c'est vide");
    }

    location.href = "Exams.html#page-top";
  }
}