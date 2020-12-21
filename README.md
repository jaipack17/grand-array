# grand-array

Easy to use Array Manipulator with tons of Array 

npm page: https://www.npmjs.com/package/grand-array

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install grand-array

```bash
npm i grand-array
```

## OR

```bash
npm install grand-array
```

# Require

```javascript
const GrandArray = require("grand-array")
```

# Functions

## Finding

```javascript

GrandArray.find(array,value) //Returns boolean

GrandArray.findMany(array,value1,value2,valueN) //returns booleans

```
## Merging and Connecting

```javascript

GrandArray.connect(array1,array2) //joins both arrays

GrandArray.merge(array1,array2) //merges the data of both arrays

```
## Removing and Adding 

```javascript

GrandArray.destroyBefore(array,index) //removes all indexes before the given index in the array

GrandArray.destroyAfter(array,index) //removes all indexes after the given index in the array

GrandArray.add(array, value) //adds the value at the end of the array

GrandArray.addMany(array, value1, value2, valueN) //adds many values at the end of the array

GrandArray.remove(array, index) //removes the specified index in the array

GrandArray.removeMany(array, index1, index2, indexN) //removes the specified indexes in the array

GrandArray.bombArray(array) //removes all the indexes in the array

```

## Sorting And Reversing

```javascript
GrandArray.sortAscending(array) //sorts the array in ascending order

GrandArray.sortDescending(array) //sorts the array in descending order

GrandArray.reverse(array) //returns the reversed array

```
## Mathematical Operations

```javascript

GrandArray.min(array) //returns minimum value in the array

GrandArray.max(array) //returns maximum value in the array

GrandArray.sum(array) //returns the sum of all values in the array

GrandArray.sumArrays(array1,array2) //returns the sum of the sum of values in both arrays

```

## Count

```javascript

GrandArray.countOfOdd(array) //returns count of odd values in the array

GrandArray.countOfEven(array) //returns count of even values in the array

GrandArray.countOfPositive(array) //returns count of positive values in the array

GrandArray.countOfNegative(array) //returns count of negative values in the array

GrandArray.countOfZero(array) //returns count of zeros in the array

GrandArray.countOfPrime(array) //returns count of prime numbers in the array

```

# New functions will be added and the package will be updated frequently







```
