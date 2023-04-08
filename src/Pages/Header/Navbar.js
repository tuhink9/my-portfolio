import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div class="navbar bg-base-100">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li><Link to="/home">Home</Link></li>
      <Link to="/about">About</Link>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/experiences">Experiences</Link></li>
      <li><Link to="/works">Works</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </div>
</div>
    );
};

export default Navbar;