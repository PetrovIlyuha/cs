// class ArrayList {
//   constructor() {
//     this.length = 0;
//     this.data = {};
//   }
//   push(value) {
//     this.length++;
//     this.data = { ...this.data, [this.length]: value };
//   }
//   pop() {
//     if (this.length > 0) {
//       this.length--;
//     } else {
//       return console.log("Array List Is Empty");
//     }
//     this.data = Object.fromEntries(
//       Object.entries(this.data).splice(this.length, -1)
//     );
//   }
//   get(index) {
//     for (let [i, value] of Object.entries(this.data)) {
//       if (Number(i) === index) {
//         return value;
//       }
//     }
//     console.log(Object.entries(this.data));
//   }
//   delete(index) {
//     if (this.length > 0) {
//       this.length--;
//       for (let [i, value] of Object.entries(this.data)){
//         if (Number(i) === index) {
//           return Object.fromEntries(Object.entries(this.data).splice(index,1));
//         }
//       }
//     } else {
//       return console.log("Array List Is Empty");
//     }
//   }
//   _collapseTo(index) {

//   }
// }

// const newestArray = new ArrayList();
// newestArray.push(5);
// newestArray.push(6);
// newestArray.push(7);
// newestArray.push(8);
// newestArray.delete(2);

class ArrayList {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(value) {
    this.data[this.length] = value;
    this.length++;
  }
  pop() {
    // const output = this.data[this.length - 1];
    // delete this.data[this.length - 1];
    // this.length--;
    // return output;
    return this.delete(this.length - 1);
  }
  get(index) {
    return this.data[index];
  }
  delete(index) {
    const output = this.data[index];
    this._collapseTo(index);
    return output;
  }
  _collapseTo(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newestArray = new ArrayList();
newestArray.push(5);
newestArray.push(6);
newestArray.push(7);
newestArray.push(8);
newestArray.pop();
newestArray.delete(0);
console.log(newestArray);
