var prenom = localStorage.getItem('prenom');
var storageUrl = localStorage.getItem('storageUrl');

const promiseExamen = fetch(storageUrl)
//console.log(promiseExamen)

promiseExamen
  .then(function (resultat) {
    if (resultat.ok) {
      return resultat.json();
    }
  })

  .then(function (valeurs) {
    console.log(valeurs);

    const examens = valeurs["question"];
    //console.log("examens.length", examens.length);


    const titreTitle = valeurs.title;
    titreTitle.textContent = titreTitle;
    //console.log(elt, titreTitle);
    document
      .querySelector('h1')
      .append(titreTitle)


    for (let i = 0; i < examens.length; i++) {

      const element = examens[i];

      const title = document.createElement("h5")
      title.textContent = element.question
      title.classList.add("card-title")
      //console.log(title)

      const cardBody = document.createElement("div")
      cardBody.classList.add("card-body")

      document
        .getElementById("app")
        .append(title, cardBody);


      for (let j = 1; j < examens.length; j++) {
        const cardHeader = document.createElement("div")
        cardHeader.classList.add("card-header")
        cardHeader.textContent = element.options[j].option
        console.log(cardHeader)

        document
          .getElementById("app")
          .append(cardHeader);

      }
    }
  })

  .catch(function (err) {
    // Une erreur est survenue
  });