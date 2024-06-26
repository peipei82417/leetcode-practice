/*
102. Binary Tree Level Order Traversal

create by 2024/04/22

Time Complexity
    total: O(n)
Space Complexity
    total: O(n)
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    const results = [];
    if (!root) {
        return results;
    }
    const queue = [root];
    while (queue.length) {
        const result = [];
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            result.push(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        results.push(result);
    }
    return results;
};

const node5 = new TreeNode(7, null, null);
const node4 = new TreeNode(15, null, null);
const node3 = new TreeNode(20, node4, node5);
const node2 = new TreeNode(9, null, null);
const node1 = new TreeNode(3, node2, node3);

console.log(levelOrder(node1));
