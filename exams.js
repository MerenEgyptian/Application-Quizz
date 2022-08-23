var prenom = localStorage.getItem('prenom');
let storageUrl = "";
//localStorage.setItem('Id', storageId);
//storageId = localStorage.getItem('Id');


const promiseHydraTitle = fetch("https://qcm.alwayslearn.fr/api/examens?page=1");


promiseHydraTitle
    .then(function (resultat) {
        if (resultat.ok) {
            return resultat.json();
        }
    })

    .then(function (valeurs) {
        //console.log(valeurs);
        const hydra = valeurs["hydra:member"];
        //console.log(hydra);

        for (let i = 0; i < hydra.length; i++) {

            const element = hydra[i];
            const id = element.id

            const card = document.createElement("div")                          // Création élément "div"
            card.classList.add("card", "my-2")                                  // Ajout de classe composé "class"
            //console.log(card)

            const title = document.createElement("h5")                          // Création élément "h5"
            title.textContent = element.title                                   // Association de texte "title"
            title.classList.add("card-title")                                   // Ajout de classe "class"
            //console.log(title)

            const cardHeader = document.createElement("div")                    // Création élément "div"
            cardHeader.classList.add("card-header")                             // Ajout de classe "class"
            //cardHeader.textContent = `Examen n°: ${id}`                         // Association de texte
            //console.log(cardHeader)

            const cardBody = document.createElement("div")                      // Création élément "div"
            cardBody.classList.add("card-body")                                 // Ajout de classe "class"
            //console.log(cardBody)


            var a = document.createElement('a');
            var link = document.createTextNode(`Examen n°: ${id}`)              //(`Lien vers l'examen n° ${id}`);
            a.appendChild(link);
            //a.title = "Lien vers l'examen n°" + id;
            a.href = `quizz.html#page-top`;
            //document.getElementsByTagName('title').appendChild(a);
            a.addEventListener('click', function () {
                var storageUrl = `https://qcm.alwayslearn.fr/api/examens/${id}`;
                localStorage.setItem('storageUrl', storageUrl);
            })

            document
                .getElementById("app")
                //.appendChild(a)
                .append(title, cardHeader.appendChild(a), card, cardBody);
        }
    })
    .catch(function (err) {
        // Une erreur est survenue
    });

if (!prenom) {
    //console.log("La variable prenom est vide");
}