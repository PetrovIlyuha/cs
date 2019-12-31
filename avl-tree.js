class Tree {
  constructor() {
    this.root = null;
  }
  add(value) {
    if (!this.root) {
      this.root = new Node(value);
    } else {
      this.root.add(value);
    }
  }
}

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
    this.height = 1;
  }
  add(value) {
    if (value < this.value) {
      // go left
      if (this.left) {
        this.left.add(value);
      } else {
        this.left = new Node(value);
      }
      if (!this.right || this.right.height < this.left.height) {
        this.height = this.left.height + 1;
      }
    } else {
      if (this.right) {
        this.right.add(value);
      } else {
        this.right = new Node(value);
      }
      if (!this.left || this.right.height > this.left.height) {
        this.height = this.right.height + 1;
      }
    }
  }
}
