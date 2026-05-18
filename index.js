function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    const match = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      const currentNum = array[j];
      if (currentNum === match) return true;
    }
  }
  return false; // if not it will return false
}

/* 
  Write the Big O time complexity of your function here

  0(n^2) .... maybe. We have two loops that runs n times. which would be n^2... n * n
  from what im looking at this notation is incredibly bad. HEHE!!! XD
*/

/* 
  Add your pseudocode here

  hasTargetSum([], target)
  iterate through array
  take current num in array and look for other num in array that adds up to target
  iterate through the remaining array and check to see if any other number in array adds up to target
  return true if two numbers equall target
  return false if not. 
*/

/*
  Add written explanation of your solution here

  The function is taking in two arguements, array of integers and target integer, than we are looping through array. After the initial loop we are taking the first element in array and subtracting it from the target and storing it in the match variable.  We are then gonna loop through the remaining elements in the array. After looping through remaining elements we are gonna set that to the currentNum variable. We will than see if the currentNum is equal to the match which we calculated at the beginning of the funciton and if so we will return true if not false. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 3, 5, 7, 10, 22], 29));

   console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");
  
  console.log("Expecting: false")
  console.log("=>", hasTargetSum([22, 33, 44, 55, 66], 100))
}

module.exports = hasTargetSum;
