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

    const examen = valeurs["question"];
    //console.log("examen.length", examen.length);

    for (let i = 0; i < examen.length; i++) {
      const element = examen[i];
      const id = element.id; //console.log("id", id)
      const card = document.createElement("div")
      card.classList.add("card", "my-2")

      const title = document.createElement("h5")
      title.textContent = element.question
      title.classList.add("card-title")
      //console.log(title)

      for (let j = 0, a = 1; j < examen.length; j++, a++) {
        const cardHeader = document.createElement("div")
        cardHeader.classList.add("card-header")
        console.log("a", a)
        const eltOptionsption = element.options[a].option
        cardHeader.textContent = eltOptionsption
        console.log(cardHeader)
      }

      const cardBody = document.createElement("div")
      cardBody.classList.add("card-body")

      document
        .getElementById("app")
        .append(title, cardHeader, card, cardBody);
    }

    //var elt = document.querySelector('h1')
    //console.log("elt", elt.classList);
    //console.log(elt.classList.contains('masthead-heading'));
    const titreTitle = valeurs.title;
    titreTitle.textContent = titreTitle;
    //console.log(elt, titreTitle);
    document
      .querySelector('h1')
      .append(titreTitle)

  })
  .catch(function (err) {
    // Une erreur est survenue
  });