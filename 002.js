/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let n1 = l1;
    let n2 = l2;
    let result = new ListNode(0);
    let r = result
    let font = null
    let flag = 0;

    while (n1 !== null || n2 != null){
        let a = n1 ? n1.val : 0
        let b = n2 ? n2.val : 0

        r.val = a + b + flag;

        if (r.val >= 10) {
            r.val -= 10;
            flag = 1
        }else {
            flag = 0
        }
        r.next = new ListNode(0)
        f = r
        r = r.next
        n1 = n1? n1.next : null;
        n2 = n2? n2.next : null;
    }
    if(flag == 1) {
        f.next = new ListNode(1)
    }else {
        f.next = null;
    }

    return result
};