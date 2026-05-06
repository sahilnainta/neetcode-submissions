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
     * @return {void}
     */
    //    2->10->4->8->6<>
    // c               ^
    // c               ^
    // p            ^

    reorderList(head) {
        let current = head;
        while(current) {
            let curr = current;
            let prev = null;
            while(curr.next) {
                prev = curr;
                curr = curr.next;
            }
            if (!current.next || current.next == curr) {
                return head;
            }
            curr.next = current.next;
            prev.next = null;
            current.next = curr;
            // if(!current.next) {
            //     return head;
            // }
            current = current.next.next
        }
    return head;
    }
}
