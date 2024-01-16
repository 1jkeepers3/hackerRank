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

    if(newIndex > 25) newIndex = newIndex - 26
    if(newIndex < 0) newIndex = newIndex + 26
    else{
        newStr += alphabet[newIndex]
        
    }
    //end of for loop i
    }  
    console.log('newStr',newStr)
 //end of function   
}
caesarCipher('aoai-jrlkamAKLRFAKklam-lakmdscam-ALDA',-4)