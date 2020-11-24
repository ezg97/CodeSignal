function firstDuplicate(a) {
    //ht (hash table)
    let ht = {};

    //for loop
    for(let i = 0; i < a.length; i++) {
        //if number is in ht, return the current value (because it is a duplicate)
        if (ht[a[i]] !== undefined) {
             return a[i];
        }
        //else,add to ht (first occurrence, not duplicate)
        else {
           ht[a[i]] = i; 
        }
    }
    // return -1 (nothing found)
    return -1;
    
}
