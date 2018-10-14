let nthTerm=10001;
let primeCount = 2;
let count = 1;
let primeNumber = 0;
let primeCandidate=1;

while(primeCount < nthTerm){
  if(primeCandidate == 6*count-1){
    primeCandidate = 6*count+1;
    count++;
  }else{
    primeCandidate = 6*count-1;
  }
  if(isPrime(primeCandidate)){
    primeCount++;
  }
}

function isPrime(primeNumber){
  for(let divisor = 2;divisor <= Math.sqrt(primeNumber); divisor++){
    if(primeNumber % divisor == 0){
      return false;
    } 
  }
  return true;
}

console.log("",primeCount,"th prime number is",primeCandidate);
