import React, { useState } from 'react';
import './style.css'
import Menu from './MenuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu)
  return (
    <>
    <Navbar setMenuData={setMenuData} />
    <MenuCard menuData={menuData} />
    </>
  )
}

export default Restaurant