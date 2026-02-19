// const big =  [100]

// const result = Math.max(...big)

// console.log( result);

// const result2 = Math.min(...big)
// console.log( result2)

// //   multiple array addition  
// const number = [ 10,5 ,8,20,3 ]

// let sum = 0;
//  for (  let num of number){
//      sum +=num
//  }
//  console.log(sum)
 

// //   array reverse 
//    const  mane = [ 1,2,3,4,5,6,7, ]
//     const  mane4 = mane.reverse()

//     console.log(mane4)


//     //   array reverse without using reverse method 

//     const nambar =  [ 1,2,3,4,5,6,7, ]

//     let nambar2 = []
//      for ( let  i = nambar.length - 1 ; i >= 0 ; i--){
//             nambar2.push( nambar[i])
           
//      }
//      console.log(nambar2)

//     //   check if array is sorted 

//     const sorted =  (jahid) =>{

//         for ( let i = 0 ; i < jahid.length -1 ; i++){
//              if( jahid[i] > jahid[i+1]){
//                  return false
//              }
//         }
//         return true;
        
//     }


//     const jahid = [ 1,2,3,4,5,6,7]
//     const result3 = sorted(jahid)
//     console.log(result3)

//         const jahid1 = [ 1,3,2,4,5,6,]

//        const result4 = sorted(jahid1)
//        console.log(result4)


//     //      Remove duplicates from array 

//      const arrr = [1,2,2,3,4,4,4,5,5,6,6]
//      const unique = [ ...new Set(arrr)]
//       console.log(unique)


//     //    using loop  

//     const arr1 = [ 1,2,3,4,5,6 ]

//     let arr2 = []

//      for ( let i = 0 ; i < arr1.length ; i++ ){
//          if( !arr2.includes(arr1[i])){
//              arr2.push(arr1[i])
//          }
//      }
//      console.log(arr2)

//     //  

const number = [1,2,3]
const number2 = [4,5,6]

const result = [ ...number, ...number2]

console.log(result)

const  roll = " jahid"

const result2 = [...roll]
console.log(result2)