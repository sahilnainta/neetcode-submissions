class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let groups = [];
        for (let str of strs) {
            let map = [];
            let charMap = Array.from({length: 26}, (_,i) => String.fromCharCode(97 + i));
            for(let i of charMap) {
                map[i] = 0;
            }
            for (let char of str) {
                map[char] = map[char] + 1;
            }
            let key = Object.entries(map).map(([key, value]) => `${key}${value}`).join('');
            if(!groups[key]) {
                groups[key] = []
            }
            groups[key].push(str);
        }
        return Object.values(groups);
    }
}
