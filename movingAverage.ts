class MovingAverage {
  size: number;
  queue: number[];
  constructor(size: number) {
    this.size = size;
    this.queue = [];
  }

  next(val: number): number {
    this.queue.push(val);
    if (this.queue.length > this.size) {
      this.queue.shift();
    }
    return this.queue.reduce((prev, next) => prev + next) / this.queue.length;
  }
}
