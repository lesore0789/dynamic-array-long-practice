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
    return this.data;
  }


  pop() {

  }

  shift() {

    // Your code here
  }

  unshift(val) {

    // Your code here
  }

  indexOf(val) {

    // Your code here
  }

  resize() {

    // Your code here
  }

}


module.exports = DynamicArray;
