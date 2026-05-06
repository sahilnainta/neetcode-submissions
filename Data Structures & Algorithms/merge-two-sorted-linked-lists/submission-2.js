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
        // ^
        // 1->3->7
        //       ^
        // x->1->3->4->5->6
        //       ^
        let dummy = new ListNode();
        let node = dummy;

        while (list1 && list2) {
            if(list2.val <= list1.val) {
                node.next = list2;
                list2 = list2.next;
                // list2.next = null;
            } else {
                node.next = list1;
                list1 = list1.next;
                // list1.next = null;
            }
            node = node.next;
        }

        if (list1) {
            node.next = list1;
        } else {
            node.next = list2;
        }

        return dummy.next;
    }
}
