import React from 'react';
import {useState} from 'react'
import {CgMenuRightAlt} from 'react-icons/cg'
import {Link} from 'react-router-dom'
import './navbar.css'


const Menu = () => {
    const[IsOpen ,SetIsOpen] = useState(false);
  return <>
  <div className="menu-btn">
      <button  onClick={()=>SetIsOpen(!IsOpen)}>
          <CgMenuRightAlt/>
      </button>
  </div>
  {IsOpen &&(
      <header className='header open'>
<nav>
    <ul>
        <li onClick={()=>SetIsOpen(false)}>
            <Link to='/'>home</Link>
        </li>
        <li onClick={()=>SetIsOpen(false)}>
            <Link to='/about'>about</Link>
        </li>
        <li onClick={()=>SetIsOpen(false)}>
            <Link to='/project'>project</Link>
        </li>
        <li onClick={()=>SetIsOpen(false)}>
            <Link to='/say-hi'>contact</Link>
        </li>
    </ul>
</nav>
      </header>
  )}
  </>;
};

export default Menu;
