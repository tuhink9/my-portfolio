import React from 'react';
import "./About.css"

const About = () => {
    return (
        <div id='about' className='pt-6 mx-64'>
           <div class="card lg:card-side bg-base-100 shadow-xl bg-emberald-50">
            <div className="card-body">
              <h1 className='mt-10 text-3xl font-bold'>About me</h1>
            <figure><img src="https://i.ibb.co/vddp3Ph/Tuhin-2.jpg" alt="Tuhin-2" border="0"/></figure>
            </div>
  <div class="card-body">
    <p className='mt-20'>I'm Tariqul Islam Tuhin , also known as " Tuhin " from Narsingdi , Dhaka, Bangladesh. I am a self-taught Programmer. I have hands-on experience on FullStack Web Development. I love coding, solving problems, building amazing projects. I am passionate about solving complex problems. It makes me happy to work with a team enthusiastically and collaboratively. I am confident that my skills and dedication make me a valuable asset to my future self. I am passionate about Computer Science. In addition to my passion I will engage myself and focus on continuously learning in the field of Computer Science for the rest of my lifetime as a lifelong learner or researcher. I believe, Knowledge has no limits!</p>
    <div class="card-actions justify-end">
      <button class="btn bg-violet-600 "><a href="https://docs.google.com/document/d/1AlSyjLDgeP_Z5AfPZY8v1HWDN1Ft_St79fYUlJ3cQt4/export?format=pdf">Resume</a></button>
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
      <p className="skill text-xl font-semibold">Javascript(es6), RectJs, Node, ExpressJs, Mongodb </p>
      <p className="percent">90%</p>
    </div>
    <div className='pline1'>
      <div className="line2"></div>
      <div className="bline"></div>
    </div>
    <div className='para'>
      <p className="skill text-xl font-semibold"> Mongodb, MySQL, OOP </p>
      <p className="percent">90%</p>
    </div>
    <div className='pline1'>
      <div className="line3"></div>
      <div className="cline"></div>
    </div>
    <div className='para'>
      <p className="skill text-xl font-semibold">C, C++, Python </p>
      <p className="percent">90%</p>
    </div>
    <div className='pline1'>
      <div className="line4"></div>
      <div className="dline"></div>
    </div>
    <div className='para'>
      <p className="skill text-xl font-semibold">Algorithm and Data Structure </p>
      <p className="percent">80%</p>
    </div>
    <div className='pline1'>
      <div className="line5"></div>
      <div className="eline"></div>
    </div>
    <div className='para'>
      <p className="skill text-xl font-semibold"> Cloud Computing, Operating System </p>
      <p className="percent">80%</p>
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