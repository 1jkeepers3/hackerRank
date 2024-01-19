function superDigit(n, k) {
 
    // Write your code here
    console.log('n =',n,'k =',k)

let nStr = n.toString()
console.log('nStr',nStr)

if(nStr.length === 1){
    console.log(n)
    //return n
}

let nStrConcat = ''

for(let j = 1; j<=k; j++){
    nStrConcat +=nStr
//end of for loop k    
}

console.log('nStrConcat',nStrConcat)

let nStrArr = nStrConcat.split('')
console.log('nStrArr',nStrArr)


let nStrArrNum = []
for(let i = 0; i<nStrArr.length; i++){
    nStrArrNum.push(Number(nStrArr[i]))
//end of for loop i    
}
console.log('nStrArrNum',nStrArrNum)

let sumA = nStrArrNum.reduce((a,c)=>a+c,0)
console.log('sumA',sumA)


//end of function
}
superDigit(8, 3)



