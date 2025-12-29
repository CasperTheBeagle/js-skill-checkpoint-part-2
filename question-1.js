const techupPeople = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 16 },
];

const techcoolPeople = [
  { name: "David", age: 25 },
  { name: "Eve", age: 19 },
];

// เริ่มเขียนโค้ดตรงนี้
// 1. รวม Array โดยใช้ Spread Operator
const allPeople = [...techupPeople, ...techcoolPeople];

// 2. กรองพนักงานที่มีอายุน้อยกว่า 20
const result = allPeople.filter((person) => person.age < 20);

console.log(result);