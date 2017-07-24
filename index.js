(function() {
  'use strict';

var stop = document.getElementById('stopButton')
var stopBtn = document.getElementById('stopLight')
stop.addEventListener("click", function() {
    if (stopBtn.style["background-color"] === 'red') {
      stopBtn.style["background-color"] = 'black'
    } else {
      stopBtn.style["background-color"] = 'red'
    };
  })

stop.addEventListener("mouseenter", function() {
  console.log("Entered " + stop.textContent +  " button")
})

var slow = document.getElementById('slowButton')
var slowBtn = document.getElementById('slowLight')
slow.addEventListener("click", function () {
  if (slowBtn.style["background-color"] === "orange") {
    slowBtn.style["background-color"] = "black"
  } else {
    slowBtn.style["background-color"] = "orange"
  };
})

slow.addEventListener("mouseenter", function() {
  console.log("Entered " + slow.textContent +  " button")
})

var go = document.getElementById('goButton')
var goBtn = document.getElementById('goLight')
go.addEventListener("click", function () {
  if (goBtn.style["background-color"] === "green") {
    goBtn.style["background-color"] = "black"
  } else {
    goBtn.style["background-color"] = "green"
  };
})

go.addEventListener("mouseenter", function() {
  console.log("Entered " + go.textContent +  " button")
})





})();
