function isPrime (number) {
    if(number <= 1) {

        return false;
    }

for(i=2;i<=Math.sqrt(number);i++) {
    if (number%i==0) {
        return false;
    }
}

return true;

}

function sumPrime(number) {
    for(let i=2;i<=number/2;i++){
        if(isPrime(i)&&isPrime(number-i)) {
            console.log(`${number}=${i}+${number-i}`);
            return true;
        }
    }
    return false;
}

const number=88;
if(!sumPrime(number)){
    console.log(`${number} cannot be expressed as sum of two prime numbers`);
}