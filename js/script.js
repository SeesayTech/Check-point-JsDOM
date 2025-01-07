//Nous récupérons tous les éléments ayant comme class "fa-heart", qui représente ici les icones en forme de coeur.
//initialisation de variables
let bag_i = 0;
let baskets_i = 0;
let socks_i = 0;
let result = 0;
let total = document.querySelector(".total");
let btn_like = document.querySelectorAll(".fa-heart");
// bag elements
let bagUnit = document.querySelector("#bag-unit").innerHTML.replace("$", "");
let bag_plus = document.getElementById("bag-plus");
let bag_minus = document.getElementById("bag-minus");
let bag_counter = document.getElementById("bag-counter");
// socks elements
let socksUnit = document
  .querySelector("#socks-unit")
  .innerHTML.replace("$", "");
let socks_plus = document.getElementById("socks-plus");
let socks_minus = document.getElementById("socks-minus");
let socks_counter = document.getElementById("socks-counter");
// baskets elements
let basketsUnit = document
  .querySelector("#baskets-unit")
  .innerHTML.replace("$", "");
let baskets_plus = document.getElementById("baskets-plus");
let baskets_minus = document.getElementById("baskets-minus");
let baskets_counter = document.getElementById("baskets-counter");

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
//Cette fonction permet de changer/restorer la couleur des icônes en forme de coeur
function colorChanger(e) {
  e.preventDefault();
  if (!this.classList.contains("red")) {
    this.classList.add("red");
  } else {
    this.classList.remove("red");
  }
}
//Cette fonction permet d'augmenter le compteur de la carte "bag" au clic et de màj le prix global.

bag_plus.addEventListener("click", () => {
  bag_i++;
  bag_counter.innerHTML = `${bag_i}`;
  result += parseInt(bagUnit);
  total.innerHTML = `${result} $`;
});
socks_plus.addEventListener("click", () => {
  socks_i++;
  socks_counter.innerHTML = `${socks_i}`;
  result += parseInt(socksUnit);
  total.innerHTML = `${result} $`;
});
baskets_plus.addEventListener("click", () => {
  baskets_i++;
  baskets_counter.innerHTML = `${baskets_i}`;
  result += parseInt(basketsUnit);
  total.innerHTML = `${result} $`;
});

//Cette fonction permet de diminuer le compteur de la carte "bag" au clic et de màj le prix global.
bag_minus.addEventListener("click", () => {
  if (bag_i > 0) {
    bag_i--;
    bag_counter.innerHTML = `${bag_i}`;
    result -= parseInt(bagUnit);
    total.innerHTML = `${result} $`;
  }
});
socks_minus.addEventListener("click", () => {
  if (socks_i > 0) {
    socks_i--;
    socks_counter.innerHTML = `${socks_i}`;
    result -= parseInt(socksUnit);
    total.innerHTML = `${result} $`;
  }
});
baskets_minus.addEventListener("click", () => {
  if (baskets_i > 0) {
    baskets_i--;
    baskets_counter.innerHTML = `${baskets_i}`;
    result -= parseInt(basketsUnit);
    total.innerHTML = `${result} $`;
  }
});

