
// concat will combine all the elements in the paremetrs, and the first level deep array content.
const array = [1];
const concat = _.concat(array, 2, [3, 6], [[4]]);
console.log('concat: ', concat);


// difference compares two arrays and removes all items from the first array that were in the second
const difference = _.difference([2, 1], [2, 3]);
console.log('difference: ', difference);


// drop will remove items from the begining of the array, second parameter will drop multiple items
const drop = _.drop([1, 2, 3, 4, 5, 6], 2);
console.log('drop: ', drop);


// dropRight same as drop but starting at the end of the array.
const dropRight = _.dropRight([1, 2, 3, 4, 5, 6], 2);
console.log('dropRight: ', dropRight);


// dropWhile will selectivly drop vales we want.
// also had dropRightWhile
const dropWhileUsers = [
  { user: 'barney', active: false },
  { user: 'fred', active: false },
  { user: 'pebbles', active: true }
];

const dropWhile = _.dropWhile(dropWhileUsers, user => !user.active);
console.log('dropwhile: ', dropWhile);

const dropWhileShorthand = _.dropWhile(dropWhileUsers, ['active', false]);
console.log('dropWhileSH: ', dropWhileShorthand);


// fill can fill an array with a specific value, or repalce values with specifc value
const fillArray = [1, 2, 3];

_.fill(fillArray, 'a');
console.log('fill: ', fillArray);

const newFill = _.fill(Array(3), 2);
console.log('newFill: ', newFill);

const fillSelection = _.fill([4, 6, 8, 10], '*', 1, 3);
console.log('fillSelection: ', fillSelection);


// flatten will remove arrays from an array and take each element and polulate the parent array, will not penatrate more than 1 level deep. 

// flattenDeep will recursivly flatten

// flattenDepth, choose the depth to flatten by passing second param as a number

const flattenArray = _.flatten([1, [2, [3, [4]], 5]]);
console.log('flattendArray: ', flattenArray);


// intersection will return the items that are repeated between two arrays, or in one array

const intersectin = _.intersection([2, 1, 1, 4, 4, 5]);
console.log('Intersection: ', intersectin);


// join works just like join method
const joined = _.join(['a', 'b', 'c'], '~');
console.log('joined: ', joined);


// nth returns the item at the specific index, or if its negative it will return that item counting back form the end

const nth = _.nth([1, 2, 3, 4, 5, 5, 6], -4);
console.log('nth: ', nth);


// pull works similar to filter and will remove specified values
const pullArray = ['a', 'b', 'c', 'a', 'b', 'c', 'd'];
const pull = _.pull(pullArray, 'a', 'c');
console.log('pull: ', pull);
