// let str = 'world'
// // let reversedStr = ''
// //  for (let i = str.length - 1; i >= 0; i--) {
// //    reversedStr = reversedStr + str[i]
// //  }
// //  console.log(reversedStr)

// let split = str.split('')
// console.log(split);
// let reversed = split.reverse()
// console.log(reversed);
// let join = reversed.join('')
// console.log(join);

// console.log(str.split('').reverse().join(''));

// let string = 'hello'
// let number = 123
// let boolean = true // false

// let arr = [1,-4,7,12]
// let sum = 0
// for (let elem of arr) {
//     if (elem  > 0) sum = sum + elem
// }
// console.log(sum);



// function findAverage(array) 
//     if (array.length) {
//       let sum = 0
//       for (let elem of array) {
//         sum += elem
//       }
//       return sum / array.length
//     }
//     return 0;


// const arr = [1,2,3,4]
// const sum = arr.reduce(function(acc, cur) {
//     return acc + cur
// }, 0)
// console.log(sum);

// let num = 6
// let str = 'Hello'
// let repeatedStr = ''

// for (let i = 0; i < num; i++) {
//     repeatedStr = repeatedStr + str
// }
// console.log(repeatedStr);

// let str = 'country'
// let newStr = ''

// for (let i = 1; i < str.length - 1; i++) {
//     newStr = newStr + str[i]
// }
// console.log(newStr)

// let numbers = [1, 2, 2]
//     //         0  1  2 
// let sum = 0
// for (let i = 0; i < numbers.length; i++) {
//     // console.log(numbers[i]);
//     sum = sum + numbers[i] ** 2
// }
//  console.log(sum);

// let args = [34, -345, -1, 100]
// let min = [0]

// for (let i = 1; i < args.length; i++) {
//     if (args[i] < min) {
//         min = args[i]
//     }
// }

// console.log(min);

// let num = 8 
// let sum = 0

// for (let i = 1; i <= num; i++) {
//     sum = sum + i
// }
// console.log(sum);

// let x = "8 j 8   mBliB8g  imjB8B8  jl  B"
// let newStr = ''
// for (let i = 0; i < x.length; i++) {
//     if (x[i] != ' ') {
//         newStr = newStr + x[i]
//     }
// }
// console.log(newStr);

// // // Create function
// // function greet(name) {
// //     // let name = 'John'
// //     return 'Hello, ' + name
// // }
// // // Using function
// // let result = greet('John')
// // console.log(result);
// let greet = function (name) {
//     // let name = 'John'
//     return 'Hello, ' + name
// }
// // Using function
// let result = greet('John')
// console.log(result);

// let str = '1234'
// let num = 1234 


// let sheeps = [true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true]

// function countSheeps(arrayOfSheep) {
//   let count = 0
//   for (let sheep of arrayOfSheep) {
//     if (sheep == true) {
//         count++
//     }
//   }
//   return count
// } 

// let result = countSheeps(sheeps)
// console.log(result);

// function greet(name) {
//     let result = 'Hello, ' + name + ' how are you doing today?'
//     return result
// }

// console.log(greet('John'))

// function basicOp(operation, valuer1, value2) {
//     if (operation == '+') return valuer1 + value2
//     if (operation == '-') return valuer1 - value2
//     if (operation == '*') return valuer1 * value2
//     if (operation == '/') return valuer1 / value2
// }
// console.log(basicOp('+', 1, 2));

let arr = [1, 2, 3]

function maps(arrayOfNum) {
    let newArr = []
    for (let num of arrayOfNum) {
        newArr.push(num * 2)
    }
    return newArr
}

console.log(maps(arr))