function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 } 
 
export const createTree = (nums) => {
    if (!nums || nums.length === 0) return null;
    
    const root = new TreeNode(nums[0]);
    const queue = [root];
    let i = 1;
    
    while (queue.length > 0 && i < nums.length) {
        const node = queue.shift();
        
        // Left child
        if (i < nums.length) {
            if (nums[i] !== null) {
                node.left = new TreeNode(nums[i]);
                queue.push(node.left);
            }
            i++;
        }
        
        // Right child
        if (i < nums.length) {
            if (nums[i] !== null) {
                node.right = new TreeNode(nums[i]);
                queue.push(node.right);
            }
            i++;
        }
    }
    
    return root;
};