// sum of digits of the numbers
// =============================
// ============================
// function Sumofdigits(n) {
    
//      let sum = 0 ; 
//    while(n>0){
//     let remainder = n%10;
//      sum = sum + remainder;
//      n = Math.floor(n/10);
//    }
//    return sum



// }
// console.log(Sumofdigits(936));
// ===================================
// ====================================

// given code is automorphic or not


  // Store the square
//   function automorphic(n){
//            if(N < 0) N = -N;
//         let sq = N * N;
  
//     // Start Comparing digits
//      while (N > 0)
//     {
//         // Return false, if any 
//         // digit of N doesn't
//         // match with its square's
//         // digits from last
//         if (N % 10 != sq % 10)
//             return -1;
  
//         // Reduce N and square
//         N /= 10;
//         sq /= 10;
//     }
  
//     return 1;

//   }

// automorpjicnum number = a number whose square ends with the same digits as the number itself.
// 5:(ends in 5)
// 6:(ends in 6)
// 25:(ends in 25)
// 76: (ends in 76)
// 376:(ends in 376)
// 625: (ends in 625). 



//                                                       correct code
//                                                      =============
//   =====================================
// function isAutomorphicNum(n){
//     let sqr = n*n;
//     let temp = n ; 
//     while(temp>0){
//      if(sqr%10 != temp%10){
//           return 'No';
//      }
//      temp = Math.floor(temp/10);
    
//      sqr = Math.floor(sqr/10);
// }
// return 'Yes';

// }

// console.log(isAutomorphicNum(5));    // Yes (25)
// console.log(isAutomorphicNum(6));    // Yes (36)
// console.log(isAutomorphicNum(76));   // Yes (5776)
// console.log(isAutomorphicNum(7));    // No
   
 