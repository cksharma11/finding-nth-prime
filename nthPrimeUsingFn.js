let nthPosition =10001;
let primeNumberCount = 1;
let primeCandidate = 3;

function isPrime(number){
  for(let divisor =3; divisor <= Math.sqrt(number) ; divisor += 2 ){
    if(number % divisor == 0){
      return 0;
    }
  }
  return 1;
}

while(primeNumberCount != nthPosition){
  primeNumberCount += isPrime(primeCandidate);
  primeCandidate += 2;
}

console.log("",nthPosition," Prime number :",primeCandidate-2);
