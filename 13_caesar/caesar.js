const caesar = function(str, shift) {
    
        // Convert the shift to be within the range of 0-25
        shift = ((shift % 26) + 26) % 26;
      
        // Split the string into an array of characters
        var chars = str.split('');
      
        // Map each character to its shifted counterpart
        var result = chars.map(function(char) {
          // Convert the character to its Unicode value
          var code = char.charCodeAt();
      
          // Shift the character's Unicode value
          if (code >= 65 && code <= 90) { // uppercase letters
            code = ((code - 65 + shift) % 26) + 65;
          } else if (code >= 97 && code <= 122) { // lowercase letters
            code = ((code - 97 + shift) % 26) + 97;
          }
      
          // Convert the Unicode value back to a character
          return String.fromCharCode(code);
        });
      
        // Join the array of characters back into a string
        return result.join('');
      };

// Do not edit below this line
module.exports = caesar;
