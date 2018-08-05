

var inputs = readline().split(' ');
var lightX = parseInt(inputs[0]); // the X position of the light of power
var lightY = parseInt(inputs[1]); // the Y position of the light of power
var initialTX = parseInt(inputs[2]); // Thor's starting X position
var initialTY = parseInt(inputs[3]); // Thor's starting Y position

// game loop
while (true) {
    var remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.

    // Write an action using print()
    // To debug: printErr('Debug messages...');
    //printErr('');
    
    //printErr('remainingTurns: ' + remainingTurns);
    
    var case1 = '';
    var case2 = '';
    
    // if light y below thor y print n
    if(lightY < initialTY) {
        var lightAbove = 'N';
        initialTY--;
        var above = true;   
    } else lightAbove = '';
    
    // if light y above thor y print s
    if(lightY > initialTY){
      var lightBelow = 'S';
      initialTY++;
    } else lightBelow = '';
    
    // if light x left of thor x print w
    if(lightX < initialTX){
      var lightLeft = 'W';
      initialTX--;
    }
    else lightLeft = '';
    
    // if light x right of thor x print e
    if(lightX > initialTX){
      var lightRight = 'E';
      initialTX++;
    } 
    else lightRight = '';
    
    
    // join coordinates to create output line
    if(above){
        case1 = lightAbove + lightLeft + lightRight;
        print(case1);
        //printErr('thor x :' + initialTX);
        //printErr('thor y :' + initialTY);
        
    } else {
        case2 = lightBelow + lightLeft + lightRight;
        print(case2);
        //printErr('thor x :' + initialTX);
        //printErr('thor y :' + initialTY);
    }
    
}