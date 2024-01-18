function gridChallenge(grid) {
let cur = []

for(let i =0; i<grid.length;i++){
    let text = grid[i].split('').sort()
    cur.push(text)
//end of for loop i    
}

let column = cur[0].length

for(let j = 0; j<cur.length-1;j++){
    for(let k=0;k<column;k++){
        if(cur[j][k] > cur[j+1][k]){ 
            return 'NO'
        }
    //end of for loop k    
    }
//end of for loop j    
}
return 'YES'
//end of function
}
gridChallenge(['ebrcd', 'fghij', 'olmkn', 'trpqs', 'xywuv'])