use std::f64;

fn calculate_pi(iterations: usize) -> f64 {
    let mut a = 1.0;
    let mut b = 1.0 / f64::sqrt(2.0);
    let mut t = 0.25;
    let mut p = 1.0;

    for _ in 0..iterations {
        let a_next = (a + b) / 2.0;
        b = f64::sqrt(a * b);
        t = t - p * (a - a_next).powi(2);
        a = a_next;
        p *= 2.0;
    }

    (a + b).powi(2) / (4.0 * t)
}

fn main() {
    let iterations: usize = 3; // You can increase this for higher precision
    let pi = calculate_pi(iterations);
    println!("Calculated pi: {:.15}", pi);
}

