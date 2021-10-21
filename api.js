for(var j=1;j<=8;j++){
    for(var i=1;i<=8;i++){
    var black = document.createElement('div');
    black.className = 'black';
    var white = document.createElement('div');
    white.className = 'white';
    if((j%2==1 && i%2==1)||(j%2==0 && i%2==0)){
        document.getElementById("chess").appendChild(white);
    }
    else{
      
          document.getElementById("chess").appendChild(black);
    }
    
    
    }}
    
    //document.getElementById("chess").innerHTML.append = white
    