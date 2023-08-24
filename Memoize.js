/* 
Given a function fn, return a memoized version of that function.
A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.
You can assume there are 3 possible input functions: sum, fib, and factorial.
sum accepts two integers a and b and returns a + b.
fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.
*/

/*  
APPROACH:
1. we use an object cacheObject to store the cached results.
2.Each time the memoized function is called with a set of arguments, those arguments are converted to a JSON string and used as a key to look up the cached result.
3. If the key is found in the cacheObject, the cached result is returned.
4. Otherwise, the original function is called with the arguments, and the result is stored in the cacheObject and returned.

*/

function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      return cache[key];
    } else {
      let res = fn(...args);
      cache[key] = res;
      return res;
    }
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});

console.log(memoizedFn(2, 3)); // 5
console.log(memoizedFn(2, 3)); // 5
console.log(memoizedFn(4, 3)); // 7
console.log(callCount); // 2

/* 
Q: What is Caching?
Ans: Caching is the process of storing data in a temporary storage area, known as cache, to improve performance and reduce the amount of times  data needs to be fetched from the original source
In a 5year old language caching is like saving a cookie or a toy in your pocket so you can quickly find it later when you want to use it again. It helps make things faster and easier to find!


*/
