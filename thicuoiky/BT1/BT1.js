function timSoNT(){

    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const primeNumbs = new Array();


    let ctr = num1;
    while(ctr<=num2)
    {
        if(isPrime(ctr)==true)
        {
            primeNumbs[primeNumbs.length] = ctr;
        }
        ctr = ctr+1;

    }

    if (primeNumbs.length == 0){
       document.getElementById('return').innerHTML = "Khong co so nguyen to trong khoang.";
    }

    else {
        outputPrimeNums(primeNumbs);
    }

}

function isPrime(num)
{
let flag = true;
for(let i=2; i<=Math.ceil(num/2); i++)
{
    if((num%i)==0)
    {
        flag = false;
        break;
    }
}
return flag;    
}

function outputPrimeNums(primes){
var kq = "<h2>Prime Numbers</h2>";
for (i=0;i<primes.length;i++){
        kq += primes[i] + "<br/>";
    }
document.getElementById('returnPrime').innerHTML = kq;
}