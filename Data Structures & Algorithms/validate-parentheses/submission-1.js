class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    matchBrackets(first, last) {
        if(
            (first == '(' && last == ')') || 
            (first == '{' && last == '}') || 
            (first == '[' && last == ']')
            ) {
                return true
        }
        return false;
    }
    isValid(s) {
        while(s.includes('()') || s.includes('{}') || s.includes('[]')) {
            s = s.replace('()','');
            s = s.replace('{}','');
            s = s.replace('[]','');
        }
        for(let i=0; i<s.length/2; i++) {
            if(!this.matchBrackets(s[i], s[s.length-1-i])) {
                return false;
            }
        }
    return true;
    }
}
