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
        let stack = [];

        for (let i=0; i< s.length; i++) {
            if(s[i] == '(' || s[i] == '[' || s[i] == '{') {
                stack.push(s[i]);
            } else {
                let st = stack.pop();
                if(!this.matchBrackets(st, s[i])) {
                    return false;
                }
            }
        }
        if(stack.length == 0) {
            return true;
        }
        return false;
    }
}
