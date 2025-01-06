//Nous récupérons tous les éléments ayant comme class "fa-heart", qui représente ici les icones en forme de coeur.
let btn_like = document.querySelectorAll(".fa-heart");
let plus = document.getElementById('plus')

console.log(btn_like);

/*
Pour avoir utilisé querySelectorAll, nous aurons une liste d'élément sous forme d'objet.
Nous utilisons une boucle pour le parcourir et récupérer les valeur.
Sur lesquelles nous avons rattaché un événement au clic qui est celui de changer la couleur
de l'icone qui sera cliqué.(Grace à la fonction "colorChanger()")
*/
for (i = 0; i < btn_like.length; i++) {
  el = btn_like[i];
  el.addEventListener("click", colorChanger);
}

function colorChanger(e) {
    e.preventDefault();
  if (!this.classList.contains("red")) this.classList.add("red");
  else this.classList.remove("red");
}


plus.onclick= ()=>{
    console.log('+')
}
  function yokk(){
    counter = 0
    this.innerHTML = counter++
  }