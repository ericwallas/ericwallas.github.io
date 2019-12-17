var bread = 0;
var furnace = 0;
var furnaceCost = 100;
var breadButton = document.getElementById("breadButton");
var breadDisplay = document.getElementById("breadDisplay");
var furnaceButton = document.getElementById("furnaceButton");
var furnaceDisplay = document.getElementById("furnaceDisplay");
var furnaceCostDisplay = document.getElementById("furnaceCostDisplay");

var donut = 0;
var donutFryer = 0;
var fryerCost = 100;
var donutButton = document.getElementById("donutButton");
var donutDisplay = document.getElementById("donutDisplay");
var fryerButton = document.getElementById("fryerButton");
var fryerDisplay = document.getElementById("fryerDisplay");
var donutFryerCostDisplay = document.getElementById("donutFryerCostDisplay");

var cake = 0;
var oven = 0;
var ovenCost = 100;
var cakeButton = document.getElementById("cakeButton");
var cakeDisplay = document.getElementById("cakeDisplay");
var ovenButton = document.getElementById("ovenButton");
var ovenDisplay = document.getElementById("ovenDisplay");
var ovenCostDisplay = document.getElementById("ovenCostDisplay");

var money = 0;
var moneyButton = document.getElementById("moneyButton");
var moneyDisplay = document.getElementById("moneyDisplay");

var gems = 0;
var gemsButton = document.getElementById("gemsButton")
var gemsDisplay = document.getElementById("gemsDisplay")

var breadSpeed = document.getElementById("breadSpeed");
var donutSpeed = document.getElementById("donutSpeed");
var cakeSpeed = document.getElementById("cakeSpeed");
var breadTick = 20;
var donutTick = 20;
var cakeTick = 20;

var boostOnB = false;
var boostOnD = false;
var boostOnC = false;
var breadSpeedStatus = document.getElementById("breadSpeedStatus");
var donutSpeedStatus = document.getElementById("donutSpeedStatus");
var cakeSpeedStatus = document.getElementById("cakeSpeedStatus");

//upgrades
breadSpeed.onclick = function(){
  if(gems >= 3 && !boostOnB){
    gems = gems - 3;
    breadTick = 1;
    boostOnB = true;
    breadSpeedStatus.innerHTML = "Status: Active";
    breadSpeedStatus.style.color = "#089519";
    gemsDisplay.innerHTML = "Gems: " + Math.round(gems);
    setTimeout(function() {
      breadTick = 20;
      boostOnB = false; 
      breadSpeedStatus.innerHTML = "Status: Not Active";
      breadSpeedStatus.style.color = "#C80E0E";
    }, 20000);
  }
}

donutSpeed.onclick = function(){
  if(gems >= 6 && !boostOnD){
    gems = gems - 6;
    donutTick = 1;
    boostOnD = true;
    donutSpeedStatus.innerHTML = "Status: Active";
    donutSpeedStatus.style.color = "#089519";
    gemsDisplay.innerHTML = "Gems: " + Math.round(gems);
    setTimeout(function() {
      donutTick = 20;
      boostOnD = false;
      donutSpeedStatus.innerHTML = "Status: Not Active";
      donutSpeedStatus.style.color = "#C80E0E";
    }, 20000);
  }
}

cakeSpeed.onclick = function(){
  if(gems >= 12 && !boostOnC){
    gems = gems - 12;
    cakeTick = 1;
    boostOnC = true;
    cakeSpeedStatus.innerHTML = "Status: Active";
    cakeSpeedStatus.style.color = "#089519";
    gemsDisplay.innerHTML = "Gems: " + Math.round(gems);
    setTimeout(function() {
      cakeTick = 20;
      boostOnC = false;
      cakeSpeedStatus.innerHTML = "Status: Not Active";
      cakeSpeedStatus.style.color = "#C80E0E";
    }, 20000);
  }
}


//money
gemsButton.onclick = function(){
  if(money >= 1000) {
    money = money - 1000;
    gems = gems + 1;
    moneyDisplay.innerHTML = "Money: $" + Math.round(money);
    gemsDisplay.innerHTML = "Gems: " + Math.round(gems);
  }
}

moneyButton.onclick = function(){
  if(bread >= 1) {
    money += bread;
    bread -= bread;
    moneyDisplay.innerHTML = "Money: $" + Math.round(money);
  }

  if(donut >= 1) {
    money += (donut*2);
    donut -= donut;
    moneyDisplay.innerHTML = "Money: $" + Math.round(money);
  }

  if(cake >= 1) {
    money += (cake*3);
    cake -= cake;
    moneyDisplay.innerHTML = "Money: $" + Math.round(money);
  }
}

breadButton.onclick = function(){
  bread = bread + 1;
  breadDisplay.innerHTML = Math.round(bread) + " Bread Loaves";
}

furnaceButton.onclick = function(){
  if(money >= furnaceCost) {
    money -= furnaceCost;
    furnace++;
    furnaceCost+=(furnace*20);
    breadDisplay.innerHTML = Math.round(bread) + " Bread Loaves";
    furnaceDisplay.innerHTML = "Level " + Math.round(furnace);
    furnaceCostDisplay.innerHTML = "$" + Math.round(furnaceCost);
    moneyDisplay.innerHTML = "Money: $" + Math.round(money);
  }
}

donutButton.onclick = function(){
  donut = donut + 1;
  donutDisplay.innerHTML = Math.round(donut) + " Donuts";
}

fryerButton.onclick = function(){
  if(money >= fryerCost) {
    money -= fryerCost;
    donutFryer++;
    fryerCost+=(donutFryer*30);
    donutDisplay.innerHTML = Math.round(donut) + " Donuts";
    fryerDisplay.innerHTML = "Level " + Math.round(donutFryer);
    donutFryerCostDisplay.innerHTML = "$" + Math.round(fryerCost);
    moneyDisplay.innerHTML = "Money: $" + Math.round(money);
  }
}

cakeButton.onclick = function(){
  cake = cake + 1;
  cakeDisplay.innerHTML = Math.round(cake) + " Cupcakes";
}

ovenButton.onclick = function(){
  if(money >= ovenCost) {
    money -= ovenCost;
    oven++;
    ovenCost+=(oven*40);
    cakeDisplay.innerHTML = Math.round(cake) + " Cupcakes";
    ovenDisplay.innerHTML = "Level " + Math.round(oven);
    ovenCostDisplay.innerHTML = "$" + Math.round(ovenCost);
    moneyDisplay.innerHTML = "Money: $" + Math.round(money);
  }
}

// Passive Income
setInterval(function(){
  // number produced = number of production / (10 / desired number)
  bread += furnace / breadTick;
  breadDisplay.innerHTML = Math.round(bread) + " Bread Loaves";
  donut += donutFryer / donutTick;
  donutDisplay.innerHTML = Math.round(donut) + " Donuts";
  cake += oven / cakeTick;
  cakeDisplay.innerHTML = Math.round(cake) + " Cupcakes";
}, 100);
