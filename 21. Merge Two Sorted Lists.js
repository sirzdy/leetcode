/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
var mergeKLists = function(lists) {
  var node = new ListNode(-1);
  var res = node;
  lists = lists.filter(x => x != null);
  while (1) {
    if (!lists[0]) break;
    var minVal = lists[0].val,
      minIndex = 0;
    lists.forEach(function(x, index) {
      if (x.val < minVal) {
        minVal = x.val;
        minIndex = index;
      }
    });
    node.next = lists[minIndex];
    node = node.next;
    if (lists[minIndex].next == null) {
      lists.splice(minIndex, 1);
    } else {
      lists[minIndex] = lists[minIndex].next;
    }
  }
  return res.next;
};

var a1 = new ListNode(2);
// var a2 = new ListNode(4);
// var a3 = new ListNode(7);

// a1.next = a2;
// a2.next = a3;


var b1 = new ListNode(2);
// var b2 = new ListNode(5);
// var b3 = new ListNode(8);

// b1.next = b2;
// b2.next = b3;

var c1 = new ListNode(-1);
// var c2 = new ListNode(6);
// var c3 = new ListNode(9);

// c1.next = c2;
// c2.next = c3;

console.log(mergeKLists([a1, null, c1]));
