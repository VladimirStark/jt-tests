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

// let arr = [1, 2, 3]

// function maps(arrayOfNum) {
//     let newArr = []
//     for (let num of arrayOfNum) {
//         newArr.push(num * 2)
//     }
//     return newArr
// }

// console.log(maps(arr))



// function digitize(n) {
//     // let n = 35231
//     let str = n + ''
//     let array = str.split('')
//     let reversedArr = array.reverse()
//     for (let i = 0; i < reversedArr.length; i++) {
//         reversedArr[i] = +reversedArr[i]
//     }
//     return reversedArr
//     return String(n).split('').reverse().map(function (digit) {
//         return +digit
//     })

//     // let newArr = []
//     // while (n) {
//     //     let digit = n % 10
//     //     n = Math.floor(n / 10)
//     //     newArr.push(digit)
//     // }
//     // return newArr 
//     // // return [1,3,2,5,3]
// }

// let num = 35231
// let result = digitize(num)
// console.log(result);

// function abbrevName(name){
//     // // let name = 'patrick feeney'
//     // let names = name.split(' ') // ['pftrick', 'feeney']
//     // let firstLetter  = names[0][0].toUpperCase()
//     // let secondLetter = names[1][0].toUpperCase()
//     // let result = firstLetter + '.' + secondLetter
//     // return result
//     return name  // ['patrick', 'feeney']
//     .split(' ').map(function (word) {
//         return word[0].toUpperCase()
//     })  // 'P.F'
//     .join('.')
//     // return 'P.F'
// }

// let fullname = 'patrick feeney'
// let result = abbrevName(fullname)
// console.log(result);

// function past(h, m, s){
//     // let h = 1
//     // let m = 1
//     // let s = 1
//     let seconds = h * 3600 + m * 60 + s
//     return seconds * 1000
//     // return 3661000
// }

// let result = past(1,1,1)  //3661000
// console.log(result);

// function paperwork(n, m) {
//     // let n = 5
//     // let m = 5
//     if (n > 0 && m > 0) { // logical AND
//       return n * m  // return = 25
//     } else {
//       return 0
//     }
//   }
  

// function loveFunc(flower1, flower2) {
//     if ((flower1 + flower2) % 2 == 0) {
//         return false
//     } else {
//         return true
//     } 
// }

// let result = loveFunc(1, 4)
// console.log(result)

// function simpleMultiplication(number) {
//     if (number % 2 == 0) {
//       return number * 8
//     } else {
//       return number * 9
//     }
//  }

 // function getPlanetName(id) {
//     let name;
//     switch (id) {
//         case 1:
//             return  'Mercury'
//            //   name =
//           //  break;
//         case 2:
//             return 'Venus'
//           //  break;
//         case 3:
//             return 'Earth'
//           //  break;
//     }
//     return name;
// }

// let result = getPlanetName(1);
// console.log(result);

// function getASCII(c) {
//     return c.charCodeAt( );
// }

// let result = getASCII('A')
// console.log(result);

// function twoSort(s) {
//     s.sort();
//     let result = s[0].split('').join('***')
//     return result
// }

// let arr = ["turns", "are"]
// let result = twoSort(arr);
// console.log(result);

// function replaceDots(str) {
//     return str.replace(/\./g, '-');
// }

// let result = replaceDots('one.two.three');
// console.log(result);

// function replaceDigitsCard(cardNumber) {
//     let arr = cardNumber.split('-')
//     let result = [];
//     for (let i = 0; i < arr.length-1; i++) {
//         result.push(arr[i].replace(/\d/g, '*'));
//     }
//     result.push(arr[arr.length - 1]); 
//     return result.join('-');
// }

// let result = replaceDigitsCard('1111-2222-3333-4444');
// console.log(result);

// function findMultiples(integer, limit) {
//     let result = [];
//     for (let i = integer; i <=  limit; i += integer) {
//     result.push(i);
//     }   
//     return result;
// }
// let result = findMultiples(5, 25);
// console.log(result);

// function twoHighest(arr) {
//     arr = [... new Set(arr)]
//     arr.sort(function (a, b) {
//         return b-a
//     })
//     if (arr.length < 2) return arr
//         return [arr[0], arr[1]]
//     }


// let result = twoHighest([15, 20, 20, 17]);
// console.log(result);

// function stringy(size) {
//   let result = '';
//   for (let i = 0; i < size; i++) {
//       if (i % 2 === 0) {
//           result += '1';
//       } else {
//           result += '0';
//       }
//   }
//   return result;
// }

// let result = stringy(6);
// console.log(result);

// function getCount(str) {
//   // let str = 'abracadabra'
//   let vowels = ['a', 'e', 'i', 'o', 'u']
//   let count = 0
//   for (let letter of str) {
//     if (vowels.includes(letter)) {
//       count++
//     }
//   }
//   return count
// }
// let result = getCount('abracadabra')
// console.log(result); //5


// function disemvowel(str) {
// // let str = "This website is for losers LOL!"
// let vowels = ['a', 'e', 'i', 'o', 'u']
// let newStr = ''
// for (let letter of str) {
//   if (!vowels.includes(letter.toLowerCase())) {
//     newStr +=letter
//   }
// }
// return newStr
// }
// let result = disemvowel("This website is for losers LOL!")
// console.log(result); // "Ths wbst s fr lsrs LL!"


// function squareDigits(num) {
//   // let num = 3212
//   let newNum = ''
//   let digits = num.toString().split('') // ['3', '2', '1', '2']
//   for (let digit of digits) {
//     newNum += digit**2
//   } //newNum = '9414'
//   return +newNum //  9414
// }

// let result = squareDigits(3212)
// console.log(result); //9414

// function highAndLow(numbers) {
//   // let numbers = "8 3 -5 42 -1 0 0 -9 4 7 4 -4"
//   let numberArr = numbers.split(' ')
//   // numberArr = ['8', '3', '-5', '42', '-1', '0', '0', '-9', '4', '7', '4', '-4')]
//   let min = numberArr[0] // '8'
//   let max = numberArr[0] // '8'
//   for (number of numberArr) {
//     if (+min > +number) {
//         min = number
//     }
//     if (+max < +number) {
//       max = number
//     }
//   }
//   return max + ' ' + min
// }

// // let result = highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")
// // console.log(result); // "42 -9"

// function descendingOrder(n) {
//   // let n = 42145
//   return +(n.toString() // '42145'
//           .split('')  // ['4', '2', '1', '4', '5']
//           .sort(function (a, b) {
//             return b - a
//           })  // ['5', '4', '4', '2', '1']
//           .join('')) // '54421'
// }

// let result = descendingOrder(42145)
// console.log(result); // 54421


//  function getMiddle(s) {
//   // let s = 'testing'
//   if (s.length < 2) return s
//   let index = Math.floor((s.length - 1) / 2) // 3
//   return s.slice(index, -index)

//  }

//  let result = getMiddle('testing')
//  console.log(result); // t


// function accum(s) {
//   // let s = "RqaEzty"
//   let letters = s.split('') 
//   let repeatedLetters = letters.map(function(letter,index) {
//     return letter.toUpperCase() + letter.toLowerCase().repeat(index)
//     }) // ["R-Qq 'Aaa' Eeee-Zzzzz-Tttttt-Yyyyyyy"]
//     return repeatedLetters.join('-')

// }

// let result = accum("RqaEzty")
// console.log(result); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"

// function filter_list(l) {
//     // let newArr = []
//     // for (let elem of l) {
//     //     if (typeof elem == 'number') {
//     //         newArr.push(elem)
//     //     }
//     // }
//     // return newArr


//     // return l.filter(function(elem) {
//     //     return typeof elem == 'number'  // return true |  false
//     // })


//     return l.filter(Number.isInteger)
// }

// let result = filter_list([1,'a','b',0,15])
// console.log(result);

// var isSquare = function(n){
//     return Nuber.isInteger(Math.sqrt(n))
//   }

// function isIsogram(str) {
//     // let sorted = str.toLowerCase().split('').sort()
//     // for (let i = 0; i < sorted.length; i++) {
//     //     if (sorted[i] == sorted[i + 1]) {
//     //         return false
//     //     }
        
//     // }
//     // return true
//     return new Set(str.toLowerCase()).size == str.length
// }

// console.log(isIsogram("Dermatoglyphics"));
// console.log(isIsogram("isIsogram"))


// function XO(str) {
//    // let str = "xxOo"
//    let xCount = 0
//    let oCount = 0
//    for (let letter of str) {
//     if (letter.toLowerCase() == 'x') {
//         xCount++
//     }
//     if (letter.toLowerCase() == 'o') {
//         oCount++
//     }
//    }
//    return xCount == oCount 
// //    if (xCount == oCount) {
// //     return true
// //    } else {
// //     return false
// //    }
// }

// console.log(XO('xxOo')); // true

// Test.assertEquals(XO('xo'),true);
// Test.assertEquals(XO("xxOo"),true);