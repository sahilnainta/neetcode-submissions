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

    //   0->1->4->2->3->5->6->7<>
    // s             ^
    // f                        ^
    // n    ^
    //   0->4 

    // 0->1->2->3->4->5->6-><>
    // 6->5->4-><>
    // 0->6->2->3->4->5->6-><>
  

    reorderList(head) {
        let current = head;
        let slow = head;
        let fast = head;
        // Find middle of list using slow and fast pointers
        while(fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        //split into 2 lists
        let list1 = head;
        let list2 = slow.next;
        slow.next=null;


        // reverse 2nd list
        // 5->6->7->null
        // ^
        // 6->5->7->null
        //    ^
        // 7->6->5->null
        let curr = list2
        while(curr?.next) {
            let tmp = curr.next; 
            curr.next = tmp.next;
            tmp.next = list2;
            list2 = tmp;
        }

        console.log(list1.next, list2);

        //merge 2 lists
        // 2->4->null
        // 8->6->null
        // 2->8->4->null
        // 6->null
        let node1, node2;
        while (list1 && list2) {
            node1 = list1.next;
            node2 = list2.next;
            list2.next = list1.next;
            list1.next = list2;
            list2 = node2;
            list1 = node1;
        }
    }
}

