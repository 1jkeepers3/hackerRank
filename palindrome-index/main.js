function palindromeIndex(s) {
    // Write your code here
let index0 = 0
let index1 = s.length-1
let answer = -1

while(index1 > index0){
    if(s[index0] == s[index1]){
        index0 = index0 +1
        index1 = index1 -1
    }
    else{
        //trying by removing index0
        if(s[index0+1] == s[index1]){
            answer = index0
            break;
        }
        //trying by removing index1
        else if(s[index0] == s[index1 - 1]){
            answer = index1;
            break;
        }else{
            return -1
            
        }
    }
//end of while loop    
}
return answer;
//end of function
}
palindromeIndex('abcdmedcba')