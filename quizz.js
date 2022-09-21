var storageUrl = localStorage.getItem('storageUrl');


const promiseExamen = fetch(storageUrl);

promiseExamen
  .then(function (resultat) {
    if (resultat.ok) {
      return resultat.json();
    }
  })

  .then(function (valeurs) {

    const examens = valeurs['question'];                                                                          // Récupération des données au format JSON et attribution à une constante

    const titreExamen = valeurs.title;
    titreExamen.textContent = titreExamen;


    document
      .querySelector('h1')
      .append(titreExamen);



    var formRadio = document.createElement('form');                                                               // Création de l'élément form
    formRadio.setAttribute('action', " ");

    document.getElementById('app')
    .classList.add("reponses")
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



      var nombreReponse = Object.keys(element.options).length;                                                    // Recherche nombre de réponses par questions

      for (let j = 1; j <= nombreReponse; j++) {

        const cardBody = document.createElement('div');

        var li = document.createElement('li');

        ul.appendChild(li);

        //console.log(cardBody.textContent)

        cardBody.textContent = element.options[j].option;
        //li.innerText = li.innerText + cardBody.textContent;                                                     // Affectation à l'élémnet 'li' des réponses texte

        const p = document.createElement("p");
        p.textContent = cardBody.textContent;
        li.appendChild(p)

        const input = document.createElement("input");
        li.append(input);

        input.setAttribute("type", "radio");                                                                      // Ajoute un nouvel attribut "type" à l'élément "input"
        input.setAttribute("name", `reponse${id}`);                                                               // Ajoute un nouvel attribut "name" à l'élément "input"
        input.setAttribute("value", element.options[j].option + " " + element.options[j].isCorrect);              // Ajoute un nouvel attribut "value" à l'élément "input"
        input.setAttribute("style", "padding-right: 10em");                                                       // Ajoute un nouvel attribut "style" à l'élément "input"


        var form = document.querySelector('form');

        form.addEventListener('click', function () {

          var data = new FormData(form);
          var outputName = "";
          var outputBoolean = "";
          var outputReponseTexte = "";
          var tampon = "";
          var score = 0;

          for (const entry of data) {
            tampon = entry[1];
            outputName = entry[0];
            outputBoolean = tampon; outputBoolean = tampon.slice(-5);
            outputReponseTexte = tampon; outputReponseTexte = tampon.slice(0, -5);

            if (outputBoolean == "false") {
              outputReponseTexte = outputReponseTexte + "..............................." + "Mauvaise réponse";
            }

            else if (outputBoolean == " true") {
              outputReponseTexte = outputReponseTexte + "..............................." + "Bonne réponse";
              score = score + 5;
            }

            localStorage.setItem(outputName, outputReponseTexte);
            resultaScore = score + ' sur 20';
            localStorage.setItem("resultatScore", resultaScore);
            localStorage.setItem("nombreReponse", nombreReponse);
            localStorage.setItem("id", id);

          };
        }, false);


        //document.getElementById('app')
        //.style.cssText = 'width: auto; margin-left: -1em; color: teal; font-size: .7em';

        //document.getElementsByClassName("container")[i]
        //.style.cssText = "width: 70%; margin-left: 12.5em";

        //document.getElementsByClassName('card-header')[i]                                                         // Ajout d'une marge
        // .style.marginBottom = '1em';

        //let h5 = document.querySelectorAll("h5")[i];
        //h5.style.cssText = 'font-size: 1.4em; margin: 0 1.5em 0 1.5em';

        //document.querySelectorAll('#card-button > ul.card-body > li');
        //li.style.cssText = 'list-style-type: none; padding-bottom: 1em';
        //input.style.cssText = 'float: left; margin: -2.8em 0 0 -0.5em';

        //document.querySelectorAll('p')[i]
        //p.style.cssText = 'margin-left: 1.5em';

      }
    }

    var a = document.createElement('a');
    a.title = "Envoyer";
    a.href = `result.html#page-top`;
    a.addEventListener('click', function () {

    })

    document.getElementById('app'),
      a.insertAdjacentHTML('beforeEnd', '<button type="submit" class="btn btn-primary">Envoyer</button>')
    //a.style.cssText = 'margin: 5em 0 0 11em';

    document
      .getElementById('app')
      .appendChild(a);
  })

  .catch(function (err) {
    // Une erreur est survenue
  });