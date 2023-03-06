"use strict"

/*Sikkert mye repitisjon, og kan sikkert gjøres på en annen måte. Var denne måten eg fikk til å fungere vertfall. 
Prøvde også å få til et bilde når man klikket, men fikk ikke dette til.*/

const button1 = document.querySelector(".btn")
button1.addEventListener ("click", function () {
  let audio = new Audio('./sound/hihat.wav');
  audio.play();
}) 

const button2 = document.querySelector(".btn2")
button2.addEventListener ("click", function () {
  let audio = new Audio('./sound/openhat.wav');
  audio.play();
}) 

const button3 = document.querySelector(".btn3")
button3.addEventListener ("click", function () {
  let audio = new Audio('./sound/snare.wav');
  audio.play();
}) 

const button4 = document.querySelector(".btn4")
button4.addEventListener ("click", function () {
  let audio = new Audio('./sound/tom.wav');
  audio.play();
}) 

const button5 = document.querySelector(".btn5")
button5.addEventListener ("click", function () {
  let audio = new Audio('./sound/kick.wav');
  audio.play();
}) 

const button6 = document.querySelector(".btn6")
button6.addEventListener ("click", function () {
  let audio = new Audio('./sound/openhat.wav');
  audio.play();
}) 

const button7 = document.querySelector(".btn7")
button7.addEventListener ("click", function () {
  let audio = new Audio('./sound/tom.wav');
  audio.play();
}) 

const button8 = document.querySelector(".btn8")
button8.addEventListener ("click", function () {
  let audio = new Audio('./sound/tom.wav');
  audio.play();
}) 
