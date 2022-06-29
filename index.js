// Your code here
class Polygon {
  constructor(array) {
    this.array = array;
  }

  get countSides() {
    return this.array.length;
  }

  get perimeter() {
    return this.array.reduce((accum, value) => accum + value, 0);
  }
}

class Triangle extends Polygon {
  get isvalid() {
    if (!Array.isArray(this.array)) return;
    if (this.countSides() !== 3) return;
    let a = this.array[0];
    let b = this.array[1];
    let c = this.array[2];
    return a + b > c && a + c > b && b + c > a;
  }
}

class Square extends Polygon {
  get isvalid() {
    if (!Array.isArray(this.array)) return;
    if (this.countSides() !== 4) return;
    let a = this.array[0];
    let b = this.array[1];
    let c = this.array[2];
    let d = this.array[3];
    return a === b && a === c && a === d;
  }

  get area() {
    return this.array[0] * this.array[0];
  }
}
