function Act(){
     
     let val1 = prompt('Enter value:' , '');
     let val2 = prompt('Enter another value:' , '');

     if (val1 == val2) {
        alert (`Both Values are Equal`);
     } else if (val1 > val2) {
        alert (`Value: ${val1} is higher than value: ${val2}`);
     } else if (val2 > val1) {
        alert(`Value: ${val2} is higher than value: ${val1}`);
     }

}