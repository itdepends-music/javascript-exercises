const findTheOldest = function(people) {
    return people.reduce((a, b) => {
        aDeath = "yearOfDeath" in a ? a.yearOfDeath : new Date().getFullYear();
        bDeath = "yearOfDeath" in b ? b.yearOfDeath : new Date().getFullYear();

        ageA = aDeath - a.yearOfBirth;
        ageB = bDeath - b.yearOfBirth;
        return ageA > ageB ? a : b;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
