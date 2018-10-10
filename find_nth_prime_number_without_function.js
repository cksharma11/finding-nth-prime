let nthPosition = 300001;
let primeNumberCount = 1;
let primeCandidate = 3;
let iteration = 0;

while(primeNumberCount != nthPosition){
  let isPrime = true;
  let divisor = 3;

  while(isPrime && (divisor <= Math.sqrt(primeCandidate))){
    iteration++;
    if(primeCandidate % divisor == 0){
      isPrime = false;
    }
    divisor += 2;
  }

  primeNumberCount += isPrime;
  primeCandidate += 2;
}

let nthPrimeNumber = primeCandidate - 2;

console.log("Result :",nthPrimeNumber," Number of iteration :",iteration);
