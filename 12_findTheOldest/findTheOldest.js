const findTheOldest = function(arr) {
    const oldest = arr.reduce((a, b) => {
        let aAge = 0;
        if (a != 0) {
            a.hasOwnProperty("yearOfDeath") ? aAge = a.yearOfDeath - a.yearOfBirth 
                                            : aAge = new Date().getFullYear() - a.yearOfBirth;
        }
        b.hasOwnProperty("yearOfDeath") ? bAge = b.yearOfDeath - b.yearOfBirth
                                        : bAge = new Date().getFullYear() - b.yearOfBirth;
        console.log(aAge, bAge)
        return (bAge > aAge) ? b : a;
    }, 0)
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
