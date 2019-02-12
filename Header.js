import React from "react";

const Header = ({ menu }) => {
  menu = [...menu];
  let activePositions = menu.filter(item => item.active === true);
  activePositions = activePositions.length;

  return (
    <div>
      <h1>Restaurant "Champs Elysee"</h1>
      <p>Ordered items: {activePositions}</p>
      <p>Order value: {activePositions * 10} pounds</p>
      <br />
      <p>Your order:</p>
    </div>
  );
};

export default Header;
