/* a = [
  [1, 2, 3, 4],
  [2, 4, 3, 1],
  [5, 6, 7],
  [2, 1 , 1, 4]
]
 
 Result : 
[
[0, 1],
[2],
[3]
] */

function returnMeanArray(arr) {

 let avgArray = [];
 let average = 0;

	for (let i=0; i<arr.length; i++) {
  	average = arr[i].reduce(function (sum, value) {
        return sum + value;
    }, 0) / arr[i].length;
    
    avgArray.push(average);
  }
  
  let finalObj = {};
  
  for (let i=0; i<avgArray.length; i++) {
  if (!finalObj[avgArray[i]]) finalObj[avgArray[i]] = [];
  finalObj[avgArray[i]].push(i) ;
  }
  
  let result = [...Object.values(finalObj)];
  console.log(avgArray);
  console.log(finalObj);
  
  return result;

}


let inpuTArray = [
  [1, 2, 3, 4],
  [2, 4, 3, 1],
  [5, 6, 7],
  [2, 1 , 1, 4000],
  [2, 1 , 1, 4000]
]
let result = returnMeanArray(inpuTArray);
 console.log(result);
