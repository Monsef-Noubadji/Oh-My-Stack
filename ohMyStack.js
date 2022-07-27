function Stack() {

    push = (Array,addedItem) =>{
      for (let i = 0 ; i <= Array.length ;i++){
        if (addedItem === Array[i]){
          return "Insertion Error : Item Already Exists";
        }
        else{
           Array[Array.length] = addedItem;
        }
        return `added item: ${addedItem}`;
      }
    }
  
    pop = (Array) =>{
      let removedItem = Array[Array.length-1];
      Array.length = Array.length-1;
      return `removed item: ${removedItem}`;
    }
  
    peek = (Array) =>{
      let peekItem = Array[Array.length-1];
      return `${peekItem}`;
    }
  
    isEmpty = (Array) =>{
      if (Array.length == 0 ){
        return 'Fatal Error : Empty Stack';
      }
      else{
        return `Non empty stack : ${Array} `;
      }
    }
  
    clear = (Array) =>{
      Array.length = 0;
      return Array;
    }
  }