function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    // Check for divisors from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

let inputNumber = readline();
let n1;
n1 = parseInt(inputNumber / 2);
let n2 = inputNumber - n1;
// console.log(n1, n2);

for (let i = 0; i < inputNumber / 2; i++)
{
    if (isPrime(n1) || isPrime(n2)) {
        n1--;
        n2++;
    }
    else {
        console.log(n1, n2);
        break;
    }
}
