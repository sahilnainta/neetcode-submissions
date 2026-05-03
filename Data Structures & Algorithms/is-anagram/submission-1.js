class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) {
            return false;
        }
        let map1 = new Map();
        let map2 = new Map();
        for(let i=0; i<s.length; i++) {
            map1.set(s[i], (map1.get(s[i]) || 0) + 1);
            map2.set(t[i], (map2.get(t[i]) || 0) + 1);
        }
        if(map1.size !== map2.size) {
            return false;
        }

        console.log(map1, map2);

        for (let [key, val] of map1) {
            if(!map2.has(key) || map2.get(key) !== val) {
                console.log('3', key, val);
                return false
            }
        }
        return true;
    }
}
