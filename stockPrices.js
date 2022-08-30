array = [1, 8, 12, 6, 18, 10, 87, 9]
// const best = array => {
//   big = array[0]
//   small = array[0]
//   for (i = 0; i < array.length; i++) {
//     if (array[i] > big) {
//       big = array[i]
//     }
//     if (array[i] < small){
//       small = array[i]
//     }
//   }
// return console.log(`buy at ${small}, sell at ${big}`)
// }

const best = array => {
  array.sort((a,b) => a - b)
  return console.log(`buy at ${array[0]}, sell at ${array[array.length -1]}`)
}

best(array)