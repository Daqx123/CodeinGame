/**
* Casablanca’s hippodrome is organizing a new type of horse racing: duals. 
* During a dual, only two horses will participate in the race. 
* In order for the race to be interesting, it is necessary to try to select two horses with similar strength.
* Write a program which, using a given number of strengths, identifies the two closest strengths and shows their difference with an integer (≥ 0).
*/



function sortHorses(a , b )
{
    return a-b;
}

const n = readline();

if( n < 2 )
{
    print (readline());
}
else
{
    var horses = [];
    
    for (var i = 0; i < n; i++) {
       horses.push(parseInt(readline()));  
    }
    
    horses.sort(sortHorses);
    printErr(horses);
    
    var smallestDiff = horses[1] - horses[0];
    
    for(var i = 2 ; i < n; i++ )
    {
        var newDiff =  horses[i] - horses[ i - 1];
        if( newDiff < smallestDiff )
        {
            smallestDiff  = newDiff;
        } 
    }
    
    print ( smallestDiff );
}