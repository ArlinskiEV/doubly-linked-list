const Node = require('./node');

class LinkedList {
    constructor() {
      this.prev = null;
      this.data = null;
      this.next = null;
    }

    // геттер
    get length() {
      var temp = this;
      var index = 0;
      while (temp != null) {
        temp = temp.next;
        index++;
      }
      return index;
    }

    append(data) {
      if (this.data == null) {
        this.data = data;
      } else {
        var temp = this;
        while (temp.next != null) {
          temp=temp.next;
        }
			temp.next=new LinkedList();
			temp.next.data=element;
      }
      return this;
    }

    addFirst(data) {
  		if (this.data == null) {
  			this.data = data;	//пустой
  		} else {
  			var temp = new List();
        //between head and next
  			temp.next = this.next;
        temp.data = this.data;
        temp.prev = this;
        this.next.prev = temp;

        //edit head
        this.next = temp;
        this.data = data;
  		}
  		return this;
  	}

    head() {
      return this.data;
    }

    tail() {
      var temp = this;
      while (temp.next != null) {
        temp=temp.next;
      }
      return temp.data;
    }

    at(index) {
      var temp = this;
      for (var i = 0; ((i < index) && (temp != null)); i++) {
        temp = temp.next;
      }
      return temp.data;
    }

    insertAt(index, data) {
      var i = 0;
  		var temp = this;
  		while ((temp != null) && (i < index - 1)) {
  			temp = temp.next;
  			i++;
  		}
  		var l = new LinkedList();
  		l.data = data;
  		l.next = temp.next;
      l.prev = temp;
      temp.next.prev = l;
  		temp.next = l;
  		return this;
    }

    isEmpty() {
      return this.data == null;
    }

    clear() {
      this.prev = null;
      this.data = null;
      this.next = null;
      return this;
    }

    deleteAt(index) {
      var temp = this;
      while (i < index - 1) {
  			temp=temp.next;
  			i++;
  		}
      temp.next = temp.next.next;
      temp.next.next.prev = temp;
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

    indexOf(data) {
      var temp = this;
      var index = 0;
      while ((temp != null) && (temp.data != data)) {
        temp = temp.next;
        i++;
      }
      return (!!temp) ? -1 : i;
    }
}

module.exports = LinkedList;
