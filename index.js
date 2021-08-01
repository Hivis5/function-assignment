const students = [
  { name: "Adhi", gender: "male" },
  { name: "Ahamed", gender: "male" },
  { name: "Rutika Kadam", gender: "female" },
  { name: "Priyadharsini", gender: "female" },
];

// Task 1: find all female name

let femaleName = students.filter((female) => {
  return female.gender === "female";
});

console.log(femaleName);

// task 2: starting with "A"

const startsWithA = students.filter((nameStart) => nameStart.name.startsWith("A"));

console.log(startsWithA);

// task 3: count the no. of males

let maleName = students.filter((male) => {
  return male.gender === "male";
});

console.log(maleName.length);
