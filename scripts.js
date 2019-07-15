for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    // Divide the current number by 5, and check if the remainder is 0
    if (currentNumber % 5 === 0 && currentNumber %7 === 0) {
        console.log("ChickenMonkey")
    }
    else if (currentNumber % 5 === 0) {
        console.log("Chicken") // Only chicken will appear?
    }
    else if (currentNumber % 7 === 0) {
        console.log("Monkey") // only monkey will appear?
    }
    else {
        console.log(currentNumber)
    }
}