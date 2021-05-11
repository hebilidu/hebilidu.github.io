// week 03 day 4 - Mini-project #2: Drumset

var audioa = new Audio('./sounds/boom.wav');
var audios = new Audio('./sounds/clap.wav');
var audiod = new Audio('./sounds/hihat.wav');
var audiof = new Audio('./sounds/kick.wav');
var audiog = new Audio('./sounds/openhat.wav');
var audioh = new Audio('./sounds/ride.wav');
var audioj = new Audio('./sounds/snare.wav');
var audiok = new Audio('./sounds/tink.wav');
var audiol = new Audio('./sounds/tom.wav');


window.onkeydown = function(e) {
    if (e.keyCode === 65) {
        audioa.play();
    };
    if (e.keyCode === 83) {
        audios.play();
    };
    if (e.keyCode === 68) {
        audiod.play();
    };
    if (e.keyCode === 70) {
        audiof.play();
    };
    if (e.keyCode === 71) {
        audiog.play();
    };
    if (e.keyCode === 72) {
        audioh.play();
    };
    if (e.keyCode === 74) {
        audioj.play();
    };
    if (e.keyCode === 75) {
        audiok.play();
    };
    if (e.keyCode === 76) {
        audiol.play();
    };
};