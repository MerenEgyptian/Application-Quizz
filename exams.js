var prenom = localStorage.getItem('prenom');
let storageUrl = "";
//localStorage.setItem('Id', storageId);
//storageId = localStorage.getItem('Id');


const promiseHydraTitle = fetch('https://qcm.alwayslearn.fr/api/examens?page=1');


promiseHydraTitle
    .then(function (resultat) {
        if (resultat.ok) {
            return resultat.json();
        }
    })

    .then(function (valeurs) {
        //console.log(valeurs);
        const hydra = valeurs['hydra:member'];
        //console.log(hydra);

        for (let i = 0; i < hydra.length; i++) {

            const element = hydra[i];
            const id = element.id

            const card = document.createElement('div')                          // Création élément "div"
            card.classList.add('card', 'my-2')                                  // Ajout de classe composé "class"
            //console.log(card)

            const title = document.createElement('h5')                          // Création élément "h5"
            title.setAttribute('id', 'card-button')                             // Ajout d'un id "id="
            title.classList.add('card-title')                                   // Ajout de classe "class"
            title.textContent = element.title                                   // Association de texte "title"


            const cardHeader = document.createElement('div')                    // Création élément "div"
            cardHeader.classList.add('card-header')                             // Ajout de classe "class"
            //cardHeader.textContent = `Examen n°: ${id}`                       // Association de texte


            const cardBody = document.createElement('div')                      // Création élément "div"
            cardBody.setAttribute('id', 'card-id')                              // Ajout d'un id "id="
            cardBody.classList.add('card-body')                                 // Ajout de classe "class"


            var a = document.createElement('a');                                // Création d'un élémnent "a""
            var link = document.createTextNode(`Examen n°: ${id}`)              //(`Lien vers l'examen n° ${id}`);
            //a.appendChild(link);console.log(link)

            a.title = "Lien vers l'examen n°" + id;

            a.href = `quizz.html#page-top`;

            a.addEventListener('click', function () {
                var storageUrl = `https://qcm.alwayslearn.fr/api/examens/${id}`;
                localStorage.setItem('storageUrl', storageUrl);



            })
            document.querySelectorAll('card-button')
            a.insertAdjacentHTML('beforeEnd', '<button type="submit" class="btn btn-primary">' + `Lien vers l\'examen n°" + ${id}` + '</button>');
            document
                .getElementById('app')
                //.appendChild(a)
                .append(title, cardHeader.appendChild(a), card, cardBody);

            document.getElementById('app')
                .style.cssText = 'width: 45%; margin-left: 6em; color: teal'

        }
    })
    .catch(function (err) {
        // Une erreur est survenue
    });

if (!prenom) {
    //console.log("La variable prenom est vide");
}