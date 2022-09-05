var prenom = localStorage.getItem('prenom');
var storageUrl = localStorage.getItem('storageUrl');

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

      var nombreReponse = Object.keys(element.options).length;                 //


      for (let j = 1; j <= nombreReponse; j++) {

        const cardBody = document.createElement('div')
        cardBody.classList.add('card-body')

        var li = document.createElement('li')
        ul.appendChild(li)

        cardBody.textContent = element.options[j].option
        li.innerText = li.innerText + cardBody.textContent


        const input = document.createElement("input");
        li.append(input);

        input.setAttribute("type", "radio");
        input.setAttribute("name", `reponse${id}`); //console.log(id);         //
        input.setAttribute("value", element.options[j].isCorrect);
        input.setAttribute("style", "padding-right: 10em");

        input.value = element.options[j].isCorrect;
        //console.log(input.value);


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

    var valeurInput = document.querySelector('input[name=' + `reponse${id}` + ']:checked').value;
    console.log(valeurInput)

    var form = document.querySelector('form');
    //var log = document.querySelector('#app');

    form.addEventListener('submit', function (event) {
      var data = new FormData(form);
      var output = "";
      for (const entry of data) {
        output = entry[0] + "=" + entry[1] + "\r"; console.log(output)
      };
      console.log = output;
      event.preventDefault();
    }, false);

  })

  .catch(function (err) {
    // Une erreur est survenue
  });