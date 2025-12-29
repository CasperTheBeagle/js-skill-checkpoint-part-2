const alphaTech = [
    { name: 'Alice', age: 23, department: 'Engineering' },
    { name: 'Bob', age: 19, department: 'Design' }
  ];
  
  const betaSoft = [
    { name: 'Charlie', age: 28, department: 'Engineering' },
    { name: 'David', age: 17, department: 'Support' }
  ];
  
  const gammaDev = [
    { name: 'Eve', age: 25, department: 'Marketing' },
    { name: 'Faythe', age: 18, department: 'Engineering' },
    { name: 'Grace', age: 20, department: 'Engineering' }
  ];
  
// Part #1 : การรวบรวมข้อมูลพนักงานจากทุกบริษัท
const alphaTechWithCompany = alphaTech.map(employee => ({
  ...employee,
  company: "alphaTech"
}));

const betaSoftWithCompany = betaSoft.map(employee => ({
  ...employee,
  company: "betaSoft"
}));

// Debugging Point Part #1 : จัดการข้อมูลบริษัท gammaDev และรวม Array ให้ครบทั้ง 3 บริษัท
// เพิ่มการ Map ข้อมูลของ gammaDev ที่เดิมขาดไป
const gammaDevWithCompany = gammaDev.map(employee => ({
  ...employee,
  company: "gammaDev"
}));

// Part #2 : รวมพนักงาน(allEmployees)จาก "ทุกบริษัท" 
// Debugging Point Part #2-1 : เข้าด้วยกันเปลี่ยนเป็น 3 บริษัท จากเดิมรวมแค่ 2 บริษัท 
const allEmployees = [...alphaTechWithCompany, ...betaSoftWithCompany, ...gammaDevWithCompany];// [ ... , ] 3 บริษัท 

// Debugging Point Part #2-2: แก้ไขตัวสะกดแผนก และการเข้าถึงชื่อบริษัท (Company) ของแต่ละคน
const result = allEmployees.filter((employee) => {
  // Edit : 'Enginring' เป็น 'Engineering' และตรวจสอบอายุ >= 20
  return employee.department === 'Engineering' && employee.age >= 20;
}).map((employee) => {
  return {
    name: employee.name,
    company: employee.company // เปลี่ยนจากค่าว่าง ('') เป็นการดึงค่าจาก Property ของ company ซึ่งเป็นของemployee คนนั้น
  };
});

console.log(result);
// [
//     { name: 'Alice', company: 'alphaTech' },
//     { name: 'Charlie', company: 'betaSoft' },
//     { name: 'Grace', company: 'gammaDev' }
// ]
  

