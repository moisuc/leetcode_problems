"use strict";
class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}
function findDuplicateSubtrees(root) {
    const map = new Map();
    const res = [];
    function traverse(node) {
        if (!node) {
            return "#";
        }
        const left = traverse(node.left);
        const right = traverse(node.right);
        const subtree = `${node.val},${left},${right}`;
        if (map.has(subtree)) {
            map.set(subtree, map.get(subtree) + 1);
        }
        else {
            map.set(subtree, 1);
        }
        if (map.get(subtree) === 2) {
            res.push(node);
        }
        return subtree;
    }
    traverse(root);
    return res;
}
//# sourceMappingURL=findDuplicateSubtrees.js.map