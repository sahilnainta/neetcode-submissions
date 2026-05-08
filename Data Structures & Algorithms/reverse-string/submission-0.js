class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        // two pointers
        for(let i=0; i<Math.floor(s.length/2); i++) {
            let tmp = s[s.length-1-i];
            s[s.length-1-i] = s[i];
            s[i] = tmp;
        }
    }
}
