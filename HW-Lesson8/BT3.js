let x=0
let y=0
let z=0
let a=0
var m=100

do{
    a=y
    if (z%2!=0){
        y=a+z;
    }
    else{
        y=a-z;
    }
    x++;
    z=x;
}
while(x<=m);    
if (x=m){
    console.log(y)
   }      