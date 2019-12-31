class HashTableSet {
  constructor() {
    this.table = Array(255);
  }
  add(input) {
    if (this.table[this.hash(input, 255)]) {
      console.log("You already hashed this type of record...");
    }
    this.table[this.hash(input, 255)] = input;
  }
  check(input) {
    return (
      !!this.table[this.hash(input, 255)] ||
      console.log("No such hashed value in the table...")
    );
  }
  hash(input, max) {
    let num = 0;
    for (let i = 0; i < input.length; i++) {
      num += input.charCodeAt(i) * i;
    }
    return num % max;
  }
}

const hashSet = new HashTableSet();
hashSet.add("Heck");
hashSet.add("Spec");
hashSet.add("Spec"); // you already did that
hashSet.add("Check");
hashSet.check(10); // no such record in table
console.log(hashSet);
