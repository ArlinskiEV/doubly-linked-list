const Node = require('./node');

class LinkedList {
    constructor() {//+
      this._head = null;
      this.data = null;
      this._tail = null;
    }

    // геттер
    get length() {//+
      var temp = this;
      var index = 0;
      while ((temp!= null) && (temp.data != null)) {  //to tail
        temp = temp._tail;
        index++;
      }

      if (temp != null) temp = this._head;
      while ((temp != null) && (temp.data != null)) {  //to head
        temp = temp._head;
        index++;
      }
      return index;
    }

    append(data) { //to tail+
      if (this.data == null) {
        this._head = null;
        this.data = data;
        this._tail = null;
      } else {
        var temp = this;
        while (temp._tail != null) {
          temp = temp._tail;
        }
			temp._tail = new LinkedList();
			temp._tail.data = data;
      temp._tail._head = temp;
      temp._tail._tail = null;
      }

      return this;
    }

    addFirst(data) {//+
  		if (this.data == null) {
        this._tail = null;
  			this.data = data;	//пустой
        this._head = null;
  		} else {
  			var temp = new List();
        //between head and _tail, this=head
  			temp._tail = this._tail;
        temp.data = this.data;
        temp._head = this;

        //edit second
        if (this._tail != null) this._tail._head = temp;

        //edit head
        this._tail = temp;
        this.data = data;
  		}
  		return this;
  	}

    head() {//+
      return this.data;
    }

    tail() {//+
      var temp = this;
      while (temp._tail != null) {
        temp = temp._tail;
      }
      return temp.data;
    }

    at(index) {//+
      var temp = this;
      for (var i = 0; ((i < index) && (temp != null)); i++) {
        temp = temp._tail;
      }
      return temp.data;
    }

    insertAt(index, data) {//+
      var i = 0;
  		var temp = this;

      if (index == 0) return this.addFirst(data);

  		while ((temp != null) && (i < index - 1)) {
  			temp = temp._tail;
  			i++;
  		}

      //temp with index-1
  		var l = new LinkedList();
  		l.data = data;
  		l._tail = temp._tail;
      l._head = temp;
      temp._tail._head = l;
  		temp._tail = l;

      return this;
    }

    isEmpty() {//+
      return this.data == null;
    }

    clear() {//+
      this._head = null;
      this.data = null;
      this._tail = null;
      return this;
    }

    deleteAt(index) {//+
      var temp = this;
      var i = 0;
      while ((temp._tail != null) && (i < index - 1)) {
  			temp=temp._tail;
  			i++;
  		}
      //edit before
      if (temp._tail != null) {
        temp._tail = temp._tail._tail;
        //edit after
        if (temp._tail._tail != null) temp._tail._tail._head = temp;
      }
      return this;
    }

    reverse() {
      var temp = this;
      //-------------------------------------------------
      //-------------------------------------------------
      //-------------------------------------------------
      //-------------------------------------------------
      return this;
    }

    indexOf(data) {//+
      var temp = this;
      var index = 0;
      while ((temp != null) && (temp.data != data)) {
        temp = temp._tail;
        index++;
      }
      return (temp == null) ? -1 : index;
    }
}

module.exports = LinkedList;
