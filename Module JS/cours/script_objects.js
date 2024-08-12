const amadou = {
  1: "test",
  true: "isAdult",
  "number of friends": 12,
  firstName: "Amadou",
  lastName: "Ly",
  age: 2024 - 1998,
  job: "Teacher",
  students: ["Fadima", "Alpha", "Oumar", "Boubacar"],
};

console.log(Boolean(0));

const obj = new Object();

obj;

console.log(amadou.job);

const nbrFr = "number of friends";

obj.name = "Obj";
obj[obj.name + amadou.firstName] = "Mon object a moi";
obj;

if (obj.age) {
  console.log(obj.age);
} else {
  obj.age = 18;
}

obj;
