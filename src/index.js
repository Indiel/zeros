module.exports = function zeros(expression) {
    let arrStr = expression.split('*');

    let numberTwos = 0;
    let numberFives = 0;

    let odd = arrStr.every(elem => {
        let factorial = elem.split(/(\d{1,})/);
        factorial.forEach((el, i) => {
            if (el == '') {
                factorial.splice(i, 1);
            }
        });
        let number = Number(factorial[0]);

        return number % 2 && factorial[1] === '!!';
    });

    if (odd) {
        return 0;
    } else {
        arrStr.forEach(elem => {
            let factorial = elem.split(/(\d{1,})/);
            factorial.forEach((el, i) => {
                if (el == '') {
                    factorial.splice(i, 1);
                }
            });
            let number = Number(factorial[0]);

            if (factorial[1] === '!') {
                for (let i = 2, curr = i; i <= number; i++, curr = i) {
                    while (!(curr % 2)) {
                        numberTwos++;
                        curr= curr / 2;
                    }
                    while (!(curr % 5)) {
                        numberFives++;
                        curr= curr / 5;
                    }
                }
            } else if (factorial[1] === '!!' && !(number % 2)) {
                for (let i = 2, curr = i; i <= number; i += 2, curr = i) {
                    while (!(curr % 2)) {
                        numberTwos++;
                        curr= curr / 2;
                    }
                    while (!(curr % 5)) {
                        numberFives++;
                        curr= curr / 5;
                    }
                }
            } else if (factorial[1] === '!!' && number % 2) {
                for (let i = 3, curr = i; i <= number; i += 2, curr = i) {
                    while (!(curr % 5)) {
                        numberFives++;
                        curr= curr / 5;
                    }
                }
            }
        });

        if (numberTwos >= numberFives) {
            return numberFives;
        } else {
            return numberTwos;
        }
    }
}
