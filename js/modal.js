//card-presupuesto
let cardPresupuesto = document.getElementById("card-presupuesto");
let leerMasPresupuesto = document.getElementById("leer-mas-presupuesto");
let volverPresupuesto = document.getElementById("volver-presupuesto")

//card-ahorcado
let cardAhorcado = document.getElementById("card-ahorcado");
let leerMasAhorcado = document.getElementById("leer-mas-ahorcado");
let volverAhorcado = document.getElementById("volver-ahorcado")

//card-encriptador
let cardEncriptador = document.getElementById("card-encriptador");
let leerMasEncriptador = document.getElementById("leer-mas-encriptador");
let volverEncriptador = document.getElementById("volver-encriptador")

//card-parque
let cardParque = document.getElementById("card-parque");
let leerMasParque = document.getElementById("leer-mas-parque");
let volverParque = document.getElementById("volver-parque")

//card-hadou-tech
let cardHadou = document.getElementById("card-hadou");
let leerMasHadou = document.getElementById("leer-mas-hadou");
let volverHadou = document.getElementById("volver-hadou")




//card-presupuesto
leerMasPresupuesto.addEventListener("click", function () {
  cardPresupuesto.style.transform = " rotateY(180deg)";
});
leerMasPresupuesto.addEventListener("blur", function () {
  console.log("desde presupuesto")
  setTimeout(() => {
    cardPresupuesto.style.transform = " rotateY(0deg)";
  }, 3000);
});
volverPresupuesto.addEventListener("click", function(){
  cardPresupuesto.style.transform = " rotateY(0deg)";

})

//card-Ahorcado
leerMasAhorcado.addEventListener("click", function () {
  cardAhorcado.style.transform = " rotateY(180deg)";
});
leerMasAhorcado.addEventListener("blur", function () {
  setTimeout(() => {
    cardAhorcado.style.transform = " rotateY(0deg)";
  }, 3000);
});
volverAhorcado.addEventListener("click", function(){
  cardAhorcado.style.transform = " rotateY(0deg)";

})

//card-Encriptador
leerMasEncriptador.addEventListener("click", function () {
  cardEncriptador.style.transform = " rotateY(180deg)";
});
leerMasEncriptador.addEventListener("blur", function () {
  setTimeout(() => {
    cardEncriptador.style.transform = " rotateY(0deg)";
  }, 3000);
});
volverEncriptador.addEventListener("click", function(){
  cardEncriptador.style.transform = " rotateY(0deg)";

})

//card-Parque
leerMasParque.addEventListener("click", function () {
  cardParque.style.transform = " rotateY(180deg)";
});
leerMasParque.addEventListener("blur", function () {
  setTimeout(() => {
    cardParque.style.transform = " rotateY(0deg)";
  }, 3000);
});
volverParque.addEventListener("click", function(){
  cardParque.style.transform = " rotateY(0deg)";

})

//card-Hadou
leerMasHadou.addEventListener("click", function () {
  cardHadou.style.transform = " rotateY(180deg)";
});
leerMasHadou.addEventListener("blur", function () {
  setTimeout(() => {
    cardHadou.style.transform = " rotateY(0deg)";
  }, 3000);
});
volverHadou.addEventListener("click", function(){
  cardHadou.style.transform = " rotateY(0deg)";

})
