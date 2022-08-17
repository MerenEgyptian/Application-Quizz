
const promiseHydraTitle = fetch("https://qcm.alwayslearn.fr/api/examens?page=1");

promiseHydraTitle
    .then(function (resultat) {
        if (resultat.ok) {
            return resultat.json();
        }
    })

    .then(function (valeurs) {
        //console.log(valeurs);
        const hydraItems = valeurs["hydra:totalItems"];
        //console.log(hydraItems);

        for (let i = 0; i < hydraItems; i++) {
            const hydraTitle = valeurs["hydra:member"][i].title;
            console.log(hydraTitle),
                document
                    .getElementById("app")
                    .innerText = valeurs["hydra:member"][i].title + ", " +
                    valeurs["hydra:member"][i + 1].title + ", " +
                valeurs["hydra:member"][i + 2].title;
        }
    })
    .catch(function (err) {
        // Une erreur est survenue
    });