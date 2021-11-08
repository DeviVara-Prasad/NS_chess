var arr = [];
for (var j = 1; j <= 8; j++) {
    for (var i = 1; i <= 8; i++) {
      var black = document.createElement("div");
      black.className = "black";
      var white = document.createElement("div");
      white.className = "white";
      black.id = j + "" + i; 
      white.id = j + "" + i; 
      
      if ((j % 2 == 1 && i % 2 == 1) || (j % 2 == 0 && i % 2 == 0)) {
        document.getElementById("chess").appendChild(white);
        arr.push(white.id);
      } else {
        document.getElementById("chess").appendChild(black);
        arr.push(black.id);
      }
    }
  }
  var currentTroopId = "11";
  addTroop(currentTroopId);
  function clickCallback(event) {
    const keyCode = event.keyCode;
    if (keyCode === 38) {
      var newId = "" + (parseInt(currentTroopId) - 10);
      if(arr.indexOf(newId)!= -1){
      removeTroop(currentTroopId);
      addTroop(newId);
      currentTroopId = newId;
      console.log("Up pressed");}
      else{
        alert("Can't go up");
      }
    } else if (keyCode === 40) {
      var newId = "" + (parseInt(currentTroopId) + 10);
      if(arr.indexOf(newId)!= -1){
      removeTroop(currentTroopId);
      addTroop(newId);
      currentTroopId = newId;
      console.log("Down pressed");}
      else{
        alert("Can't go Down");
      }
    } else if (keyCode === 37) {
      var newId = "" + (parseInt(currentTroopId) - 1);
      if(arr.indexOf(newId)!= -1){
      removeTroop(currentTroopId);
      addTroop(newId);
      currentTroopId = newId;
      console.log("Left pressed");}
      else{
        alert("Can't go Left");
      }
    } else if (keyCode === 39) {
      var newId = "" + (parseInt(currentTroopId) + 1);
      if(arr.indexOf(newId)!= -1){
      removeTroop(currentTroopId);
      addTroop(newId);
      currentTroopId = newId;
      console.log("Right pressed");}
      else{
        alert("Can't go Right");
      }
    }
    console.log(event.keyCode, "callback");
  }
  document.getElementById("chess").addEventListener("click", clickCallback);
  document.addEventListener("keydown", clickCallback);
  
  function addTroop(id) {
    document.getElementById(id).className =
      document.getElementById(id).className + " troop";
  }
  function removeTroop(id) {
    document.getElementById(id).className = document
      .getElementById(id)
      .className.replace(" troop", "");
  }