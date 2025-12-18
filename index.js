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
   
 
// isISBNvalid or not
// ============================
// ============================
// An ISBN-10 (International Standard Book Number) is a 10-digit code that uniquely identifies a book. 
// The validity of an ISBN-10 number can be determined using a specific formula. The first nine digits are multiplied by their position (i.e., 1st digit by 1, 2nd digit by 2, ..., 9th digit by 9), and the tenth digit is multiplied by 10. The sum of these products should be divisible by 11 for the ISBN-10 to be valid.


// let n = 1234567892;
// let n = 3452422385;
// let n = 0306406152;
// let n = 0131103628;
// let n = 0596007124;

// function isValidISBN(n){
  

// let copy = n , count = 0;
// while(copy>0){
//     count++;
//     copy = Math.floor(copy/10);
// }
// console.log(count);
// if(count!=10) console.log('Invalid ISBN number');
// else{
//   let sum = 0 ; 
//     while(n>0){
//       let dig = n%10;
//       sum = sum + (dig*count);
    
//       count--;
//       n = Math.floor(n/10);
      
//     }
//     console.log(sum%11==0 ? 'Valid ISBN number ' : 'invalid ISBN number');
// }
// }
// isValidISBN(1861972717); // valid
// isValidISBN(1234567892); // invalid
// isValidISBN(0306406152); // valid
// isValidISBN(0131103628); // valid
// isValidISBN(0596007124); // valid


// ===================================
// ===================================
function reverseNumber(n) {
   
    let reverseValue = 0;
    while(n>0){
        reverseValue = reverseValue*10 + n%10
        n = Math.floor(n/10)
        
    }
    return reverseValue
}

console.log(reverseNumber(1234)); // 4321
console.log(reverseNumber(1200)); // 21
console.log(reverseNumber(987654321)); // 123456789