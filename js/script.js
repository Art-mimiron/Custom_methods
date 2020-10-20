document.addEventListener('DOMContentLoaded', function() {
    'use sctict';

// forEach()
    Object.prototype.customForEach = function(callback, value, index, array) {
        for (let i = 0; i < this.length; i++) {
            value = this[i],
            index = i,
            array = Object(this);
            callback(value, index, array);
        }
    };

    let testForEach = ['asdasd', 1, 6, 49, 555];

    testForEach.customForEach(function(item, index, array) {
        console.log(`В массиве ${array} значение ${item} хранится под номером ${index}`);
    });

    testForEach.customForEach(item => {
        console.log(item * 2);
    });


// findIndex()
    Object.prototype.customFindIndex = function(callback, value, index, array) {
        callback(value, index, array);
        for (let i = 0; i < this.length; i++) {
            value = this[i],
            index = i,
            array = Object(this);

            if (callback(value, index, array) == 'true') {
                return index;
            }
        }
        return -1;
    };

    let testFindIndex = [1, 2, 3, 4, 5];
    
    testFindIndex.customFindIndex(function(item) {
        if (item === 4) {
            console.log(`Я нашел 4! Она под номером ${item}`);
        } 
    });
    

    let users = [
        {id: 1, name: "Вася"},
        {id: 2, name: "Петя"},
        {id: 3, name: "Маша"}
      ];
      
      let user = users.customFindIndex(users => users.name === 'Вася');
      
      console.log(user);
});