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
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
     removeNthFromEnd(head, n) {
        // recursion
        // reverse the list -> remove nth node -> reverse the list
        // fast & slow pointers
        // 1->null

        let dummy = new ListNode(0, head);
        let fast = head;
        let slow = dummy;

        for(let i=0; i<n; i++) {
            fast = fast.next;
        }

        // 0->1->2->3->4->null
        //                ^
        //          ^

        while(fast) {
            fast = fast.next;
            slow = slow.next;
        }
        slow.next = slow.next.next;
        return dummy.next;
    }
}
