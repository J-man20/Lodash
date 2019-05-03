const _ = {
 //_.clamp method
clamp(number, lower, upper){
    let lowerClampedValue = Math.max(number, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  //_.inRange method
inRange(number, start, end){
    if (end === undefined){
      end = start;
      start = 0;
    }
    if (start > end){
      let temp = end;
      end = start;
      start = temp;
    }
    
  return number >= start && number < end;
  },
  //_.words method
  words(string){
    let words = string.split(' ');
    return words;
  },
  //_.pad method
pad(string, length){
  if (length <= string.length){
    return string;
}
  let startPaddingLength = Math.floor((length - string.length)/2);
  let endPaddingLength = Math.floor(length - string.length - startPaddingLength);
  let paddedString = 
    ' '.repeat(startPaddingLength) + string + 
    ' '.repeat(endPaddingLength);
return paddedString;
},
  //_.has method
has(object, key){
  let hasValue = (object[key] !== undefined);
  return hasValue;
},
  
  //_.invert method
invert(object) {
  let invertedObject = {};
  for (let key in object) {
  let originalValue = object[key];
  invertedObject[originalValue] = key;
};
return invertedObject;
},
  //_.findKey method
findKey(object, predicate){
    for(let key in object){
      let value = object[key];
      let predicateReturnValue = predicate(value);
      if (predicateReturnValue === true){
        return key;
      }else {
        return undefined;
      }
    }
  },
  //_.drop method
drop(array, n){
  if(n === undefined){
    n = 1;
    };
    let droppedArray = array.slice(n);
    return droppedArray;
  },
  //_.dropWhile method
dropWhile(array, predicate){
    let dropNumber = array.findIndex((element, index) =>{
  return !predicate(element, index, array)});
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },
  //_.chunk method
chunk(array, size){
    if(size === undefined){
      size = 1;
    };
    let arrayChunks = [];
    for(let i = 0; i < array.length; i+= size){
      let arrayChunk = array.slice(i, i + size);
      arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
  }
  
};

// Do not write or modify code below this line.
module.exports = _;
