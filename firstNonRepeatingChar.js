function firstNotRepeatingCharacter(s) {
    //initate a hash table
    let ht = {};

    // for loop through the string
    for (let char of s) {
        //if the char doesn't exist in the string, add it
        if (ht[char] === undefined) {
            ht[char] = 1;
        }
        // else increment
        else {
            ht[char] = (ht[char]+1);
        }
    }
    // for loop through the string again
    for (let char of s) {
        //if the object's value is 1, it's the first nonrepeating character, return it
        if (ht[char] === 1) return char;
    }
    return '_';
}
