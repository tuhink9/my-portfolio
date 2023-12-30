import React from 'react';

const Navbar = () => {
    return (
        <div className='z-40 sticky'>
          <div class="navbar bg-base-100 fixed bg-slate-900">
  <div class="flex-1 ms-64">
    <ul><li className='text-xl font-bold text-white'><a href="#home">Tariqul Islam Tuhin</a></li></ul>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1 me-64">
      <li className='text-xl font-bold text-white'><a href="#home">Home</a></li>
      <li className='text-xl font-bold text-white'><a href="#about">About</a></li>
      <li className='text-xl font-bold text-white'><a href="#services">Services</a></li>
      <li className='text-xl font-bold text-white'><a href="#experiences">Experiences</a></li>
      <li className='text-xl font-bold text-white'><a href="#works">Works</a></li>
      <li className='text-xl font-bold text-white'><a href="#contact">Contact</a></li>
    </ul>
  </div>
</div>
        </div>
    );
};

export default Navbar;