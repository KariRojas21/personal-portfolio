import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import Boxes from './Boxes';
 import Skills from './skills';
import { useState } from 'react';
 
import App, { Lista,Encabezado,SocialBar, CV,  SkillsT, ThisPage,Footer,WorksT } from './Components';
 
import reportWebVitals from './reportWebVitals';
import { Modal } from 'react-bootstrap';
import Works from './Works';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
   
     
    <Lista/>
    <Encabezado/>
 
    <Boxes/>
    <SkillsT/>
     <Skills/>
     <WorksT/>
     <Works/>
     <ThisPage/>
     <Footer/>
  </div>
 
);

 
reportWebVitals();
