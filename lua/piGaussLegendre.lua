function calculatePi(iterations)
	local a = 1.0
	local b = 1 / math.sqrt(2)
	local t = 1 / 4.0
	local p = 1.0

	for i = 1, iterations do
		local aNext = (a + b) / 2
		local bNext = math.sqrt(a * b)
		local tNext = t - p * (a - aNext) ^ 2
		a = aNext
		b = bNext
		t = tNext
		p = 2 * p
	end

	return (a + b) ^ 2 / (4 * t)
end

-- Calculate pi with Gauss-Legendre algorithm
-- Specify the number of iterations. More iterations mean higher precision.
local iterations = 3 -- You can increase this for higher precision
local pi = calculatePi(iterations)
print(string.format("Calculated pi: %.15f", pi))
