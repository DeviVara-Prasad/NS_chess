var arr = [];
for (var j = 1; j <= 8; j++) {
    for (var i = 1; i <= 8; i++) {
      var black = document.createElement("div");
      black.className = "black game";
      var white = document.createElement("div");
      white.className = "white game";
      black.id = j + "" + i; 
      white.id = j + "" + i; 
      
      if ((j % 2 == 1 && i % 2 == 1) || (j % 2 == 0 && i % 2 == 0)) {
        document.getElementById("chess").appendChild(white);

        arr.push(white.id);
        document.getElementById(white.id).setAttribute('chess',null);
      } else {
        document.getElementById("chess").appendChild(black);
        arr.push(black.id);
        document.getElementById(black.id).setAttribute('chess',null)
      }
    }
  }
  var currentTroopId = "82";
  addTroop(currentTroopId);
  // document.getElementById(currentTroopId).onclick = function(currentTroopId){ myFunction(currentTroopId)};
  // function myFunction(currentTroop){
  //   let knight = parseInt(event.target.id);
  //   var arr1 = [];
  //   arr1.push(knight+19);
  //   arr1.push(knight+21);
  //   arr1.push(knight-19);
  //   arr1.push(knight-21);
  //   arr1.push(knight+12);
  //   arr1.push(knight-8);
  //   arr1.push(knight+8);
  //   arr1.push(knight-12);
  //   for(var i=0;i<8;i++){
  //     if(arr.indexOf(""+arr1[i])!= -1){
  //       document.getElementById(arr1[i]).className = document.getElementById(arr1[i]).className+" pos";
  //       // document.getElementById(arr1[i]).onclick = function(h){ myFunction2(h)};
  //     }
  // }}
  // function myFunction2(e){
  //          alert(e.target.id);
  //          removeTroop(currentTroopId);
  //          var r = document.getElementsByClassName("pos");
  //          addTroop(e.target.id);
  //          while(r.length>0){
  //            //alert(r[0]);
  //            if(e.target.id!= r[0].id){
  //            r[0].className = r[0].className.replace("pos","");
  //            //r[0].style.pointerEvents = null;
  //           }
  //          }
           

  // }

  // var l = document.getElementsByClassName("troop")[0];
  // function clickCallback(event) {
  //   let knight = parseInt(event.target.id);
  //   var arr1 = [];
  //   arr1.push(knight+19);
  //   arr1.push(knight+21);
  //   arr1.push(knight-19);
  //   arr1.push(knight-21);
  //   arr1.push(knight+12);
  //   arr1.push(knight-8);
  //   arr1.push(knight+8);
  //   arr1.push(knight-12);
  //   for(var i=0;i<8;i++){
  //     if(arr.indexOf(""+arr1[i])!= -1){
  //       document.getElementById(arr1[i]).className = document.getElementById(arr1[i]).className+" pos";
  //       document.getElementById(arr1[i]).onclick = function(e){
  //         document.getElementsByClassName("troop")[0].className = document.getElementsByClassName("troop")[0].className.replace(" troop","");
          
          
  //         var el = document.getElementsByClassName("pos");
  //         while(el.length>0){
  //           el[0].className = el[0].className.replace(" pos","");
            
  //         }
  //       document.getElementById(e.target.id).className = document.getElementById(e.target.id).className+" troop";
  //       l = document.getElementsByClassName("troop")[0]
          
  //       };
  //     }
  //   }

    

    
  //   //document.getElementById(b).className = document.getElementById(b).className+" troop";
  //   //document.getElementById(knight).className = document.getElementById(knight).className.replace(" troop","");

  // }
  // l.addEventListener('click', clickCallback);
  document.querySelectorAll('.game').forEach(item =>{
    item.addEventListener('click',e =>{
      if(e.target.getAttribute('chess')=='knight'){
            let knight = parseInt(e.target.id);
            var arr1 = [];
            arr1.push(knight+19);
            arr1.push(knight+21);
            arr1.push(knight-19);
            arr1.push(knight-21);
            arr1.push(knight+12);
            arr1.push(knight-8);
            arr1.push(knight+8);
            arr1.push(knight-12);
            for(var i=0;i<8;i++){
              if(arr.indexOf(""+arr1[i])!= -1){
                document.getElementById(arr1[i]).setAttribute("chess","pos");
              }
            }
    }
    else if(e.target.getAttribute('chess')=='pos'){
      removeTroop(document.getElementsByClassName('troop')[0].id);
      addTroop(e.target.id);
      var a = document.querySelectorAll('[chess="pos"]');
      changeChess(a);
    }
  })
  })
  function addTroop(id) {
    
    document.getElementById(id).className =
      document.getElementById(id).className + " troop";
      document.getElementById(id).setAttribute('chess',"knight");
      
      
  }
  function removeTroop(id) {
    document.getElementById(id).className = document
      .getElementById(id)
      .className.replace(" troop", "");
      document.getElementById(id).setAttribute('chess',null);

  }
  function changeChess(e){
    //console.log(e.length);
    for(var i=0;i<e.length;i++){
      document.getElementById(e[i].id).setAttribute('chess',null);
    }
  }