const findTheOldest = function(people) {

    const currentYear = new Date().getFullYear();
  let oldestPerson = null;
  let highestAge = -1;

  for (let i = 0; i < people.length; i++) {
    const currentPerson = people[i];
    const age = currentPerson.yearOfDeath ? currentPerson.yearOfDeath - currentPerson.yearOfBirth : currentYear - currentPerson.yearOfBirth;

    if (age > highestAge) {
      oldestPerson = currentPerson;
      highestAge = age;
    }
  }

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
