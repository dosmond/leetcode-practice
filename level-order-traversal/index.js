import { createTree } from "../helpers/tree.js";

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return []

    let response = [[root.val]]

    if(!root.left && !root.right) return response

    let queue = []

    let level = []

    if(root.left && root.left?.val !== null && root.left?.val !== undefined ) level.push(root.left);
    if(root.right && root.right?.val !== null && root.right?.val !== undefined) level.push(root.right)

    queue.push(level)

    while(queue.length > 0) {
        let currLevel = queue.shift()
        let levelNodes = []
        let levelResponse = []

        for(let i = 0; i < currLevel.length; i++) {
            let currentNode = currLevel[i]
            if(currentNode.val != null && currentNode.val != undefined) levelResponse.push(currentNode.val)
            
            if(currentNode.left && currentNode.left?.val !== null && currentNode.left?.val !== undefined ) levelNodes.push(currentNode.left);
            if(currentNode.right && currentNode.right?.val !== null && currentNode.right?.val !== undefined ) levelNodes.push(currentNode.right);
        }

        if(levelNodes.length > 0) {
            queue.push(levelNodes)
        }

        if(levelResponse.length > 0){
            response.push(levelResponse)
        }
    }

    return response;
};

var conciseImplementation = function(root) {
    if (!root) return [];
    
    const result = [];
    const queue = [root];
    
    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel = [];
        
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            currentLevel.push(node.val);
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        
        result.push(currentLevel);
    }
    
    return result;
};


console.log(levelOrder(createTree([])))
console.log(levelOrder(createTree([1])))
console.log(levelOrder(createTree([1, 2])))
console.log(levelOrder(createTree([1,2,3,4,null,null,5])))
console.log(levelOrder(createTree([3,9,20,null,null,15,7])))