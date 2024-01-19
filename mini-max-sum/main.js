function miniMaxSum(arr){
    let sortedArr = arr.sort((a,b)=>a-b,0)

///find min sum

    let arrOne = []
    for(let i = 0;i<sortedArr.length-1;i++){
        arrOne.push(sortedArr[i])
    //end of for loop i    
    }
    let minSum = arrOne.reduce((a,c)=>a+c,0)

//find max sum

let arrTwo = []
for(let i = sortedArr.length -1; i>0; i--){
    arrTwo.push(sortedArr[i])
//end of for loop i    
}
let maxSum = arrTwo.reduce((a,c)=>a+c,0)


console.log(minSum, maxSum)
//end of function
}
miniMaxSum([5,2,3,4,1])