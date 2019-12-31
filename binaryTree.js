class Tree {
  constructor() {
    this.root = null;
  }
  add(value) {
    if (this.root === null) {
      // no head --> create new head
      this.root = new Node(value);
      return;
    }
    let current = this.root;
    while (true) {
      if (current.value > value) {
        // go left
        if (current.left) {
          current = current.left;
        } else {
          current.left = new Node(value);
          break;
        }
      } else {
        // go right
        if (current.right) {
          current = current.right;
        } else {
          current.right = new Node(value);
          break;
        }
      }
    }
  }
}

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

let bst = new Tree();
bst.add(4);
bst.add(3);
bst.add(5);

console.log(bst);
