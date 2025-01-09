//Nous récupérons tous les éléments dont nous aurons besoin pour manipuler le DOM
//initialisation de variables
let result = 0;
let total = document.querySelector(".total");
let btn_like = document.querySelectorAll(".fa-heart");
let btn_trash = document.querySelectorAll(".fa-trash-alt");
let card = document.querySelectorAll(".card-body");
// bag elements
let bag_i = 0;
let bagUnit = document.querySelector("#bag-unit").innerHTML.replace("$", "");
let bag_plus = document.getElementById("bag-plus");
let bag_minus = document.getElementById("bag-minus");
let bag_counter = document.getElementById("bag-counter");
// socks elements
let socks_i = 0;
let socksUnit = document
  .querySelector("#socks-unit")
  .innerHTML.replace("$", "");
let socks_plus = document.getElementById("socks-plus");
let socks_minus = document.getElementById("socks-minus");
let socks_counter = document.getElementById("socks-counter");
let socksTrash = document.getElementById("socksTrash");
// baskets elements
let baskets_i = 0;
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

// Création de la class CardOperation qui va nous permettre de réaliser les opérations souhaitées grace à ses méthodes
class CardOperation {
  constructor(iteration, counter, unit) {
    this.iteration = iteration;
    this.counter = counter;
    this.unit = unit;
  }
//Methode add() : Permet d'incrémenter le nombre d'article au clic sur une icône "Plus"
  add() {
    this.iteration++;
    this.counter.innerHTML = `${this.iteration}`;
    result += parseInt(this.unit);
    total.innerHTML = `${result} $`;
  }
//Methode del() : Permet de décrémenter le nombre d'article au clic sur une icône "Moins"
  del() {
    if (this.iteration > 0) {
      this.iteration--;
      this.counter.innerHTML = `${this.iteration}`;
      result -= parseInt(this.unit);
      total.innerHTML = `${result} $`;
    }
  }
//Methode toZero() : Permet de réinitialiser le nombre d'article à 0 au clic sur une icône "Trash"
  toZero(unit, counter){
    let withdraw = 0;
    withdraw = unit * counter.innerHTML;
    result -= withdraw;
    total.innerHTML = `${result} $`;
  }
}

const bag = new CardOperation(bag_i, bag_counter, bagUnit);
bag_plus.addEventListener("click", () => {
  bag.add();//invocation de la méthode add()
});
bag_minus.addEventListener("click", () => {
  bag.del();//invocation de la méthode del()
});
const socks = new CardOperation(socks_i, socks_counter, socksUnit);
socks_plus.addEventListener("click", () => {
  socks.add();//invocation de la méthode add()
});
socks_minus.addEventListener("click", () => {
  socks.del();//invocation de la méthode del()
});
const baskets = new CardOperation(baskets_i, baskets_counter, basketsUnit);
baskets_plus.addEventListener("click", () => {
  baskets.add();//invocation de la méthode add()
});
baskets_minus.addEventListener("click", () => {
  baskets.del();//invocation de la méthode del()
});
btn_trash.forEach((el) => {
  el.addEventListener("click", removeItem);
});

//Cette fonction permet de supprimer un article au clic sur une icône "Trash"
function removeItem() {
  //remover
  let item = this.offsetParent.parentElement;
  if (this.id == "basketsTrash") {
    baskets.toZero(basketsUnit, baskets_counter)//invocation de la méthode toZero()
    item.remove();
  } else if (this.id == "socksTrash") {
    socks.toZero(socksUnit, socks_counter)//invocation de la méthode toZero()
    item.remove();
  } else if (this.id == "bagTrash") {
    bag.toZero(bagUnit, bag_counter)//invocation de la méthode toZero()
    item.remove();
  }
}
