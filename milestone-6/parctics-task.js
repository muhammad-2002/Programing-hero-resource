//task 03:
// const square = (x)=>{
//     let sum = 0;
//     for (const i of x){
//       let element = i*i;
//       console.log(element)
//       sum+=element;
//     }
//     const avrage = (sum /x.length)
//     return avrage, sum
    
    
// }
// const array = [1,2,3,4,5];

// console.log(square(array))

//task 04:
// const array1 = [1,2,3,4]
// const array2 = [5,6,7,6]
// const arrays =(array1, array2)=>{
//     const newArray = array1.concat(array2)
//     const maximum = Math.max(...newArray)

//     return maximum;

// }
// console.log(arrays(array1,array2))


const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output);