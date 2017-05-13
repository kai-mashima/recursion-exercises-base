const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');

const getElementById = function(root, id) {
  const tree = flattenTreeToArray(root);
  for (let i = 0; i < tree.length; i++) {
    if(tree[i].id === id) {
      return tree[i]
    }
  }
};

const getElementsByClassName = function(root, className) {
  const tree = flattenTreeToArray(root);
  const classArr = [];
  for (let i = 0; i < tree.length; i++) {
    const classNames= tree[i].className;
    if (classNames !== undefined) {
      const classNameIndex = classNames.indexOf(className);
      if(classNameIndex !== -1) {
        classArr.push(tree[i]);
      }
    } 
  }
  return classArr;
};

const getElementsByTagName = function(root, tagName) {
  const tree = flattenTreeToArray(root);
  const tagNameArr = [];
  for (let i = 0; i < tree.length; i++) {
    if(tree[i].tagName === tagName) {
      tagNameArr.push(tree[i]);
    }
  }
  return tagNameArr;
};

module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName
};
