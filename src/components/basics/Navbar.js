import React from 'react'
import Menu from './MenuApi'

const Navbar = ({ setMenuData }) => {

    const filterItem = (category) => {
        const updatedList = Menu.filter((currElem) => {
            return currElem.category === category;
        });
        setMenuData(updatedList);
    }

  return (
    <>
    <div className="navbar">
        <div className="btn-group">
            <button className="btn-group__item" onClick={()=> filterItem("breakfast")}>breakfast</button>
            <button className="btn-group__item" onClick={()=> filterItem("lunch")}>lunch</button>
            <button className="btn-group__item" onClick={()=> filterItem("evening")}>evening</button>
            <button className="btn-group__item" onClick={()=> filterItem("dinner")}>dinner</button>
            <button className="btn-group__item" onClick={()=> setMenuData(Menu)}>All</button>
        </div>
    </div>
    </>
  )
}

export default Navbar