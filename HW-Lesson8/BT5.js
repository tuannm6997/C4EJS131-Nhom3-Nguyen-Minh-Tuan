let x=1
let y=0
let z=x+1
let a=0
let b=x
var m=100

do{
    a=y
    if (b%2!=0){
        y=a+b/z;
    }
    else{
        y=a-b/z;
    }
    b=z;
    x++;
    z=x;
}
while(x<=m);    
if (x=m){
    console.log(y)
   }      
