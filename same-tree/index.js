/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(p?.val != q?.val) return false

    if(!p && !q) return true

    let Pqueue = [p]
    let Qqueue = [q]

    while(Pqueue.length > 0) {
        var pItem = Pqueue.pop();
        var qItem = Qqueue.pop();

        if(pItem && !qItem || qItem && !pItem) return false;
        
        if(pItem.left?.val === qItem.left?.val) {
            if(pItem.left){
                Pqueue.push(pItem.left)
                Qqueue.push(qItem.left)
            }
        } else {
            return false;
        }

        if(pItem.right?.val === qItem.right?.val) {
            if(pItem.right) {
                Pqueue.push(pItem.right)
                Qqueue.push(qItem.right)
            }
            
        } else {
            return false
        }
    }

    return true
};