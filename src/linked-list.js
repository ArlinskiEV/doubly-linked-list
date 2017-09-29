const Node = require('./node');

class LinkedList {
    constructor() {//+
      this.node = new Node();
      this._head = this.node;
      this._tail = this.node;
    }

    // геттер
    get length() {//+
      var temp = this._head;
      var index = 0;
      while (temp != this._tail) {
        temp=temp.next;
      }
      return index;
    }

    append(data) {
      var temp =  new Node();
      temp.data = data;
      temp.prev = this._tail;
      this._tail.next = temp;
      this._tail = temp;

      return this;
    }

    head() {//+
      return this._head.data;
    }

    tail() {//+
      return this._tail.data;
    }

    at(index) {//+
      var temp = this.node;
      for (var i = 0; ((i < index) && (temp.data != null)); i++) {
        temp = temp.next;
      }
      return temp.data;
    }

    insertAt(index, data) {//+
      var i = 0;
  		var temp = this.node;

      if (index == 0) return this.addFirst(data);

  		while ((temp.data != null) && (i < index)) {
  			temp = temp.next;
  			i++;
  		}

      //temp with index
      var l = new Node();
      l.next = temp.next;
      l.prev = temp;
      l.data = temp.data;

      temp.data = data;
      temp.next = l;

      return this;
    }

    isEmpty() {//+
      return this.node.data == null;
    }

    clear() {//+
      this.node = new Node();
      return this;
    }

    deleteAt(index) {//+
      var temp = this.node;
      var i = 0;
      while ((temp.next != null) && (i < index)) {
  			temp=temp.next;
  			i++;
  		}
      //edit before
      temp.prev.next = temp.next;
      temp.next.prev = temp.prev;
      return this;
    }

    reverse() {
      var temp = this.node;
      //-------------------------------------------------
      //-------------------------------------------------
      //-------------------------------------------------
      //-------------------------------------------------
      return this;
    }

    indexOf(data) {//+
      var temp = this.node;
      var index = 0;
      while ((temp.data != null) && (temp.data != data)) {
        temp = temp.next;
        index++;
      }
      return (temp.data == null) ? -1 : index;
    }
}

module.exports = LinkedList;
