/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["Mi perro", "Un bombero", "Un kaiju", "El loco del barrio"];
let action = ["se comió", "babeó", "robó", "quemó"];
let what = [
  "mis tareas",
  "las llaves de mi casa",
  "el coche",
  "la tarta de cumpleaños"
];
let when = [
  "antes de clase",
  "tras la caída del Imperio Romano",
  "mientras me duchaba",
  "justo antes de que llegase el meteorito"
];

function creaExcusa() {
  let who_random = who[Math.floor(Math.random() * who.length)];
  let action_random = action[Math.floor(Math.random() * action.length)];
  let what_random = what[Math.floor(Math.random() * what.length)];
  let when_random = when[Math.floor(Math.random() * when.length)];

  let nuevoWho = who_random + " ";
  let nuevoComo = action_random + " ";
  let nuevaCosa = what_random + " ";
  let nuevoCuando = when_random;

  document.getElementById("quien").innerHTML = nuevoWho;
  document.getElementById("como").innerHTML = nuevoComo;
  document.getElementById("cosa").innerHTML = nuevaCosa;
  document.getElementById("cuando").innerHTML = nuevoCuando;
}

window.onload = creaExcusa;
