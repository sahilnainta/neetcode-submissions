class Solution {

    isAplphaNumeric(char) {
        if((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
                return true;
        }
        return false;
    }
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let str = s.toLowerCase();
        let l = 0, r = str.length - 1;

        while (l<r) {
            while (l<r && !this.isAplphaNumeric(str[l])) {
                l++;
            }

            while (r>l && !this.isAplphaNumeric(str[r])) {
                r--;
            }

            if (str[l] != str[r]) {
                return false;
            }

            l++;
            r--;
        }
    return true;
    }
}
