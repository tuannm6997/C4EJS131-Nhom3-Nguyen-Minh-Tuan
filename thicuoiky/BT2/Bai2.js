function numberOneTriangle(a) {
    if(a<10&&a>1){
        for(let i=1;i<=a;i++){
        let kq = "";
        for(let j=1;j<=i;j++){
            kq = kq+"*"
        }
        console.log(kq);
    }
    }
    else{
        false
    }
  }
numberOneTriangle(9);
