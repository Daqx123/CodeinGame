

var n = parseInt(readline()); // the number of temperatures to analyse
var temps = readline(); // the n temperatures expressed as integers ranging from -273 to 5526

var number = 1;

// Temperature values are stored as one string. Below code declares an array to store the values and splits the temp string
// for every " " (space) 

var myArray = temps.split(" ");
for(var i; i<myArray.length; i++){
    myArray[i] = parseInt(myArray[i], 10); 
}

// closest() will go through values inside the array and retrieve the one with minimal absolute difference to the number 
// specified in the brief. 
function closest(num, arr){
  curr = myArray[0];
  var diff = Math.abs(num - curr);
  for(var j = 0; j < myArray.length; j++){
    var newdiff = Math.abs(num - myArray[j]);
    if(newdiff < diff){
        diff = newdiff;
        curr = myArray[j];   
    }
  }
  return curr;

}

if(temps){
printErr(myArray.join(' / '));

print(closest(number, myArray));
} else {
 print("0");   
}