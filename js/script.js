document.addEventListener('DOMContentLoaded', function() {
    'use sctict';

// forEach()
    Object.prototype.customForEach = function(callback, thisContext) {
        let array = Object(this),
            value;
            thisContext = arguments[1];

        for (let i = 0; i < array.length; i++) {
            value = array[i];
            callback(value, i, array, thisContext);
        }
    };

// test 1
    let testForEach = ['asdasd', 1, 6, 49, 555];

    testForEach.customForEach(function(item, index, array) {
        console.log(`В массиве ${array} значение ${item} хранится под номером ${index}`);
    });
// test 2
    let testForEach2 = ['asdasd', 1, 6, 49, 555];

    testForEach2.customForEach(item => {
        console.log(item * 2);
    });


// findIndex()
    Object.prototype.customFindIndex = function(callback, thisContext) {
        let array = Object(this),
            value;
            thisContext = arguments[1];

            for (let i = 0; i < array.length; i++) {
                value = array[i];
                if (callback(value, i, array, thisContext)) {
                    return i;
                }
            }
        return -1;
    };
    
// test 1
    let testFindIndex = [1, 2, 3, 4, 5];
        
    testFindIndex.customFindIndex(function(item) {
        if (item === 4) {
            console.log(`Я нашел 4! Она под номером ${item}`);
        } 
    });

// test 2
    let users = [
        {id: 1, name: "Вася"},
        {id: 2, name: "Петя"},
        {id: 3, name: "Маша"}
      ];
      
      let user = users.customFindIndex(users => users.name === 'Петя');
      
      console.log(user);
});