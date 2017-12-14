// const square = function(x) {
//     return x * x;
// };

// // const squareArrow = (x) => {
// //     return x * x;
// // }

// const squareArrow = (x) =>  x * x;

// console.log(square(8));
// console.log(squareArrow(8));

// const getFirstName = (fullName) => {
//     return fullName.split(' ')[0];
// }

// const getFirstName = (fullName) =>  fullName.split(' ')[0];

// console.log(getFirstName('Yoav Gecht'));

//arguments object and this keyword no longer bound with arrow function

const add = (a, b) => {
    // console.log(arguments); //error arguments is not defined
    return a + b;
};

const user = {
    name: 'Yoav',
    cities: ['Tel Aviv', 'Jerusalem', 'Berlin'],
    printCities() {
       return this.cities.map((city) => this.name + ' from ' + city + '!' );
    }
}

console.log(user.printCities());


const multiplier = {
    numbers: [1,3,4,5,6,7,8,9,10],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number);
    }
};

console.log(multiplier.multiply());


