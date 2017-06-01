export default function parens(input) {
  console.log("Input ==", input);

  var re =  /([^0-9].*?)/g ;
  result = input.split(re)
  console.log("Results ==", result);


  // var input = re[Symbol.split](input)
  //   var input = re[Symbol.split](input)
  //   console.log("input", input);

  //     var input = re[Symbol.split](input)
  //     console.log("input", input)
  //       var input = re[Symbol.split](input)
  //       console.log("input", input)
  //         var input = re[Symbol.split](input)
  //         console.log("input", input)
  //           var input = re[Symbol.split](input)
  //           console.log("input", input)
  //   var result = re[Symbol.split](input);
  //   console.log("Results ==", result);
}


// [ [ ['1234'], [ [ [5], 67] ] ] ]

// l = (
// r = )
// n = \d
//
// l*n //matches left paren before number
//
// n(?=r) // matches number if right paren is after number


//between each parens, push to array until no morebetween parens



//
// var x = /\d/
//
// /x(?=y)/
//
// /(0-9)/

//get
// x = (
// y = )
// a = /0-9/
//
// /\(([^)]+)\)/g
//
// leftP = x(?=a)
// rightP = y(a=?)
//
// /////////////////////////////
//
// /<.\D*?>/


// inputA = input.split(")")
// console.log(") removed ==", inputA)
//
// inputB = inputA.join(")")
// console.log("joined again ==", inputB)
//
// inputC = inputB.split("(")
// console.log("( removed ==", inputC)
//
// inputD = inputC.join("(")
// console.log("joined again ==", inputD)
//
// return inputD


//remove parens, remove empty values from array, join into string with parens on both sides.

// May need a loop so that each time a value is added, it adds a paren around the individual value, and then multiple values.

// Find numbers, then move out on either side of number, allowing one matching paren per side. If not matching, then stop.
