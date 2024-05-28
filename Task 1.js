//Iterating with Async/Await: Write an async function iterateWithAsyncAwait that takes an array of values and logs each value with a delay of 1 second between logs.

const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

async function myFunction(array) {
    for (const value of array) {
        await new Promise(resolve => setTimeout(resolve, 1000)); 
        console.log(value);
    }
}

myFunction(numbers);
