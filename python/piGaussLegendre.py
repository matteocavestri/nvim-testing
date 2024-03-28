import math

def calculate_pi(iterations):
    a = 1.0
    b = 1.0 / math.sqrt(2)
    t = 0.25
    p = 1.0

    for _ in range(iterations):
        a_next = (a + b) / 2.0
        b = math.sqrt(a * b)
        t -= p * (a - a_next) ** 2
        a = a_next
        p *= 2

    pi = (a + b) ** 2 / (4 * t)
    return pi

# Calculate pi with Gauss-Legendre algorithm
# Specify the number of iterations. More iterations mean higher precision.
iterations = 3  # You can increase this for higher precision
pi = calculate_pi(iterations)
print(f"Calculated pi: {pi:.15f}")

