function sumDigitSquare(n)
{
	let sq = 0;
	while (n > 0)
	{
		var digit = n % 10
		sq += digit * digit;
		n = Math.floor(n / 10);
	}
		
	return sq;
}

// Returns true if n is Happy number
// else returns false.
function isHappy(n)
{
	// A set to store numbers during
	// repeated square sum process
	let s = [];
	s.push(n);

	// Keep replacing n with sum of
	// squares of digits until we either
	// reach 1 or we endup in a cycle
	while (true)
	{
		// Number is Happy if we reach 1
		if (n == 1)
			return true;

		// Replace n with sum of squares
		// of digits
		n = sumDigitSquare(n)
		
		
		// If n is already visited, a cycle
		// is formed, means not Happy
		if (s.includes(n))
			return false
	
		// Mark n as visited
		s.push(n)
	}
	return false;
}

/// Driver code
let n = 23
if (isHappy(n))
	console.log("Yes")
else
	console.log("No")



   function Exercise1(index) {
    
   }
const AddOne = (digits) =>
{

	// initialize an index (digit of units)
	let index = digits.length -1;

	// while the index is valid and the value at [index] ==
	// 9 set it as 0
	while (index >= 0 && digits[index] == 9)
		digits[index--] = 0;

	// if index < 0 (if all digits were 9)
	if (index < 0)
		// insert an one at the beginning of the vector
		digits.insert(digits.begin(), 1, 1);

	// else increment the value at [index]
	else
		digits[index]++;
}
// driver code

let digits = [1,2,3];

AddOne(digits);

for (let i = 0; i < digits.length; i++)
	document.write(`${digits[i]} `);


    

	function findSingle(A, ar_size)
{

	// Iterate over every element
	for (let i = 0; i < ar_size; i++) {

		// Initialize count to 0
		let count = 0;

		for (let j = 0; j < ar_size; j++) {

			// Count the frequency
			// of the element
			if (A[i] == A[j]) {
				count++;
			}
		}

		// if the frequency of the
		// element is one
		if (count == 1) {
			return A[i];
		}
	}

	// if no element exist at most once
	return -1;
}

// Driver code
let nums = [2,2,1];
let n = 7;

// Function call
document.write("Element occurring once is "
			+ findSingle(nums, n));


