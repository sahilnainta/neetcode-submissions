/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        // 4->5->6
        // 1->3->7
        // 1->3->4->null
        let curr1 = list1;
        let curr2 = list2;
        let curr3 = null;
        let mergedList = null;
        while(curr1 || curr2) {
            if (!curr1) {
                if(curr3) {
                    curr3.next = curr2;
                } else {
                    mergedList = curr2
                }

                return mergedList;
            }

            if(!curr2) {
                if(curr3) {
                    curr3.next = curr1; 
                } else {
                    mergedList = curr1
                }
                 
                return mergedList;
            }
            while(curr2 && (curr2.val <= curr1.val)) {
                let node = new ListNode(curr2.val);
                if(!mergedList) {
                    mergedList = node;
                    curr3 = node;
                } else {
                    curr3.next = node;
                    curr3 = curr3.next;
                }
                curr2 = curr2.next;
            }
            let node = new ListNode(curr1.val);
            if(!mergedList) {
                mergedList = node;
                curr3 = node;
            } else {
                curr3.next = node;
                curr3 = curr3.next;
            }

            curr1 = curr1.next;
        }
        return mergedList;
    }
}
