class Tripple {
  static tripple(n) {
    n = n | 1;
    return n * 3;
  }
}

class BiggerTripple extends Tripple {
  static tripple(n) {
    return super.tripple(n) * super.tripple(n);
  }
}

console.log(Tripple.tripple(2));
console.log(Tripple.tripple(10));
console.log(BiggerTripple.tripple(5));