/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    // Build adjacency list
    const graph = new Map();
    for (const [u, v] of edges) {
        if (!graph.has(u)) graph.set(u, []);
        if (!graph.has(v)) graph.set(v, []);
        graph.get(u).push(v);
        graph.get(v).push(u);
    }
    
    // Set to keep track of visited nodes
    const visited = new Set();
    
    // DFS function
    function dfs(node) {
        // If we reached the destination, return true
        if (node === destination) return true;
        
        // Mark node as visited
        visited.add(node);
        
        // Visit all neighbors
        const neighbors = graph.get(node) || [];
        for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                if (dfs(neighbor)) return true;
            }
        }
        
        return false;
    }
    
    return dfs(source);
};


var validPathIterative = function(n, edges, source, destination) {
    // Early termination
    if (source === destination) return true;
    
    // Build adjacency list
    const graph = new Map();
    for (const [u, v] of edges) {
        if (!graph.has(u)) graph.set(u, []);
        if (!graph.has(v)) graph.set(v, []);
        graph.get(u).push(v);
        graph.get(v).push(u);
    }
    
    // Set to keep track of visited nodes
    const visited = new Set([source]);
    
    // Stack for DFS
    const stack = [source];
    
    while (stack.length > 0) {
        const node = stack.pop();
        
        if (node === destination) return true;
        
        const neighbors = graph.get(node) || [];
        for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                stack.push(neighbor);
            }
        }
    }
    
    return false;
};

console.log(validPathIterative(10, [[0,7],[0,8],[6,1],[2,0],[0,4],[5,8],[4,7],[1,3],[3,5],[6,5]], 7, 5))