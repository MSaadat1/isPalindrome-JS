//there is lots of comments to explain it clearly
// writing isPalindrome function means the letter of string matches
// from beginning to end with each other: ex: racecar
//edge case : ignore spaces,punctuation, case different
function isPalindrome(str){
str = cleanString(str) // for clear string
if(str.length <= 1){
    return true;
}
// the above stops the calling function by it self which is called recursive,
// it continues until the character's length is = or less than 1
if(str[0] !== str[str.length - 1]){
    return false;
}
// the above compares the first character with last character
// return false if they are not the same
return isPalindrome(str.slice(1, -1));
// the above is calling function by itself until it reaches to the character which is = or < than 1

}

function cleanString(str){
    return str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
}
//the above function is for edge cases so we call it at the beginning of isPlindrome function

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));