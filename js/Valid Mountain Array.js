// Given an array of integers arr, return true if and only if it is a valid mountain array.

// Recall that arr is a mountain array if and only if:

// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
var validMountainArray = function (arr) {
  if (arr.length < 3) {
    return false;
  }
  var peek = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      return false;
    }
    if (arr[i] < arr[i + 1]) {
      continue;
    } else {
      peek = i;
      if (peek == 0 || peek == arr.length - 1) {
        return false;
      }
      for (let j = peek; j < arr.length; j++) {
        if (arr[j] <= arr[j + 1]) {
          return false;
        }
      }
      return true;
    }
  }
};
