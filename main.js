	/* This assignment will give you some practice with creating arrays and using their methods. */


	console.log("Challenge 1");
	// ANY time you're asked to print something from the  array, do it with a loop, printing each item you're asked to print INDIVIDUALLY.
	// 
	// 
	//
	// Challenge 1
	//
	// Loop through the following array, console.logging out each value.
	const students = [
		'Tre',
		'Sonny',
		'Crystal',
		'Ilyas',
		'Greg',
		'Fernando',
		'Timothy',
		'Patrick',
		'Steve',
		'Jimothy',
		'Pat',
		'Arnold',
		'Andy'
	];
	// Challenge 1 Code

	for (let i = 0; i < students.length; i++){
		console.log(students[i]);
	}


	console.log("\n");
	console.log("Challenge 2");
	// Challenge 2
	// Loop through the following array BACKWARDS, console.logging out each value. 64 should be printed first and 100 last.
	const grades = [100, 80, 110, 75, 83, 64];
	//Challenge 2 Code
	
	let grades_reverse = grades.reverse();
	for (let i = 0; i < grades_reverse.length; i++){
		console.log(grades_reverse[i]);
	}


	console.log("\n");
	console.log("Challenge 3");
	// Challenge 3
	// Console.log out only the even numbers in the following array.
	const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];
	// Challenge 3 Code

	let evens = []
	for (let i = 0; i < positiveNumbers.length; i++){
		if (positiveNumbers[i] % 2 === 0){
			evens.push(positiveNumbers[i]);
		}
	}
	console.log(evens)


	console.log("\n");
	console.log("Challenge 4");
	// Challenge 4
	// Console.log out the even numbers in the following array, INCLUDING the negative ones. There should be four total printings.
	const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];
	// Challenge 4 Code

	let even_nums = []
	for (let i = 0; i < mixedSignNumbers.length; i++){
		if (mixedSignNumbers[i] % 2 === 0){
			even_nums.push(mixedSignNumbers[i]);
		}
	}
	console.log(even_nums)


	console.log("\n");
	console.log("Challenge 5");
	// Challenge 5
	// Remove two values from the beginning and one value from the end of the following array, simply by deleting them in the following line. Then console.log out each value individually.
	const symmetricalCapitals = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];
	// Challenge 5 Code

	let first2 = symmetricalCapitals.splice(0, 2);
	let last1 = symmetricalCapitals.pop();
	for (let i = 0; i < symmetricalCapitals.length; i++){
		console.log(symmetricalCapitals[i]);
	}


	console.log("\n");
	console.log("Challenge 6");
	// Challenge 6
	// Add a value (your choice!) to the start of the following array and two values (of your choice) to the end simply by adding them in the following line, and then console.log out each value individually.
	const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13]; // 21, 34
	// Challenge 6 Code

	fibonacciNumbers.unshift(0)
	fibonacciNumbers.push(21)
	fibonacciNumbers.push(34)
	for (let i = 0; i < fibonacciNumbers.length; i++){
		console.log(fibonacciNumbers[i]);
	}


	console.log("\n");
	console.log("Challenge 7");
	// Challenge 7
	// Make a NEW array with 5 values of your choice, using the same syntax as the array creation from the previous 6 challenges; that is, every value should be placed within the square brackets.  Now console.log out each value individually.
	// Challenge 7 Code

	let new_str = [];
	new_str.push("three");
	new_str.push("four");
	new_str.push("five");
	new_str.unshift("two");
	new_str.unshift("one");
	for (let i = 0; i < new_str.length; i++){
		console.log(new_str[i]);
	}


	console.log("\n");
	console.log("Challenge 8");
	// Challenge 8
	// Make a new EMPTY array and fill it with five values of your choice using BOTH .push AND .unshift, and then console.log out each value individually.
	const emptyArray = [];
	// Challenge 8 Code

	emptyArray.push("eight");
	emptyArray.push("nine");
	emptyArray.push("ten");
	emptyArray.unshift("seven");
	emptyArray.unshift("six");
	for (let i = 0; i < emptyArray.length; i++){
		console.log(emptyArray[i]);
	}



	console.log("\n");
	console.log("Challenge 9");
	// Challenge 9
	// Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE), logging out each value individually.
	// Challenge 9 Code

	let new_stu = students.slice(3, 11)
	for (let i = 0; i < new_stu.length; i++){
		console.log(new_stu[i])
	}


	console.log("\n");
	console.log("Challenge 10");
	// Challenge 10
	// Loop through the `students` array from Challenge 1, making a COPY of the array , starting at index 3 and ending at index 10 (INCLUSIVE). This is very similar to string building; create a new array, loop through the old one, and put values from the original in the new one. Then log out each value of the copy indivudally.
	// Do NOT use slice, you will be using that for the next challenge!
	// Challenge 10 Code

	const new_arr = [];
	for (let i = 0; i < students.length; i++){
		new_arr.push(students[i])
	}
	new_arr.shift()
	new_arr.shift()
	new_arr.shift()
	new_arr.pop()
	new_arr.pop()
	for (let j = 0; j < new_arr.length; j++){
			console.log(new_arr[j])
	}


	console.log("\n");
	console.log("Challenge 11");
	// Challenge 11
	// Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy individually. THEN log out each value of the original array. Notice that the original array didn't get any values taken out of it, because `slice` does NOT modify the original array.
	// Challenge 11 Code

	let slicer = students.slice(3, 11);
	for (let i = 0; i < slicer.length; i++){
		console.log(slicer[i]);
	}
	console.log("===============");
	for (let i= 0; i < students.length; i++){
		console.log(students[i]);
	}


	console.log("\n");
	console.log("Challenge 12");
	// Challenge 12
	// Pull the items at indices 4-6 (inclusive) from the following array using .splice (NOT .slice!), then console.log out each item from the ORIGINAL array. Note that .splice DOES change the original array.
	const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']
	// Challenge 12 Code
	
	let splicer = dinosaurs.splice(4,3);
	for (let i = 0; i < dinosaurs.length; i++){
		console.log(dinosaurs[i]);
	}
	

	console.log("\n");
	console.log("Challenge 13");
	// Challenge 13
	// Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator". Then console.log out that string.
	// Challenge 13 Code

	let dinos = dinosaurs.concat(splicer);
	console.log(dinos.join("*"));


	console.log("\n");
	console.log("Challenge 14");
	// Challenge 14
	// Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.
	// Challenge 14 Code

	console.log(dinos.reverse());
	console.log(dinos);


	console.log("\n");
	console.log("Challenge 15");
	// Challenge 15
	// Create two new arrays.
	// Use .concat to combine those two arrays into a NEW array you make (.concat RETURNS an array). Then console.log out each value of that new array individually. Now console.log both the primaries and secondaries arrays, noting that .concat does NOT mutate the original arrays.
	// Challenge 15 Code

	const arr1 = ["Up", "Down", "Left", "Right"];
	const arr2 = ["Square", "Circle", "Triangle", "Rhombus"];
	let con_arrs = arr1.concat(arr2);
	console.log(con_arrs)
	console.log(arr1);
	console.log(arr2);


