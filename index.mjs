/***
 * Binary Search
 * Overall Time Complexity (if provided nums are not sorted ): 
 *    O(n log n + log n) = O (n log n)
 * Overall Time Complexity (if provided nums are sorted ):
 *    O (log n)
 * Overall Space Complexity: 
 *  O(1) Not extra space was used
 */


// Sample Data
  // let nums = [35, 2, 75, 3, 11, 7];

// Step #1 if numbers are not sorted then let me sort them
// Time Complexity : O(n)
function isDataSorted(nums){
  let ptrB= 0, ptrE=nums.length-1;
  while(ptrB<ptrE){
    if(nums.at(ptrB) > nums.at(ptrE)){
      return false;
    }
    ++ptrB; --ptrE;
  }

  // defualt is 
    return true;
}


// Step #2 Implement Binary Search Logic
// Time Complexity for Sorting: O(n log n) , as V8 engine uses quick sort
// Time Complexity for Binary Search : O( log n)
// Overall Time Complexity: O(n log n + log n) = O (n log n)
export default function alex21cBinarySearch(nums=null, target=null){
  // Safeguard: target or nums is empty
    if(!nums || !target){
      return [];
    }

  // console.log(nums);
  // Are numbers sorted?
    if(!isDataSorted(nums)){
      // console.log('numbers are not sorted');
      // let me sort them
        nums.sort((a,b)=>a-b);
      }
      console.log(nums);

  // Now implementing binary search logic by finding index of target, if it exist
      // Time Complexity : O (log n)
      let ptrB=0, ptrE=nums.length-1, ptrM;

      while(ptrB<=ptrE){
        ptrM = Math.floor((ptrB+ptrE)/2);      
        if(nums.at(ptrM) == target){
          return ptrM;
        }else if(target < nums.at(ptrM) ){
          ptrE= ptrM-1;
        }else if (target > nums.at(ptrM) ){
          ptrB = ptrM+1;
        }
      }

    // Default is Not Found
      return -1;
}


// console.log(binarySearch(nums, 2227));
