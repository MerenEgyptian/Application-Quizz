var id = localStorage.getItem('id');
var reponse = "";


for (let i = 1; i <= id; i++) {

    reponse = localStorage.getItem(`reponse${i}`);

    const resultatReponse = document.createElement('h6');
    resultatReponse.textContent = reponse;

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body')

    document.getElementById('app')
        .append(cardBody)
    document.getElementById('app')
        .appendChild(resultatReponse)

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


for (let z = 1; z <= id; z++) {

    localStorage.removeItem('id');
    localStorage.removeItem('storageUrl');
    localStorage.removeItem(`reponse${z}`);
    localStorage.removeItem('resultatScore');

}