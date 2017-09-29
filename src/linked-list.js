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
      while ((temp != null ) && (temp.data != null)) {
        temp=temp.next;
        index++;
      }
      return index;
    }

    append(data) {
      if (this.node.data == null) this.node.data = data;
      else {
        var temp =  new Node();
        temp.data = data;
        temp.prev = this._tail;
        this._tail.next = temp;
        this._tail = temp;
      }
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

      if (index == 0) return this.append(data);

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
      this._head = this.node;
      this._tail = this.node;
      return this;
    }

    deleteAt(index) {//+
      var temp = this._head;
      var i = 0;
      while ((temp.next != null) && (i < index)) {
  			temp=temp.next;
  			i++;
  		}
      //edit before
      if (temp.prev != null) temp.prev.next  = temp.next;
      if (temp.next != null) temp.next.prev = temp.prev;
      return this;
    }

    reverse() {
      var tempFromHead = this._head;
      var tempFromTail = this._tail;
      var i = 0;
      var j = this.length - 1;

      while (i < j){
        var temp = tempFromHead.data;
        tempFromHead.data = tempFromTail.data;
        tempFromTail.data = temp;
        tempFromTail = tempFromTail.prev;
        tempFromHead = tempFromHead.next;
        i++;
        j--;
      }

      return this;
    }

    indexOf(data) {//+
      var temp = this.node;
      var index = 0;
      while ((temp != null) && (temp.data != data)) {
        temp = temp.next;
        index++;
      }
      return (temp == null) ? -1 : index;
    }
}

module.exports = LinkedList;
