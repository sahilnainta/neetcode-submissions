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

    // 1->2->3->4->null
    //       ^
    constructor() {
        this.sel = null;
    }

    traverseToEnd(node, n) {
        if (node == null) {
            return 0;
        }
        let count = this.traverseToEnd(node.next, n);

        if(count == n) {
            node.next = node.next.next;
        }
        return count + 1;
    }

    removeNthFromEnd(head, n) {
        // recursion
        // reverse the list -> remove nth node -> reverse the list

        let dummy = new ListNode(0, head);
        this.traverseToEnd(dummy, n);
        return dummy.next;
    }
}
