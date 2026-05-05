class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let str = s.toLowerCase();
        let str1 = "";
        for (const char of str) {
            let code = char.charCodeAt(0);
            if((code>= 97 && code <=122) || (code>= 48 && code <=57)) {
                str1 += char;
            }
        }

        for (let i=0; i< Math.ceil(str1.length/2); i++) {
            if(str1[i] != str1[str1.length-1-i]) {
                return false;
            }
        }
    return true;
    }
}
