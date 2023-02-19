class DynamicArray {

  constructor(defaultSize = 4) {
    this.capacity = defaultSize;
    this.length = 0;
    this.data = new Array(this.capacity)
  }

  read(index) {
    if(this.data[index]){
      return this.data[index]
    }
  }

  push(val) {
    if(val){
      this.length++;
      this.data[this.length -1] = val;
    }
    if (this.length > this.capacity) {
      this.resize();
    }
    return this.data;
  }


  pop() {
    if(this.length >= 0){
      let removed = this.data[this.length - 1];
      this.data[this.length - 1] = undefined;
      this.length--;
      return removed;
    } else {
      return undefined
    }
  }

  shift() {

    // Your code here
  }

  unshift(val) {

    // Your code here
  }

  indexOf(val) {
    if (this.length > 0) {
      for (let i = 0; i < this.length; i++) {
        if (this.data[i] === val) return i;
      }
      return -1;
    }
  }

  resize() {
    this.capacity *= 2;
    let data = new Array(this.capacity);
    for (let i = 0; i < this.capacity; i++) {
      data[i] = this.data[i];
    }
    this.data = data;
  }

}


module.exports = DynamicArray;
