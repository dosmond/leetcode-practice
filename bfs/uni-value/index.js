import { createTree } from "../../helpers/tree.js";

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    var val = root.val

    return treeHelper(root, val)
};

/**
 * 
 * @param {TreeNode} root 
 * @param {number} value
 */
var treeHelper = function(root, value) {
    var response = true
    if(root.val === value) {
        if(root.left) response &&= treeHelper(root.left, value)
        if(root.right) response &&= treeHelper(root.right, value)
    } else {
        response = false
    }

    return response
}


console.log(isUnivalTree(createTree([2,2,2,5,2])))