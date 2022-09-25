//All parameters are integers
//Return the sum of both arrays

function arrayPlusArray(arr1, arr2) {
    return arr1.reduce((a,b)=> a+ b,0) +  arr2.reduce((a,b)=> a+ b,0)
  }