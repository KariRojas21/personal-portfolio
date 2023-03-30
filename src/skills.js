import React from 'react';
import './skills.css';
 
function Skills() {
    return (
        <div className="container">
        <div className="box">
          <h2 style={{fontstyle: 'oblique', fontweight: '700',  color:'black'}}>Frontend</h2>
         <ul>
        
       <box-icon name='star' type='solid' color='#b8c119'  title='Advanced'></box-icon>&nbsp;&nbsp;&nbsp;
         <span style={{fontsize: 'medium', color:'Black'}}>HTML</span>
         </ul>
         <ul>  
         <box-icon name='star' type='solid' color='#b8c119' title='Advanced'></box-icon>&nbsp;&nbsp;&nbsp;
         <span style={{fontsize: 'medium', color:'Black'}}>CSS</span>
        
         </ul>
         <ul>  
         <box-icon name='star' type='solid' color='#b8c119' title='Advanced'></box-icon>&nbsp;&nbsp;&nbsp;
         <span style={{fontsize: 'medium', color:'Black'}}>Bootstrap</span>
        
         </ul>

         <ul>  
         <box-icon name='star-half' type='solid' color='#b8c119' title='Intermediate' ></box-icon>&nbsp;&nbsp;&nbsp;
         <span style={{fontsize: 'medium', color:'Black'}}>React</span>
        
         </ul>
         <ul>  
         <box-icon name='star' color='#b8c119' title='Basic'></box-icon>&nbsp;&nbsp;&nbsp;
         <span style={{fontsize: 'medium', color:'Black'}} >JavaScript</span>
        
         </ul>
        </div>
        <div className="box">
        <h2 style={{fontstyle: 'oblique', fontweight: '700', color:'black'}}>Backend</h2>
      
        
<ul>
          <box-icon name='star' type='solid' color='#b8c119'  title='Advanced'></box-icon>&nbsp;&nbsp;&nbsp;
         <span style={{fontsize: 'medium', color:'Black'}}>C#</span>
         </ul> 
         <ul>  
         <box-icon name='star' type='solid' color='#b8c119' title='Advanced'></box-icon>&nbsp;&nbsp;&nbsp;
         <span style={{fontsize: 'medium', color:'Black'}}>MVC</span>
        
         </ul>
         <ul>  
         <box-icon name='star-fulled' type='solid' color='#b8c119' title='Advanced'></box-icon>&nbsp;&nbsp;&nbsp;
         <span style={{fontsize: 'medium', color:'Black'}}>SQL</span>
        
         </ul>
         <ul>
          <box-icon name='star' type='solid' color='#b8c119'  title='Advanced'></box-icon>&nbsp;&nbsp;&nbsp;
         <span style={{fontsize: 'medium', color:'Black'}}>Visual Basic Application</span>
         </ul>
         <ul>  
         <box-icon name='star-half' type='solid' color='#b8c119' title='Intermediate' ></box-icon>&nbsp;&nbsp;&nbsp;
         <span style={{fontsize: 'medium', color:'Black'}}>MYSQL</span>
        
         </ul>
         <ul>  
         <box-icon name='star' color='#b8c119' title='Basic'></box-icon>&nbsp;&nbsp;&nbsp;
         <span style={{fontsize: 'medium', color:'Black'}}>PHP</span>
        
         </ul>






        </div>
      </div>
    );



   
  }
  
  export default Skills;

 
