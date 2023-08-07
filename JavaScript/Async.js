/**
 * Explain Callback and Callback Hell
 * Explain Promise and Promise API
 * Explain Async and Await
 * Snippets
 */

/**
 * Callback
 * - A callback function is a function that is passed as an 
 *   argument to another function and is executed at a specific 
 *   point in the execution of that function. 
 * - It is use handle asynchronous tasks such as making api calls
 * */


// A function that simulates an asynchronous operation
function fetchDataFromServer(callback) {
    setTimeout(function () {
        const data = { name: "John", age: 30 };
        callback(data);
    }, 2000); // Simulating a delay of 2 seconds
}

// Callback function to handle the data received from the server
function processData(data) {
 console.log("Received data:", data);
}

// Using the fetchDataFromServer function with the processData callback
fetchDataFromServer(processData);


/**
 * Callback Hell
 * - Callback Hell occurs when you have multiple asynchronous   *   operations that depend on the results of each other, 
 *   and you handle them with nested callbacks. This can lead   *   to code that looks like a pyramid, making it hard to
 *   follow the program flow  
 * - It is also called as pyramid of doom 
 * - Code Becomes difficult to read, maintain, or understand
 *   due to deeply nested callbacks or multiple levels of
 *   indentation
 */

asyncOperation1(function(result1) {
    asyncOperation2(result1, function(result2) {
      asyncOperation3(result2, function(result3) {
        // More nested callbacks...
      });
    });
});
  