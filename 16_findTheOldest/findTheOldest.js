const findTheOldest = function (people) {
  // Get the current year, for purposes of calculating age where person is still alive
  const currentYear = new Date().getFullYear();
  // Get the age of the first person in the array
  let oldestPerson = people[0];
  let oldestPersonAge =
    (oldestPerson.yearOfDeath ?? currentYear) - oldestPerson.yearOfBirth;

  // Loop through people, checking if there is a person older than people[0]
  for (const person of people) {
    const deathYear = person.yearOfDeath ?? currentYear;
    const age = deathYear - person.yearOfBirth;
    if (age > oldestPersonAge) {
      oldestPersonAge = age;
      oldestPerson = person;
    }
  }
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
