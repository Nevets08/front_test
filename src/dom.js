// Changez la couleur de fond du body en #992323
// Ne modifiez pas le code HTML de la page directement
// votre code
const body = document.querySelector('body');
body.style.backgroundColor = '#992323';

// Changez la couleur du texte du body en #fff
// votre code
body.style.color = '#fff';
// Supprimez la ligne suivante
// Récupérez l'élément div "workspace" par son id
// Enregistrez-le dans une variable workspace
// votre code
const workspace = document.getElementById('workspace');
// Affichez dans la console le nombre d'éléments enfants que contient
// l'élément workspace
// votre code
console.log(workspace.childNodes);
// Récupérez le premier paragraphe contenu dans workspace
// vous ne devez pas ajouter d'id
// Supprimez la ligne suivante
// Affectez le résultat à la variable p
// votre code
const p = workspace.childNodes[1];
console.log(p);

// Ajoutez le code suivant : "<h3>Hello JS world!</h3>"
// comme enfant de workspace
// Cet élément doit être ajouté avant le premier paragraphe
// contenu dans workspace
// votre code
const newTitle = document.createElement('h3');
newTitle.textContent = 'Hello JS world!';
workspace.insertBefore(newTitle, p);

console.log(workspace)

const initTime = 10;

// Complétez la fonction runChrono pour qu'elle affiche un décompte
// de n à 0, dans une div (id: counter), placée sous la balise h3 précédemment ajoutée
// Vous ne devez pas toucher au code HTML, et le h3 doit continuer à s'afficher
const newDiv = document.createElement('div');

function runChrono(valueCount) {
  newDiv.setAttribute('id', 'counter');
  newDiv.innerHTML = valueCount;
  workspace.insertBefore(newDiv, p);

  interval = setInterval(() => {
    valueCount--;
    newDiv.innerHTML = valueCount;

    if (valueCount === 0) {
      clearInterval(interval);
    }
  }, 500);
}

console.log(runChrono(10));

// Ajoutez à l'élément workspace un bouton permettant de déclencher
// le décompte lors d'un clic, avec le texte "Start countdown"
// Le bouton doit être inséré après l'élément h3
// Vous ne devez pas utiliser l'élément p pour insérer le bouton
// Le décompte est réinitialisé lorsque l'utilisateur clique une
// nouvelle fois sur le bouton
// votre code

const newButton = document.createElement('button');
newButton.innerHTML = 'Start countdown';
workspace.insertBefore(newButton, newDiv);

newButton.addEventListener('click', () => {
  
});