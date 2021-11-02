//ÖDEV 1 -- Asal Sayı Olup Olmadığını Bulma
console.log("-- Asal Sayı Olup Olmadığını Bulma Ödevi --")
function findPrime(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let isPrime = true
        if (numbers[i] <= 1) {
            console.log(`${numbers[i]} Asal sayı değildir`)
            continue
        }
        for (let j = 2; j < numbers[i]; j++) {
            if (numbers[i] % j == 0) {
                isPrime = false
                break
            }
        }
        if (isPrime) {
            console.log(`${numbers[i]} Asal sayıdır`)
        } else {
            console.log(`${numbers[i]} Asal sayı değildir`)
        }
    }
}

findPrime(2, 5, 8, 21, 13)
findPrime(3, 5)

//ÖDEV 2 -- Arkadaş sayı olup olmadığını bulma
console.log("-- Arkadaş Sayı Olup Olmadığını Bulma Ödevi --")
function friendlyNumber(number1, number2) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 1; i < number1; i++) {
        if (number1 % i == 0) {
            sum1 += i
        }
    }
    for (let i = 1; i < number2; i++) {
        if (number2 % i == 0) {
            sum2 += i
        }
    }
    if (number1 == sum2 && number2 == sum1) {
        console.log(`${number1} ${number2} Arkadaş Sayıdır`)
    } else {
        console.log(`${number1} ${number2} Arkadaş Sayı Değildir`)
    }
}

friendlyNumber(220, 284)

//ÖDEV 3 -- 1000'e kadarki tüm mükemmel sayıları listeleyen program
console.log("-- 1000'e kadarki tüm mükemmel sayıları listeleyen program --")
function listPerfectNumber(limit) {
    for (let i = 2; i <= limit; i++) {
        let sum = 0;
        for (let j = 1; j < i; j++) {
            if (i % j == 0) {
                sum += j
            }
        }
        if (sum == i) {
            console.log(`${i} Mükemmel Sayıdır`)
        }
    }
}

listPerfectNumber(1000)

//ÖDEV 4 -- 1000'e kadarki tüm asal sayıları listeleyen program
console.log("-- 1000'e kadarki tüm asal sayıları listeleyen program --")
function listPrimeNumbers(limit) {
    for (let i = 2; i <= limit; i++) {
        let isPrime = true;
        if (i == 2) {
            console.log(`${i} Asal Sayıdır`)
            continue
        }
        for (let j = 2; j < i; j++) {
            if(i % j == 0){
                isPrime = false;
                break
            }
        }
        if(isPrime){
            console.log(`${i} Asal Sayıdır`)
        }
    }
}

listPrimeNumbers(1000)