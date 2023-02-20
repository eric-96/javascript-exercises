const palindromes = function (words) {
    
    let wordsNew = words.replace(/[^0-9a-z]/gi, '').toLowerCase();
    let reversedWords =  wordsNew.split('').reverse().join('');
    return wordsNew === reversedWords;
  
};

console.log(palindromes('Rats live on no evil star'))

// Do not edit below this line
module.exports = palindromes;
