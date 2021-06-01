import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/cougarvillage'>CougarVillage1</Link>
        </li>
        <li>
           <Link to='/cougarvillage2'>CougarVillage2</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
