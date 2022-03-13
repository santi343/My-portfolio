//const numeros =
let leerMas = document.getElementById("leer-mas");
//let leerMas = document.getquerySelector("#leer-mas")
let card = document.getElementById("card");
console.log(leerMas)
leerMas.addEventListener("click", function () {
  console.log("hola");
  card.style.transform = " rotateY(180deg)";
});
leerMas.addEventListener("blur", function () {
  setTimeout(() => {
    card.style.transform = " rotateY(0deg)";
  }, 2000);
});

/*.card__father:hover .card {*/
/*transform: rotateY(180deg);*/
/*}*/
