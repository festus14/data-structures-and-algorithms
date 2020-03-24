var addTwoNumbers = function(l1, l2) {
    let tail = new ListNode();
    let newNode = tail
    let carry = 0;

    while (l1 || l2) {
        newNode.next = new ListNode();
        newNode = newNode.next;
        let temp;
        if (!l1) {
            temp = l2.val + carry;
            l2 = l2.next
        } else if (!l2) {
            temp = l1.val + carry;
            l1 = l1.next;
        } else {
            temp = l1.val + l2.val + carry;

            l1 = l1.next;
            l2 = l2.next;
        }

        if (temp < 10) {
            newNode.val = temp;
            carry = 0;
        } else {
            newNode.val = temp - 10;
            carry = 1;
        }

    }

    if (!l1 && !l2 && carry === 1) {
        newNode.next = new ListNode(carry);
    }

    return tail.next;
};