/***
 * Binary Search
 * Performs a Binary search operation on the provided numbers and check if target is present
 * @params nums, target 
 * nums: Array of numbers, target is target number
 *
 * @return empty array | idx
 * empty array: if no nums or target is provided
 * idx : index of target otherwise, if not found -1
 *
 * @Time & Space Complexity 
 * Overall Time Complexity (if provided nums are not sorted ): 
 *    O(n log n + log n) = O (n log n)
 * Overall Time Complexity (if provided nums are sorted ):
 *    O (log n)
 * Overall Space Complexity: 
 *  O(1) Not extra space was used
 */


```
import alex21cBinarySearch from './index.mjs';
let nums = [25, 35, 45, 55, 75, 95];
let target = 75;
console.log(alex21cBinarySearch(nums, target));
```


import alex21cBinarySearch from "m6node-day3-npm-package-class-assignment";

in yours package.json file make sure to have 
"type": "module"
  
Returns 
-1 : Target Not found 
idx of target: otherwise
  
  
example Binary Search on Unsorted Data

let nums = [25, 75, 33, 22, 21];
let target = 75;
let idxTarget = alex21cBinarySearch(nums, target)
console.log(`${target} found at index ${idxTarget}, inside [${nums}]`);

OUTPUT:
[ 21, 22, 25, 33, 75 ]
75 found at index 4, inside 21,22,25,33,75


example Binary Search on Sorted Data
let nums = [25, 50, 75, 125, 500, 750];
let target = 35;
let idxTarget = alex21cBinarySearch(nums, target)

if(idxTarget == -1){
  console.log(`${target} Not present, inside [${nums}]`);
}else{
  console.log(`${target} found at index ${idxTarget}, inside [${nums}]`);
}

OUTPUT: 
[ 25, 50, 75, 125, 500, 750 ]
35 Not found , inside [25,50,75,125,500,750]


  
  
