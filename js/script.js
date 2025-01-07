//Nous récupérons tous les éléments ayant comme class "fa-heart", qui représente ici les icones en forme de coeur.
//initialisation de variables
let bag_i = 0;
let baskets_i = 0;
let socks_i = 0;
let result = 0;
let total = document.querySelector(".total");
let btn_like = document.querySelectorAll(".fa-heart");
let card = document.querySelectorAll(".card-body");
// bag elements
let bagUnit = document.querySelector("#bag-unit").innerHTML.replace("$", "");
let bag_plus = document.getElementById("bag-plus");
let bag_minus = document.getElementById("bag-minus");
let bag_counter = document.getElementById("bag-counter");
let bagTrash = document.getElementById("bagTrash");
// socks elements
let socksUnit = document
  .querySelector("#socks-unit")
  .innerHTML.replace("$", "");
let socks_plus = document.getElementById("socks-plus");
let socks_minus = document.getElementById("socks-minus");
let socks_counter = document.getElementById("socks-counter");
let socksTrash = document.getElementById("socksTrash");
// baskets elements
let basketsUnit = document
  .querySelector("#baskets-unit")
  .innerHTML.replace("$", "");
let baskets_plus = document.getElementById("baskets-plus");
let baskets_minus = document.getElementById("baskets-minus");
let baskets_counter = document.getElementById("baskets-counter");
let basketsTrash = document.getElementById("basketsTrash");

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

class CardOperation {
  constructor(iteration, counter, unit) {
    this.iteration = iteration;
    this.counter = counter;
    this.unit = unit;
  }

  add() {
    this.iteration++;
    this.counter.innerHTML = `${this.iteration}`;
    result += parseInt(this.unit);
    total.innerHTML = `${result} $`;
  }
  remove() {
    if (this.iteration > 0) {
      this.iteration--;
      this.counter.innerHTML = `${this.iteration}`;
      result -= parseInt(this.unit);
      total.innerHTML = `${result} $`;
    }
  }
}

const bag = new CardOperation(bag_i, bag_counter, bagUnit);
bag_plus.addEventListener("click", () => {
  bag.add();
});
bag_minus.addEventListener("click", () => {
  bag.remove();
});
const socks = new CardOperation(socks_i, socks_counter, socksUnit);
socks_plus.addEventListener("click", () => {
  socks.add();
});
socks_minus.addEventListener("click", () => {
  socks.remove();
});
const baskets = new CardOperation(baskets_i, baskets_counter, basketsUnit);
baskets_plus.addEventListener("click", () => {
  baskets.add();
});
baskets_minus.addEventListener("click", () => {
  baskets.remove();
});