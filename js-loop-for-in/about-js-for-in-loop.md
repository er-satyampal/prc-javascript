#The For In Loop:
The JavaScript for in statement loops through the properties of an Object:
Example
       for (variable in array) {
  code
}




#Do not use for in over an Array if the index order is important.:

The index order is implementation-dependent, and array values may not be accessed in the order you expect.

It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.