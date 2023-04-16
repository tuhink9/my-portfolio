import React from 'react';

const Navbar = () => {
    return (
        <div className='z-40 sticky'>
          <div class="navbar bg-base-100 fixed">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#experiences">Experiences</a></li>
      <li><a href="#works">Works</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>
</div>
        </div>
    );
};

export default Navbar;