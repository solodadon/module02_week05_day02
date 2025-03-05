/**
 * Excercise 1: Array Manipulation
 */

let colors  = ["Red", "Blue", "Green"]
console.log(colors)
// Write code below use push to add "Yellow" to the end of the array.
colors.push("Yellow")


// Write code below use unshift to add "Purple" to the beginning of the array.
colors.unshift("Purple")
console.log(colors)

// Write code below to use pop to remove the last item from the array.
colors.pop(yellow)


// Write code below to use shift to remove the first item from the array.
colors.shift(purple)



console.log(colors)
console.log(colors) [blue , green,]




/**
    Exercise 2: Sort Even and Odd Numbers
    Objective: Combine array methods with logic, control flow, and looping.

    Task:
        - Write a for loop that iterates through the numbers array from the first index to the last index.

            - Inside the loop, use an if-else statement to check if each number is even or odd.

            - If the number is even, use the push method to add it to the evenNumbers array.

            - If the number is odd, use the push method to add it to the oddNumbers array.

            - After the number is added to either array, remove it from the original numbers array using shift.

        - After the loop, Print the evenNumbers, oddNumbers, and numbers arrays to the console.

        Things to consider as you write your loop:

            - How do you programmatically determine if a number is Even or Odd?
    

    Success criteria: 
    - After your for loop executes the evenNumbers array should contain all of the even numbers
    - After your for loop executes the oddNumbers array should contain all of the odd numbers
    - After your for loop executes the numbers array should now be empty.
 */


    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    let oddNumbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    let evenNumbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
console.log(numbers)
    // write your code below

    for (let i = 0; i < numbers.length; i++) {
        let currentNumber = numbers[i];
        if (currentNumber % 2 === 0) {
            evenNumbers.push(currentNumber);
        } else {
            oddNumbers.push(currentNumber);
        }
        numbers.shift();
        i--;
    }





    // Print the three arrays to the console below, on separate lines
    console.log("Even Numbers: ", evenNumbers)
    console.log("Odd Numbers: ", oddNumbers)
    console.log("Numbers: ", numbers)
    // Print the three arrays to the console below, on separate lines




