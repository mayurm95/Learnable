/**
 * What is Closures ?
 * What is Currying ?
 * Explain real usecases of closure
 * Snippet
 */


function memoizedFunction() {
    var cache = {};
    return function(input) {
      console.log('cache', cache);
      if (input in cache) {
        return cache[input];
      } else {
        var result = input * 3
        cache[input] = result;
        return result;
      }
    };
  }
  
  var memoized = memoizedFunction();
  console.log(memoized(1));  // Computes and caches result for 'input'
  console.log(memoized(2));  // Retrieves cached result for 'input'
  