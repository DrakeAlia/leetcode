let arr = ['a', 'b', 'c']
// console.log(arr)
// console.log(arr[0])
let arr2 = []
// arr2.push(arr[0])
// console.log(arr2[0])
// arr2.push(arr[1])
// console.log(arr2[1])
// arr2.push(arr[2])
// console.log(arr2[2])

// for (let i = 0; i < arr.length; i++) {
//   arr2.push(arr[i])
//   console.log(i)
// }

for (let i = arr.length - 1; i >= 0; i--) {
    arr2.push(arr[i])
}
console.log(arr2)