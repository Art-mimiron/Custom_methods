document.addEventListener('DOMContentLoaded', function() {
    'use sctict';

    Object.prototype.customForEach = function(callback, value, index, array) {
        for (let i = 0; i < this.length; i++) {
            value = this[i],
            index = i,
            array = this;
            callback(value, index, array);
            
        }
    };



    let testArray = ['asdasd', 1, 6, 49, 555];

    testArray.customForEach(function(item, index, array) {
        console.log(`В массиве ${array} значение ${item} хранится под номером ${index}`);
    });
    
});