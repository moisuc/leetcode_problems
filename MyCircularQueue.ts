class MyCircularQueue {
  size: number;
  data: number[];
  head: number;
  tail: number;
  constructor(k: number) {
    this.size = k - 1;
    this.data = [];
    this.head = -1;
    this.tail = -1;
  }

  enQueue(value: number): boolean {
    if (this.isFull()) {
      return false;
    }

    if (this.head == -1 && this.tail == -1) {
      this.head = this.tail = 0;
      this.data[this.tail] = value;
      return true;
    }

    if (this.tail == this.size && this.head > 0) {
      this.tail = 0;
      this.data[this.tail] = value;
    } else {
      this.tail++;
      this.data[this.tail] = value;
    }

    return true;
  }

  deQueue(): boolean {
    if (this.data.length == 0 || this.head == -1) {
      return false;
    }
    if (this.data.length == 1) {
      this.head = this.tail = -1;
      return true;
    }

    if (this.head == this.tail) {
      this.head = this.tail = -1;
      return true;
    }
    if (this.head == this.size || this.head == -1) {
      this.head = 0;
    } else {
      this.head++;
    }
    return true;
  }

  Front(): number {
    if (this.head === -1 && this.tail === -1) {
      return -1;
    }

    return this.data[this.head];
  }

  Rear(): number {
    if (this.head === -1 || this.tail === -1) {
      return -1;
    }
    return this.data[this.tail];
  }

  isEmpty(): boolean {
    return this.head === -1;
  }

  isFull(): boolean {
    if (this.head == 0 && this.tail == this.size) {
      return true;
    }
    if (this.head - this.tail == 1) {
      return true;
    }
    return false;
  }
}

let myCircularQueue = new MyCircularQueue(6);
console.log(myCircularQueue.enQueue(6));
console.log(myCircularQueue.Rear()); //6
console.log(myCircularQueue.Rear()); //6
console.log(myCircularQueue.deQueue());
console.log(myCircularQueue.enQueue(5));
console.log(myCircularQueue.Rear()); //5
console.log(myCircularQueue.deQueue()); //true
console.log(myCircularQueue.Front());
console.log(myCircularQueue.deQueue());
console.log(myCircularQueue.deQueue());
console.log(myCircularQueue.deQueue());
