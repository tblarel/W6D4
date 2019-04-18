const DOM = require ('./dom_node_collection.js'); 


window.$l = function(arg) {
  
  if (arg instanceof HTMLElement) {
    let arr = [arg];
    return new DOM(arr);
  };


}



