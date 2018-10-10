let number=3000000;
let counter = 2;
let num = 1;
let primeNumber = 0;
let currentNumber=1;
while(counter < number){
  if(currentNumber==6*num-1){
    currentNumber=6*num+1;
    num++;
  }else{
    currentNumber=6*num-1;
  }
  if(isPrime(currentNumber)){
    counter++;
  }
}
console.log("",counter,"th prime number is",currentNumber);
function isPrime(primeNumber){
  for(let divisor=2;divisor<=Math.sqrt(primeNumber);divisor++){
    if(primeNumber%divisor == 0){
      return false;
    } 
  }
  return true;
}
