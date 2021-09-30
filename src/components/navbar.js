import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/categories',
      text: 'CATEGORIES',
    },

  ];

  return (
    <nav>
      <div>
        <h1>Bookstore CMS</h1>
      </div>
      <ul className="menu-items">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path} exact activeClassName="active" className="an-class">{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
