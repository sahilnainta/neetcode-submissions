class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        for (let i=0; i<arr.length; i++) {
            let biggest = -1;
            for( let j=i+1; j<arr.length; j++) {
                if(arr[j]>biggest) {
                    biggest = arr[j];
                }
            }
        arr[i] = biggest;
        }
        arr[arr.length-1] = -1;
        return arr;
    }
}
