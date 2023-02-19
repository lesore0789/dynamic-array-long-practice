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
    let first = this.data[0];
    this.length--;
    if (this.length > 0) {
      let unshifted = [];
      for (let i = 1; i <= this.length; i++) {
        unshifted[i - 1] = this.data[i];
      }
      this.data = unshifted;
    } else this.data = [];
    return first;
  }

  unshift(val) {
    let unshifted = [val];
    if (val) {
      this.length++;
      for (let i = 1; i <= this.length; i++) {
        unshifted[i] = this.data[i - 1];
      }
    }
    this.data = unshifted;
    if (this.length > this.capacity) {
      this.resize();
    }
    return unshifted;
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
