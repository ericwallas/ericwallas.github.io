var popcorn = 0;
var popMachine = 0;
var popMachineCost = 10;
var popButton = document.getElementById("popButton");
var popDisplay = document.getElementById("popDisplay");
var machineButton = document.getElementById("machineButton");
var machineDisplay = document.getElementById("machineDisplay");

popButton.onclick = function(){
  popcorn = popcorn + 1;
  popDisplay.innerHTML = Math.round(popcorn) + " Bags(s) of Popcorn";
}

machineButton.onclick = function(){
  if(popcorn >= popMachineCost) {
    popcorn -= popMachineCost;
    popMachine++;
    popDisplay.innerHTML = Math.round(popcorn) + " Bag(s) of Popcorn";
    machineDisplay.innerHTML = Math.round(popMachine) + " Machine(s)";
  }
}
setInterval(function(){
  popcorn += popMachine / 20;
  popDisplay.innerHTML = Math.round(popcorn) + " Bags(s) of Popcorn";
}, 50);
