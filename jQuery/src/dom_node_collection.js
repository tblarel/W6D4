class DOMNodeCollection {
  
  constructor(arr) {
    this.nodes = arr;
  };

  

  empty() {
    this.nodes.forEach((el) => {
      el.innerHTML = '';
    });
  };

  append(argument) {
    this.nodes.forEach((el) => {
      argument.forEach ( (arg_el) => {
       el.innerHTML += arg_el.outerHTML; 
      });
    });
  }

  remove() {
    if(nodes.includes(this)) {

    }
  };

  attr (attr_name, attr_value) {
    this.nodes.forEach((el) => {
      el.setAttribute(attr_name, attr_value)
    });
  };

  addClass (class_name) {
    this.nodes.forEach((el) => {
      el.classList.add(class_name);
    });
  };

  removeClass () {};

  html(string) {
    if(string) {
      this.nodes.forEach( (el) => {
        el.innerHTML = string;  
      });
    } else {
      return this.nodes[0].innerHTML;
    }
  };

  find () {}; 

  children () {};

  parent () {};

}



module.exports = DOMNodeColletion;