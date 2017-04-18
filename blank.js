// function findChildren(dancingBrigade){
// dancingBrigade = dancingBrigade.split('').sort().join('');
// console.log(dancingBrigade);
// var array = [];
// for(var i=0;i<dancingBrigade.length;i++){
//   if(dancingBrigade[i] === dancingBrigade[i].toUpperCase()){
//     array.push(dancingBrigade[i]);
//     }
//     else{
//     array.push(dancingBrigade[i]);
//     }
//   }
// return array
// };
//
// console.log(findChildren('aaAAjkkkjJJ'));

//Create a program that will console log one number every second until the second reaches a specific number passed in by the user.


hh = function(i){
   setTimeout(function(){console.log(i);},(i*1000));
  }

logNum = function(num){
  for (var i = 0; i < num; i++) {
    hh(i);
  }
} 


logNum(20)
