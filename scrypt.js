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

let arr = [1,-4,7,12]
let sum = 0
for (let elem of arr) {
    if (elem  > 0) sum = sum + elem
}
console.log(sum);