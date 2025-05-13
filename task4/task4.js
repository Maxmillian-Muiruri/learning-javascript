const data = [
  { name: "john", age: 25, city: "Kenya" },
  { name: "peter", age: 35, city: "China" },
  { name: "max", age: 22, city: "Kenya" },
  { name: "mark", age: 25, city: "China" },
  { name: "justus", age: 35, city: "Tanzania" },
];

function filterByProperty(array, property, value) {
  return array.filter((item) => item[property] === value);
}

const adults = data.filter((person) => person.age >= 18);
console.log(adults);

const peopleFromKenya = filterByProperty(data, "city", "Kenya");
console.log(peopleFromKenya);

const word = filterByProperty(data, "name", "j");
console.log(word);
