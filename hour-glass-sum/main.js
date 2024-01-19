function hourglassSum(arr) {
  // Write your code here
  console.log(arr)
  let max = -63
  // 6x6  1 2 3 4 5 6
  for(let i = 0; i < 4; i++){
      for(let j = 0; j <4; j++){
          let sum = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] +arr[i+2][j+1]+ arr[i+2][j+2]
          
          if(sum > max){
              max = sum
          }
      }
  }
console.log('max sum = ',max)  
return max
}
hourglassSum([  
  [ 1, 1, 1, 0, 0, 0 ],
  [ 0, 1, 0, 0, 0, 0 ],
  [ 1, 1, 1, 0, 0, 0 ],
  [ 0, 0, 2, 4, 4, 0 ],
  [ 0, 0, 0, 2, 0, 0 ],
  [ 0, 0, 1, 2, 4, 0 ]
])
