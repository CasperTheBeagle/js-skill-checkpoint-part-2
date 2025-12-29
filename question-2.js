const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้
const totalScore = students
  .filter((student) => student.score > 50) // 1. กรองคะแนน > 50
  .map((student) => student.score * 1.1)   // 2. เพิ่มคะแนน 10% (*1.1)
  .reduce((sum, score) => sum + score, 0); // 3. หาผลรวม

// 4. แสดงผลโดยใช้ Template Literal
console.log(`Total score is ${totalScore}`);