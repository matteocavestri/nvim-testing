#!/bin/bash

# Function to calculate pi using Gauss-Legendre algorithm
calculate_pi() {
    local iterations=$1
    echo "scale=20; a=1; b=1/sqrt(2); t=0.25; p=1;" > piGaussLegendre.bc

    for ((i=0; i<iterations; i++)); do
        echo "
        a_next=(a+b)/2;
        b=sqrt(a*b);
        t=t-p*(a-a_next)^2;
        p=2*p;
        a=a_next;" >> piGaussLegendre.bc
    done

    echo "(a+b)^2/(4*t)" >> piGaussLegendre.bc
    bc -l piGaussLegendre.bc
}

# Calculate pi with Gauss-Legendre algorithm
# Specify the number of iterations. More iterations mean higher precision.
iterations=3 # You can increase this for higher precision
pi=$(calculate_pi $iterations)
echo "Calculated pi: $pi"

