function calculatePi(iterations: number): number {
  let a: number = 1.0; // Initial value of a
  let b: number = 1.0 / Math.sqrt(2); // Initial value of b
  let t: number = 0.25; // Initial value of t
  let p: number = 1.0; // Initial value of p

  for (let i = 0; i < iterations; i++) {
    let aNext: number = (a + b) / 2.0;
    let bNext: number = Math.sqrt(a * b);
    let tNext: number = t - p * Math.pow(a - aNext, 2);
    let pNext: number = 2 * p;

    a = aNext;
    b = bNext;
    t = tNext;
    p = pNext;
  }

  let pi: number = Math.pow(a + b, 2) / (4 * t);
  return pi;
}

// Calculate pi with Gauss-Legendre algorithm
// Specify the number of iterations. More iterations mean higher precision.
let iterations: number = 3; // You can increase this for higher precision
let pi: number = calculatePi(iterations);
console.log(`Calculated pi: ${pi.toFixed(15)}`);
