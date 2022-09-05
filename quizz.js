var prenom = localStorage.getItem('prenom');
var storageUrl = localStorage.getItem('storageUrl');
var storageReponse = ""

const promiseExamen = fetch(storageUrl)


promiseExamen
  .then(function (resultat) {
    if (resultat.ok) {
      return resultat.json();
    }
  })

  .then(function (valeurs) {

    const examens = valeurs['question'];                                       // Récupération des données au format JSON et attribution à une constante

    const titreExamen = valeurs.title;
    titreExamen.textContent = titreExamen;


    document
      .querySelector('h1')
      .append(titreExamen)

    var formRadio = document.createElement('form');                            // Création de l'élément form
    formRadio.setAttribute('action', " ");

    document.getElementById('app')
      .appendChild(formRadio);


    for (let i = 0; i < examens.length; i++) {

      const element = examens[i];
      var id = element.id;

      const title = document.createElement('h5');
      title.textContent = element.question;
      title.classList.add("card-title");

      const cardHeader = document.createElement('div');
      cardHeader.setAttribute('id', 'card-button');
      cardHeader.classList.add('card-header');

      var ul = document.createElement('ul');

      formRadio.append(title, cardHeader, ul);

      var nombreReponse = Object.keys(element.options).length;                 // Recherche nombre de réponses par questions


      for (let j = 1; j <= nombreReponse; j++) {

        const cardBody = document.createElement('div')
        cardBody.classList.add('card-body')

        var li = document.createElement('li')
        ul.appendChild(li)

        cardBody.textContent = element.options[j].option
        li.innerText = li.innerText + cardBody.textContent                     // Affectation à l'élémnet 'li' des réponses texte


        const input = document.createElement("input");
        li.append(input);

        input.setAttribute("type", "radio");                                   // Ajoute un nouvel attribut "type" à l'élément "input"
        input.setAttribute("name", `reponse${id}`); //console.log(id);         // Ajoute un nouvel attribut "name" à l'élément "input"
        input.setAttribute("value", element.options[j].isCorrect);             // Ajoute un nouvel attribut "value" à l'élément "input"
        input.setAttribute("style", "padding-right: 10em");                    // Ajoute un nouvel attribut "style" à l'élément "input"

        //input.value = element.options[j].isCorrect;
        //console.log(input.value);

        var form = document.querySelector('form');

        form.addEventListener('click', function (event) {

          var data = new FormData(form);
          var output = "";

          for (const entry of data) {

            //output = entry[0] + " = " + entry[1] + "\r";

            storageReponse = entry[1];
            localStorage.setItem(entry[0], storageReponse);
          };

        }, false);

        //formRadio.appendChild(hiddenField);

        //li.insertAdjacentHTML('afterBegin', '<input name="reponse" type="radio" value=' + `${j}` + '>');

        //document.getElementsByClassName("container")[i]
        //.style.cssText = "width: 70%; margin-left: 12.5em";


        document.getElementsByClassName('card-header')[i]
          .style.marginBottom = '1em';

        //document.getElementById('.app')
        //.style.cssText = 'width: auto; margin-left: 0.5em; color: teal; font-size: .7em';

        //document.querySelectorAll('#card-button > ul.card-body > li')
        //li.style.cssText = 'list-style-type: none; padding-bottom: 1em'
        //input.style.cssText = 'float: left; margin-top: .15em'
        //formRadio.style.cssText = 'padding-right: 5em'

      }
    }
  })

  .catch(function (err) {
    // Une erreur est survenue
  });
