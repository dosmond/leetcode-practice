import { createTree } from "../../helpers/tree.js";


/**
 * This was an interesting solution. By counting the depth from the bottom up instead of from the top down,
 * it makes the depth calculation easier.
 */


/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) return 0

    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};

console.log(maxDepth(createTree([3,9,20,null,null,15,7])))
console.log(maxDepth(createTree([1,null,2])))