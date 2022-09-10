var nombreReponse = localStorage.getItem('nombreReponse');
var id = localStorage.getItem('id');
var reponse = "";


for (let i = 0; i <= id; i++) {
    reponse = localStorage.getItem(`reponse${i}`);

    for (let j = 2; j < nombreReponse; j++) {

        if (reponse != null) {

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body')

            const resultatReponse = document.createElement('h6');
            resultatReponse.textContent = reponse

            document.getElementById('app')
                .append(resultatReponse, cardBody);
        }
        else if (reponse == null) {

            break;

        }
    }

}

const cardHeader = document.createElement('div');
cardHeader.classList.add('card-body')

var scoreNote = localStorage.getItem('resultatScore');

const resultatScore = document.createElement('h4');
resultatScore.textContent = scoreNote;

const texteScore = document.createElement('h3');
texteScore.textContent = 'votre note est de: ' + resultatScore.textContent;

document.getElementById('app')
    .append(cardHeader, texteScore);

document.getElementById('app')
    .style.cssText = 'width: auto; margin-left: -1em; color: teal; font-size: .7em';


for (let z = 1; z <= id; z++) {

    localStorage.removeItem('id');
    localStorage.removeItem('storageUrl');
    localStorage.removeItem(`reponse${z}`);
    localStorage.removeItem('resultatScore');

}