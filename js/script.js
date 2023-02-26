let arr = [1, 2, 3, 4, [1, 2, 3], [1, [2], 3]];
function UsFlat(arr) {
   let total = [];
   for (let i = 0; i < arr.length; i++) {
      Array.isArray(arr[i]) ? total = total.concat(UsFlat(arr[i])) : total.push(arr[i]);
   };
   return total;
}
console.log(
   UsFlat(arr)
);
