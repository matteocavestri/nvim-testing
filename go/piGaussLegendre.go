package main

import (
	"fmt"
	"math"
)

// calculatePi calculates the value of pi using the Gauss-Legendre algorithm
func calculatePi(iterations int) float64 {
	a := 1.0
	b := 1.0 / math.Sqrt2 // Same as 1.0 / math.Sqrt(2)
	t := 0.25
	p := 1.0

	for i := 0; i < iterations; i++ {
		aNext := (a + b) / 2
		b = math.Sqrt(a * b)
		t -= p * math.Pow(a-aNext, 2)
		a = aNext
		p *= 2
	}

	pi := math.Pow(a+b, 2) / (4 * t)
	return pi
}

func main() {
	iterations := 3 // You can increase this for higher precision
	pi := calculatePi(iterations)
	fmt.Printf("Calculated pi: %.15f\n", pi)
}
