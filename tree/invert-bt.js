import { createTree } from "../helpers/tree.js";

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  var queue = [root];

  while (queue.length) {
    var node = queue.shift();

    if (!node?.left && !node?.right) continue;

    [node.left, node.right] = [node.right, node.left];

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return root;
};

console.log(invertTree(createTree([4, 2, 7, 1, 3, 6, 9])));
