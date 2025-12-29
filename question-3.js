// เริ่มเขียนโค้ดตรงนี้
// getUsers ที่ทำหน้าที่ ดึงข้อมูล User (ผู้ใช้งานในระบบ) จาก Server ชื่อ Jsonplaceholder
async function getUsers() {
  try {
    // ดึงข้อมูล User จาก Server ชื่อ Jsonplaceholder ด้วย Built-in fetch Function
    const response = await fetch("https://jsonplaceholder.typicode.com/users"); 
    const data = await response.json();

    // กรองและแปลงข้อมูล: เลือกเฉพาะชื่อที่ยาวเกิน 17 ตัวอักษร ด้วย Built-in Array Function (Map, Filter หรือ Reduce)
    const longNames = data
      .map((user) => user.name)
      .filter((name) => name.length > 17);

    console.log(longNames);
  } catch (error) {
    console.error("Error fetching data:", error);
    // หลังจากการแปลงข้อมูล ผลลัพธ์ควรจะแสดงบนหน้าจอแบบนี้
    // [ 'Mrs. Dennis Schulist', 'Nicholas Runolfsdottir V', 'Clementina DuBuque' ]
  }
}

getUsers();