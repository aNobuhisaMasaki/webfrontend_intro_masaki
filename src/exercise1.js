const filter = function (items, iteratee, context) {
  const thisArg = context ? context : this;
  const values = [];
  // const l = items.length
  for (let i = 0, l = items.length; i < l; i++) {
    if (iteratee.call(thisArg, items[i], i, items)) {
      values.push(items[i]);
    }
  }
  // for (const item in items) {
  //   if (iteratee.call(thisArg, item)) {
  //     values.push(item);
  //   }
  // }
  return values;
};
let a = [1, 2, 3];
const filtered = filter(a, function (v) {
  return v === 2;
});
a = filtered[0];
console.log(a);
