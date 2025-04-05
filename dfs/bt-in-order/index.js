/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

import { createTree } from "../../helpers/tree.js";

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    var result = []

    const helper = (node) => {
        if(!node) return;

        if(node.left) helper(node.left);

        result.push(node.val)

        if(node.right) helper(node.right);
    }
    
    helper(root)

    return result;
};

console.log(inorderTraversal(createTree([1,2,3,4,5,null,8,null,null,6,7,9])))