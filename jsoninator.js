const _ = require('underscore'); 

const stringify = function(obj) {

  function isScalar(obj) {
    return (/string|number|boolean/).test(typeof obj);
  }

  const printArray = function(obj) {
    if(obj.length === 0) {
      return "[]";
    } else {
      const arr = [];
      _.each(obj, (el) => arr.push(stringify(el)));
      return '[' + arr + ']';
    }
  }

  const printObj = function(obj) {
    //console.log(obj);
    if(Object.keys(obj).length === 0) {
      return "{}";
    } else {
      for(let key in obj) {
        if(isScalar(key) && isScalar(obj[key])) {
          return '{"' + key + '":"' + obj[key] + '"}';
        } else if (!isScalar(key) && isScalar(obj[key])) {
          return '{' + stringify(key) + ':"' + obj[key] + '"}';
        } else if (isScalar(key) && !isScalar(obj[key])) {
          return '{"' + key + '":' + stringify(obj[key]) + '}';
        } else if (!isScalar(key) && !isScalar(obj[key])) {
          return '{' + stringify(key) + ':' + stringify(obj[key]) + '}';
        }
      }
    }
  }

  const objType = typeof obj;
  
  if(objType === 'string') { //DONE
    return "\"" + obj + "\"";
  } else if (obj === null) { //DONE
    return 'null';
  } else if(objType === 'number' || objType === 'boolean') { //DONE
    return String(obj); 
  } else if(Array.isArray(obj)) { //broken
    return printArray(obj);
  } else if(objType === 'object') { //returns object not in string
    return printObj(obj);;
  }

}

module.exports = {
  stringify: stringify
};