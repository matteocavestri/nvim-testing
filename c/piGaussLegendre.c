#include <math.h>
#include <stdio.h>

// Function prototypes
void gauss_legendre_pi(int iterations);

int main() {
  // Calculate pi with Gauss-Legendre algorithm
  // Specify the number of iterations. More iterations mean higher precision.
  int iterations = 3; // You can increase this for higher precision
  gauss_legendre_pi(iterations);

  return 0;
}

void gauss_legendre_pi(int iterations) {
  // Initial values based on the algorithm
  double a = 1.0;           // Initial value of a
  double b = 1.0 / sqrt(2); // Initial value of b
  double t = 1.0 / 4.0;     // Initial value of t
  double p = 1.0;           // Initial value of p

  for (int i = 0; i < iterations; i++) {
    double a_next, b_next, t_next, p_next;

    // Calculate next values
    a_next = (a + b) / 2;
    b_next = sqrt(a * b);
    t_next = t - p * pow(a - a_next, 2);
    p_next = 2 * p;

    // Update values
    a = a_next;
    b = b_next;
    t = t_next;
    p = p_next;
  }

  // Calculate pi
  double pi = pow(a + b, 2) / (4 * t);

  // Print the calculated value of pi
  printf("Calculated pi: %.15f\n", pi);
}
