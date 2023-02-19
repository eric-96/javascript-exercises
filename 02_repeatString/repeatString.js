//1st
const repeatString = function(str, number) {
    
    let theWord = ''
    let errorMsg = 'ERROR'

    if (number < 0){
    return errorMsg;
    }
    for (let i = 0 ; i < number; i++) {
        theWord += str;
    }   
    return theWord;
}


// Do not edit below this line
module.exports = repeatString;
