
/*
  LinkedList.js

  Copyright (c) 2014 idkay0

  Released under the MIT license
  http://opensource.org/licenses/MIT
*/



exports.CreateList = function(){
  return new LinkedList();
};

var LinkedList = function(e){

  var linkedList = {}; 
  var first = undefined;
  var last = undefined;
  var length = undefined;

  length = 0;
  linkedList.length = function(){
    return length;
  }

  linkedList.push = function(value, deep){
    var node = undefined;

    if(typeof deep != "undefined"){
      if(deep){
        node = new Node(JSON.parse(JSON.stringify(value)));
      }else {
        node = new Node(value);
      }
    }
    else {
      node = new Node(value);
    }

    node.next = undefined;

    if(first == undefined){
      node.previous = undefined;
      first = last = node;
    }else{
      node.previous = last;
      last.next = node;
      last = node;
    }

    length++;
  };

  linkedList.first = function(){
    return first;
  };

  linkedList.firstPop = function(){
    var node = first;
    first = first.next;
    first.previous = undefined;
    return node;
  };

  linkedList.pop = function(node){

    if(typeof node == "undefined" && last != undefined){
      var node = last;
      last = last.previous;
      last.next = undefined;
      return node;
    }

    if(node == undefined){
      return undefined;
    }

    var previous = node.previous;
    var next = node.next;

    if(previous != undefined){
      previous.next = next;
    }else {
      first = next;
    }

    if(next != undefined){
      next.previous = previous;
    }else {
      last = previous;
    }
    node.previous = undefined;
    node.next = undefined;

    length--;
    return node;
  };

  var Node = function(value){
    this.value = value;
    this.next = undefined;
  };

  linkedList.eachValue = function(callback){
    var item = this.first();
    while(item != undefined){
      var savedNext = item.next;
      callback(item.value);
      item = savedNext;
    }
    callback(undefined);
  }

  linkedList.eachNode = function(callback){
    var item = this.first();
    while(item != undefined){
      var savedNext = item.next;
      callback(item);
      item = savedNext;
    }
    callback(undefined);
  }

  linkedList.getNode = function(index, callback){
    var counter = 0;
    var item = this.first();
    while(item != undefined){
      if(counter >= index){
        // callback(item);
        if(typeof callback != "undefined"){
          callback(item);
        }
        return item;
      }
      counter++;
      item = item.next;
    }
    return undefined;  
  }

  return linkedList;
};

    


