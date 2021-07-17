// //Bai1
// //C1
// function allLongestStrings(inputArray) {  
// var longest = inputArray.reduce(function( a, b) { 
//   return a.length > b.length ? a : b
// }, []);
// console.log(longest);
// }


// //C2
// var item= '';

// function allLongestStrings(inputArray) {
//   for (i=0; i<inputArray.length; i++){
//       if (inputArray[i].length > item.length){
//         item= inputArray[i].length;
//       }

//   }
//   console.log(item);

// }
// //Bai2
// function alternatingSums(a) {
//     let results = [0, 0];
//     for (let i = 0; i < a.length; i++) {
//         if (i % 2 === 0) {
//             results[0] += a[i];
//         } else {
//             results[1] += a[i];
//         }
//     }
//     return results;
// }
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  
  
  function setRandomColor() {
    $("#colorpad").css("background-color", getRandomColor());
  }