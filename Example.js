/*
  Example.js

  Copyright (c) 2014 idkay0

  Released under the MIT license
  http://opensource.org/licenses/MIT
*/

var LinkedList = require('./LinkedList');

var data = {no:1, name:'idkay1'};
var list = LinkedList.CreateList();

list.push({no:0, name:'idkay0'});  //no 0
list.push(data,true);  //no 1
list.push(data);       //no 2
list.push({no:3, name:'idkay3'}); //no 3
list.push({no:4, name:'idkay4'}); //no 4

//deep copy test;
data.no = 2;
data.name = 'idkay2';

//pop test
console.log('No. '+list.firstPop().value.no+' poped');
console.log('No. '+list.pop().value.no+' poped');

list.eachValue(function(value){
  console.log(value);
});

console.log('---');

list.eachNode(function(node){
  if(node != undefined){
    console.log('No. '+list.pop(node).value.no+' poped');
  }
});