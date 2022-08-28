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

    const examens = valeurs['question'];

    const titreExamen = valeurs.title;
    titreExamen.textContent = titreExamen;

    document
      .querySelector('h1')
      .append(titreExamen)


    for (let i = 0; i < examens.length; i++) {

      const element = examens[i];

      const title = document.createElement('h5')
      title.textContent = element.question
      title.classList.add("card-title")

      const cardHeader = document.createElement('div')
      cardHeader.classList.add('card-header')

      var ul = document.createElement('ul')


      document
        .getElementById('app')
        .append(title, cardHeader, ul);


      for (let j = 1; j < examens.length; j++) {
        const cardBody = document.createElement('div')
        cardBody.classList.add('card-body')
        var li = document.createElement('li')
        ul.appendChild(li)
        cardBody.textContent = element.options[j].option
        li.innerText = li.innerText + cardBody.textContent
        console.log(cardBody)

        //document.getElementsByClassName("container")[i]
          //.style.cssText = "width: 70%; margin-left: 12.5em"

        document.getElementsByClassName('card-header')[i]
          .style.marginBottom = '1em'

        document.getElementById('app')
          .style.cssText = 'width: 45%; margin-left: 6em; color: teal'

      }
    }
  })

  .catch(function (err) {
    // Une erreur est survenue
  });