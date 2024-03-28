public class piGaussLegendre {

  public static void main(String[] args) {
    int iterations = 3; // You can increase this for higher precision
    double pi = calculatePi(iterations);
    System.out.printf("Calculated pi: %.15f\n", pi);
  }

  public static double calculatePi(int iterations) {
    double a = 1.0; // Initial value of a
    double b = 1.0 / Math.sqrt(2.0); // Initial value of b
    double t = 0.25; // Initial value of t
    double p = 1.0; // Initial value of p

    for (int i = 0; i < iterations; i++) {
      double aNext = (a + b) / 2.0;
      double bNext = Math.sqrt(a * b);
      double tNext = t - p * Math.pow(a - aNext, 2);
      double pNext = 2 * p;

      a = aNext;
      b = bNext;
      t = tNext;
      p = pNext;
    }

    double pi = Math.pow(a + b, 2) / (4.0 * t);
    return pi;
  }
}
