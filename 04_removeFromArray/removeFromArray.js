const removeFromArray = function() {
    const args = Array.from(arguments);
    input_array = args[0];
    remove_array = args.slice(1); // contains every argument after the first
    for (let i = 0; i < input_array.length; i++) {
        console.log(i);
        for (const element of remove_array) {
            if (element === input_array[i]) {
                input_array.splice(i, 1);
                i--; // as we have removed an element, all future indexes are now one less
            }
        }
    }
    
    return input_array;
};

// Do not edit below this line
module.exports = removeFromArray;
