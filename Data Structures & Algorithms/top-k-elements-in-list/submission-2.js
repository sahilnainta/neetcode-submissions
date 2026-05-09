class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
    // build a frequency map
    // '1': [1,2,3], '2': [2,3], '3': [3]
    // '1': 1, '2': 2, '3': 3
    let feqMap = new Map();
    for (let num of nums) {
        feqMap.set(num, (feqMap.get(num) || 0) + 1);
    }
    let sorted = [...feqMap].sort((a,b) => b[1]-a[1]);
    // console.log(sorted);
    let result = sorted.slice(0,k).map((arr) => arr[0]);
    // console.log(result);
    return result;
    }
}
