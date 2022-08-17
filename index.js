let localStoragePrenom = "";
//console.log(localStoragePrenom),
localStorage.setItem('prenom', localStoragePrenom);
localStoragePrenom = localStorage.getItem('prenom');

document
  .getElementById("prenom")
  .addEventListener("input", function (prenom) {
    //console.log(e.target.value),
    document
      .getElementById("prenom")
      .innerText = prenom.target.value;
    localStoragePrenom = prenom.target.value;
    //console.log(localStoragePrenom);
    //console.log(window.location.href)
  });


const commencer = document.querySelector('.btn');

const nonPassif = {
  passif: false
};

commencer.addEventListener('click', nonePassiveHandler, nonPassif);

function nonePassiveHandler(event) {
  event.preventDefault();
  // event.stopPropagation();
  //console.log("Cliqué !");
  //console.log(localStoragePrenom);

  if (localStoragePrenom === "") {
    return;
  }
  else if (localStoragePrenom != "") {
    //console.log(localStoragePrenom),
    localStorage.setItem('prenom', localStoragePrenom);
    var prenom = localStorage.getItem('prenom');
    //console.log('prenom', prenom);
    location.href = "file:///C:/Users/Meren/Desktop/Eval-main/quizz.html";
  }
}