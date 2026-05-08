class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        // two pointers
        let l = 0
        let r = s.length-1;
        while (l<r) {
            let tmp = s[r];
            s[r]=s[l];
            s[l]=tmp;

            l++;
            r--;
        }
    }
}
