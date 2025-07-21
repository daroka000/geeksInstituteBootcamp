function isAnagram(str1, str2) {
    // Clean and normalize both strings
    const normalize = str => 
      str
        .toLowerCase()           // convert to lowercase
        .replace(/\s+/g, '')     // remove all whitespace
        .split('')               // convert to array of characters
        .sort()                  // sort alphabetically
        .join('');               // join back into string
  
    return normalize(str1) === normalize(str2);
  }
console.log(isAnagram("Astronomer", "Moon starer")); 
console.log(isAnagram("School master", "The classroom")); 
console.log(isAnagram("The Morse Code", "Here come dots")); 
console.log(isAnagram("hello", "world")); 
