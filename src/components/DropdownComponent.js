import React, { useState } from 'react';

const DropdownComponent = ({ chanfoodData }) => {
  return (
    <nav>
      <h2>DropdownComponent</h2>
      <select className="menu" onChange={chanfoodData}>
        <option value="เมนูทั้งหมด">เมนูทั้งหมด</option>
        <option value="ผัด-ทอด">ผัด-ทอด</option>
        <option value="แกง-ต้มยำ">แกง-ต้มยำ</option>
        <option value="เครื่องดื่ม">เครื่องดื่ม(ชา กาแฟ)</option>
        <option value="สเต็ก">สเต๊ก</option>
      </select>
    </nav>
  );
};
// changeFoodData(e) เมื่อมีการเปลี่ยนแปลงค่าใน Dropdown ของเมนูอาหาร ฟังก์ชันนี้จะอัปเดตข้อมูลอาหารที่แสดงโดยกรองจากเมนูที่เลือก

export default DropdownComponent;
