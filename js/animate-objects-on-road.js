"use strict";

// Hent DOM-elementer

const getRedcar = document.getElementById("redCar");
const getPolicecar = document.getElementById("policeCar");
const getBluecar = document.getElementById("blueCar");
const getCar4 = document.getElementById("car4");

const sun = document.querySelector(".sun");
const scene = document.querySelector(".scene");

// opretter lydobjekter

const soundRedCar = new Audio();
soundRedCar.src = "../sound/red-car-horn.wav";

const soundPoliceCar = new Audio();
soundPoliceCar.src = "../sound/police-car-sound.wav";

const soundBlueCar = new Audio();
soundBlueCar.src = "../sound/blue-car-sound.wav";

if (getRedcar) {
  getRedcar.addEventListener("click", () => {
    soundRedCar.play();
  });
}

if (getPolicecar) {
  getPolicecar.addEventListener("click", () => {
    soundPoliceCar.play();
  });
}

if (getBluecar) {
  getBluecar.addEventListener("click", () => {
    soundBlueCar.play();
  });
}

if (sun && scene) {
  sun.addEventListener("click", () => {
    scene.classList.toggle("night");
  });
}
