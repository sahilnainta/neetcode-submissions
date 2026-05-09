class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let l = 0;
        let r = s.length-1;
        let cnt = 0;

        while (l < r) {
            console.log(l,s[l],r,s[r]);
            if((s[l] != s[r])) {
                if(cnt) {
                    console.log(l,r);
                    return false;
                }
                if(s[l+1] == s[r] && s[l+2] == s[r-1]) {
                    cnt += 1;
                    l++;
                } else if(s[l] == s[r-1]) {
                    cnt += 1;
                    r--;
                } else {
                    console.log(l,r);
                    return false;
                }

            }
            l++;
            r--;
        }
        return true;
    }
}
