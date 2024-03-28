function calculatePi(iterations) {
    var a = 1.0; // Initial value of a
    var b = 1.0 / Math.sqrt(2); // Initial value of b
    var t = 0.25; // Initial value of t
    var p = 1.0; // Initial value of p
    for (var i = 0; i < iterations; i++) {
        var aNext = (a + b) / 2.0;
        var bNext = Math.sqrt(a * b);
        var tNext = t - p * Math.pow(a - aNext, 2);
        var pNext = 2 * p;
        a = aNext;
        b = bNext;
        t = tNext;
        p = pNext;
    }
    var pi = Math.pow(a + b, 2) / (4 * t);
    return pi;
}
// Calculate pi with Gauss-Legendre algorithm
// Specify the number of iterations. More iterations mean higher precision.
var iterations = 3; // You can increase this for higher precision
var pi = calculatePi(iterations);
console.log("Calculated pi: ".concat(pi.toFixed(15)));
