let nthTerm = +process.argv[2];
let primeNumberCount = 1;
let primeCandidate = 1;
let nthPrimeNumber;

if(nthTerm == 1){
  primeCandidate = 2;
}

while(primeNumberCount != nthTerm){
  let isPrime = true;
  let divisor = 3;
  primeCandidate += 2; 

  while(isPrime && (divisor <= Math.sqrt(primeCandidate))){
    isPrime = (primeCandidate % divisor != 0)
    divisor += 2;
  }

  primeNumberCount += isPrime;
}

nthPrimeNumber = primeCandidate;

console.log("Result :",nthPrimeNumber);
