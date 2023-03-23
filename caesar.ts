// Type: Alphabet
type Alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

/**
 * Encode a string using the Caesar Cipher.
 * @param str The string to be encoded.
 * @param shift The number of positions to shift each character in the alphabet.
 * @returns The encoded string.
 */
const caesarCipher = (str: string, shift: number): string => {
  // Alphabet
  const alphabet: Alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // Encoded Text
  let encodedText = '';

  // Handle shift values greater than 26
  shift = shift % 26;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // Valid alphabet characters
    if (alphabet.indexOf(char.toUpperCase()) !== -1) {
      // Find alphabet index
      const alphabetIndex = alphabet.indexOf(char.toUpperCase());

      // Alphabet index is in alphabet range
      if (alphabet[alphabetIndex + shift]) {
        // Append to string
        encodedText += alphabet[alphabetIndex + shift];
      }
      // Alphabet index out of range (adjust alphabet by 26 characters)
      else {
        // Append to string
        encodedText += alphabet[alphabetIndex + shift - 26];
      }
    }
    // Special characters
    else {
      // Append to string
      encodedText += char;
    }
  }

  return encodedText;
};

// Print the output to test for correct output
console.log(caesarCipher('GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.', 39)); // Should print "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."
