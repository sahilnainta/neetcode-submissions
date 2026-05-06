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
     * @return {ListNode}
     */
    reverseList(head) {
        // A->B->C->D
        // prev, current
        // current.next = previous
        let current = head;
        let previous = null;
        while (current) {
            let next = current.next;

            if(!next) {
                head = current;
            }
            current.next = previous;
            previous = current;
            current = next;
        }
        return head;
    }
}
