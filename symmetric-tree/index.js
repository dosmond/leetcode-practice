
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

import { createTree } from "../helpers/tree.js";

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root.left && !root.right) return true

    var left = root.left
    var right = root.right

    if(left && !right || right && !left) return false
    if(left?.val !== right?.val) return false

    let lQueue = [left?.left, left?.right]
    let rQueue = [right?.right, right?.left]

    while(lQueue.length > 0) {
        var lItem = lQueue.shift()
        var rItem = rQueue.shift()

        if(lItem && !rItem || rItem && !lItem) return false
        if(lItem?.val !== rItem?.val) return false
        if(!lItem && !rItem) continue;

        lQueue.push(lItem?.left, lItem?.right)
        rQueue.push(rItem?.right, rItem?.left)
    }

    return true
};

var isSymmetricRecursive = function(root) {
    if(!root.left && !root.right) return true

    var left = root.left
    var right = root.right

    if(left && !right || right && !left) return false
    if(left?.val !== right?.val) return false

    let lQueue = [left?.left, left?.right]
    let rQueue = [right?.right, right?.left]

    const response = isSymmetricRecursiveHelper(lQueue, rQueue)

    return response ?? true
}

var isSymmetricRecursiveHelper = function(lQueue, rQueue) {
    if(rQueue.length <= 0 && lQueue.length <= 0) return true;

    var lItem = lQueue.shift()
    var rItem = rQueue.shift()

    if(!lItem && !rItem) return isSymmetricRecursiveHelper(lQueue, rQueue)

    if(lItem && !rItem || rItem && !lItem) return false
    if(lItem?.val !== rItem?.val) return false

    lQueue.push(lItem?.left, lItem?.right)
    rQueue.push(rItem?.right, rItem?.left)

    return isSymmetricRecursiveHelper(lQueue, rQueue)
}


console.log(isSymmetricRecursive(createTree([1,2,2,3,4,4,3])))