const Node = require('./node');


  class MyData {
  	constructor() {
      this.prev = null;
  		this.data = null;
  		this.next = null;
      return this;
  	}
  }

class LinkedList {

    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
      this.item = new MyData(); //wtf??
      return this;
    }

    append(data) {
      var temp = new MyData();
      temp.data = data;
      temp.next = null;
      this.tail = temp;
      if (this.length == 0) this.head = temp;
      else {
        temp.prev = this.tail.item;
      }
      this.length++;
    }

    head() {
      return this.head.item.data;
    }

    tail() {
      return this.tail.item.data;
    }

    at(index) {
      var i = 0;
      var temp = this.head;

      while ((temp != null)&&(i != index)) {
        temp = temp.next;
        i++;
      }

      if (temp != null) return temp.data;
      else {
        return null;//if not found
      }
    }

    insertAt(index, data) {
      var i = 0;
      var temp = this.head.item;

      while ((temp != null)&&(i != index)) {
        temp = temp.next;
        i++;
      }

      var inserted = new MyData();
      inserted.next = temp.next;
      inserted.data = data;
      temp = temp.prev;
      temp.next = inserted;
      this.length++;
    }

    isEmpty() {
      return this.length == 0;
    }

    clear() {
      //repeat constructor
      this.head = null;
      this.tail = null;
      this.length = 0;
      this.item = new MyData(); //wtf??
    }

    deleteAt(index) {
      var i = 0;
      var temp = this.head.item;

      while ((temp != null)&&(i != index)) {
        temp = temp.next;
        i++;
      }
      temp.data = null;
      temp.prev.next = temp.next.next;
      this.length--;
    }

    reverse() {
      var temp = [];
      while (this.head != null)
      {
        temp.push(this.head.item.data);
        this.head = this.head.item.next;
        this.length--;
      }

      this.clear();
      while (temp.length != 0) {
        this.append(temp.pop());
      }
    }

    indexOf(data) {
      var i = 0;
      var temp = this.head.item;

      while ((temp != null)&&(temp.data != data)) {
        temp = temp.next;
        i++;
      }

      if (temp != null) return i;
      else {
        return -1;//if not found
      }
    }
}

module.exports = LinkedList;
