LinkedList
==========

Javascript Linked list

Example
-----
```JS
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
   console.log('No. '+list.pop(node).value.no+' poped');
});
```
Reslut

>No. 0 poped   
>No. 4 poped   
>{ no: 1, name: 'idkay1' }   
>{ no: 2, name: 'idkay2' }   
>{ no: 3, name: 'idkay3' }   

>---  

>No. 1 poped   
>No. 2 poped   
>No. 3 poped   