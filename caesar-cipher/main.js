function caesarCipher(str,num){
    let lowerCaseStr = str.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let newStr = '';

    for(let i = 0; i<lowerCaseStr.length;i++){
        let currentLetter = lowerCaseStr[i]
        if(currentLetter === '-'){
            newStr+= currentLetter;
            continue;
        }
    let currentIndex = alphabet.indexOf(currentLetter)
    let newIndex = currentIndex + num
    

    if(newIndex > 25)newIndex = newIndex - 26
    if(newIndex < 0)newIndex = newIndex + 26
    if(str[i]===str[i].toUpperCase()){
        newStr+=alphabet[newIndex].toUpperCase()
    }

    else newStr += alphabet[newIndex]
    
    //end of for loop i
    console.log('newIndex',newIndex)
    }  
    console.log('newStr',newStr)
 //end of function   
}
caesarCipher('akjenfnaAM-njkasdIA--jnka',12)