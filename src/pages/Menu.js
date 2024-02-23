// Menu.js
import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";


import { useHistory } from "react-router-dom";
import "../styles/Menu.css";

function Menu() {
  const history = useHistory();

  const handleCardClick = (path) => {
    history.push(path);
  
  };
  return (
    <div >
        <div className="menu">
      <h1 className="menuTitle">Diagnosis</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
           
            <MenuItem
              key={key}
              image={menuItem.image}
              title={menuItem.title}
              text={menuItem.text}
              
              to={`/treatment/${menuItem.to}`} // Provide the path to redirect to
              onClick={() => handleCardClick(`/treatment/${menuItem.to}`)} // You can also use onClick for custom behavior
            />
          
          );
        })}
      </div>
      </div>
      
    </div>
    

  );
}

export default Menu;
