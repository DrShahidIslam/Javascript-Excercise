ordinal_numbers = [1,2,3,4,5,6,7,8,9];
for (i = 1 ; i < 10; i++) {
    if (ordinal_numbers[i - 1] === 1) {
        console.log(i + "st")
    }
    else if (ordinal_numbers[i - 1] === 2) {
        console.log(i + "nd")
    }
    else if (ordinal_numbers[i- 1] === 3) {
        console.log(i + "rd")
    }
    else {
        console.log(i + "th")
    }
}