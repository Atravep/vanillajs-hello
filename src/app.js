/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["Mi perro", "Un bombero", "Un kaiju", "El loco del barrio"];
let action = ["se comió", "babeó", "robó", "bañó en salsa agridulce"];
let what = ["mis tareas", "las llaves de mi casa", "el coche"];
let when = [
  "antes de clase",
  "tras la caída del Imperio Romano",
  "justo cuando me desperté de la siesta",
  "mientras me duchaba",
  "justo antes de que llegase el meteorito"
];

function creaExcusa() {
  let who_random = who[Math.floor(Math.random() * who.length)];
  let action_random = action[Math.floor(Math.random() * action.length)];
  let what_random = what[Math.floor(Math.random() * what.length)];
  let when_random = when[Math.floor(Math.random() * when.length)];

  let nuevaExcusa =
    who_random + " " + action_random + " " + what_random + " " + when_random;

  document.getElementById("excuse").innerHTML = nuevaExcusa;
}

window.onload = creaExcusa;
