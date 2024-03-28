function calculatePi(iterations) {
  let a = 1.0; // Initial value of a
  let b = 1.0 / Math.sqrt(2); // Initial value of b
  let t = 0.25; // Initial value of t
  let p = 1.0; // Initial value of p

  for (let i = 0; i < iterations; i++) {
    let aNext = (a + b) / 2.0;
    let bNext = Math.sqrt(a * b);
    let tNext = t - p * Math.pow(a - aNext, 2);
    let pNext = 2 * p;

    // Update values
    a = aNext;
    b = bNext;
    t = tNext;
    p = pNext;
  }

  let pi = Math.pow(a + b, 2) / (4 * t);
  return pi;
}

// Calculate pi with Gauss-Legendre algorithm
// Specify the number of iterations. More iterations mean higher precision.
let iterations = 3; // You can increase this for higher precision
let pi = calculatePi(iterations);
console.log(`Calculated pi: ${pi.toFixed(15)}`);
