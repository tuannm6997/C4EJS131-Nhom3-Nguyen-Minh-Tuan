let x=2
let y=1/2
let z=0
let a=0
var m=1000000
do{
    a=y;
    y=a+z;
    x++;
    z=1/x;
}
while(x<=m);    
if (x=m){
    console.log(y)
   }      