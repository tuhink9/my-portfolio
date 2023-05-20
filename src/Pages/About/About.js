import React from 'react';
import "./About.css"

const About = () => {
    return (
        <div id='about' className='pt-6 mx-64'>
           <div class="card lg:card-side bg-base-100 shadow-xl bg-emberald-50">
            <div className="card-body">
              <h1 className='text-3xl font-bold'>About me</h1>
            <figure><img src="https://i.ibb.co/vddp3Ph/Tuhin-2.jpg" alt="Tuhin-2" border="0"/></figure>
            </div>
  <div class="card-body">
    <p>I'm Tuhin Kabir , also known as " Tuhin " , a self-learner of Programming, FullStack Web Development & WordPress Development from Narsingdi , Dhaka, Bangladesh. I love coding, solving problems, building amazing projects, reading books & many other cool stuffs.
I believe, Knowledge has no limits!

Age: 25 Years
Country:  Bangladesh
Freelance:  Available</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary"><a href="https://docs.google.com/document/d/1tq11_rRvNEtZKa25USLvKYmMdI3ir2XCaJJxsnDX-8Q/export?format=pdf">LinkedIn 
      Profile</a></button>
      <button class="btn btn-primary"><a href="https://drive.google.com/file/d/1zuV3uwztC7FlowPcP7eJLKxDzoWqHm-v/export?format=pdf">LinkedIn 
      Profile</a></button>
      
      
    </div>
    <div>
      
    </div>
  </div>
  <div class="card-body">
    <h2 class="card-title text-2xl font-bold">Skills</h2>
    <div className='para'>
      <p className="skill text-xl font-semibold">Html, Css, Bootstrap4, TailwindCss </p>
      <p className="percent">95%</p>
    </div>
    <div className='pline1'>
      <div className="line1"></div>
      <div className="aline"></div>
    </div>
    <div className='para'>
      <p className="skill text-xl font-semibold">Javascript(es6), RectJs </p>
      <p className="percent">90%</p>
    </div>
    <div className='pline1'>
      <div className="line2"></div>
      <div className="bline"></div>
    </div>
    <div className='para'>
      <p className="skill text-xl font-semibold">Node, ExpressJs, Mongodb </p>
      <p className="percent">85%</p>
    </div>
    <div className='pline1'>
      <div className="line3"></div>
      <div className="cline"></div>
    </div>
    <div className='para'>
      <p className="skill text-xl font-semibold">Content Writting </p>
      <p className="percent">90%</p>
    </div>
    <div className='pline1'>
      <div className="line4"></div>
      <div className="dline"></div>
    </div>
    <div className='para'>
      <p className="skill text-xl font-semibold">Consultancy </p>
      <p className="percent">70%</p>
    </div>
    <div className='pline1'>
      <div className="line5"></div>
      <div className="eline"></div>
    </div>
    <div className='para'>
      <p className="skill text-xl font-semibold">Career counselling </p>
      <p className="percent">90%</p>
    </div>
    <div className='pline1'>
      <div className="line6"></div>
      <div className="fline"></div>
    </div>
    <div class="card-actions justify-end">
    </div>
  </div>
</div>
        </div>
    );
};

export default About;