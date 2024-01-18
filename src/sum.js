/** Partition an array into two arrays splitting odd and even.
 * partitionOddEven - 
 * @param {array[]} 
 * @returns {oddArray[],evenArray[]} 
 */
const partitionOddEven = (array) => {
      let oddArray = []
    let evenArray = []
    const result = [oddArray,evenArray];
    for (let i=0; i<array.length; i++ ){
        if (array[i] % 2 === 0 ){
            evenArray.push(array[i])
        }else {
            oddArray.push(array[i])
        }
    }
    return result;  
}

console.log(partitionOddEven([11,13,15,16,20,22]))

export { partitionOddEven };
