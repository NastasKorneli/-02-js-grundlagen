// Helper Funktion - times aus Class
const times = (n, fn) => {
  const results = Array(n).fill(0); // => [0, 0, 0]
  results.forEach((x, i, r) => (r[i] = fn(i))); // => ['*','*','*' ]
  return results;
};

// times von lodash baseTimes wird in lodash über die _.times() - Funktion referenziert
// function baseTimes(n, iteratee) {
//   var index = -1,
//     result = Array(n);

//   while (++index < n) {
//     result[index] = iteratee(index);
//   }
//   return result;
// }
