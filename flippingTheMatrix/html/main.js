function flippingMatrix(matrix){
    console.log(matrix)

    let quadrantLength = matrix.length /2
    console.log('quadrantLength', quadrantLength)

    let lastIndex = matrix.length -1
    console.log('lastIndex', lastIndex)

    let arrOfmirrorNumbers = []


    for(let i = 0; i<quadrantLength;i++){
        // console.log('i',i)
        for(let j = 0;j<quadrantLength;j++){
            // console.log('j',j)
            //end of for loop j
            let a1 = matrix[i][j]
            console.log('a1', a1)
            let a2 = matrix[lastIndex -i][j]
            console.log('a2',a2)
            let a3 = matrix[i][lastIndex-j]
            console.log('a3',a3)
            let a4 = matrix[lastIndex-i][lastIndex-j]
            console.log('a4',a4)

            arrOfmirrorNumbers.push([a1,a2,a3,a4])
        
        }
        //end of for loop i
    }

    console.log('arrOfmirrorNumbers',arrOfmirrorNumbers)

    let maxNumArray = arrOfmirrorNumbers.map((el) => {
        return Math.max(...el)

    })
    console.log('maxNumArray',maxNumArray)

    let maxSum = maxNumArray.reduce((a,c)=>a+c,0)
    console.log('maxSum',maxSum)


    //end of function
}

let input1 = [
    [112,42,83,119],
    [56,125,56,49],
    [15,78,101,43],
    [62,98,114,108]
]

let input2 = [
    [1,2],
    [3,4]
]

let input3 = [
    [112,42,83,119,234,120],
    [56,125,56,49,12,81],
    [15,78,101,43,113,41],
    [62,98,114,108,43,21],
    [523,152,112,145,7,22],
    [210,76,242,41,80,11]
]

flippingMatrix(input1)