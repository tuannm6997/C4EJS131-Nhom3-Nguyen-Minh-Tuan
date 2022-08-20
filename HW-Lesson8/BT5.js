let x=0
let y=0
let m=99
do{
    if (x%2 === 1){
        y=y+x/(x+1);
    }
    else{
        y=y-x/(x+1);
    }
    x++;
}
while(x<=m);    
if (x=m){
    console.log(y);
   }      
