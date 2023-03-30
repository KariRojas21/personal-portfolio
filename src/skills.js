import React from 'react';
 
 
import './skills.css';
 
function Skills() {
    return (
        <div className="container">
        <div className="box">
          <h2 style={{fontstyle: 'oblique', fontweight: '700', color:'black'}}>Frontend</h2>
         <ul>
        <li> 
        <span style={{fontsize: 'medium', color:'Black'}}>HTML</span>
        <p style= {{ fontStyle: 'normal', fontWeight: '600' ,   fontSize: 'small' , textAlign:'center'}}>Advanced  </p>
        </li>
     <li> 
         <span style={{fontsize: 'medium', color:'Black'}}>CSS</span>
         <p style= {{ fontStyle: 'normal', fontWeight: '600' ,   fontSize: 'small' , textAlign:'center'}}>Advanced  </p>
         </li>
        <li>  
          <span style={{fontsize: 'medium', color:'Black'}}>Bootstrap</span>
          <p style= {{ fontStyle: 'normal', fontWeight: '600' ,   fontSize: 'small' , textAlign:'center'}}>Advanced  </p>
         </li>
         

         <li>  
         <span style={{fontsize: 'medium', color:'Black'}}>React</span>
         <p style= {{ fontStyle: 'normal', fontWeight: '600' ,   fontSize: 'small' , textAlign:'center'}}>Intermediate  </p>
         </li>
       
          <li> 
          <span style={{fontsize: 'medium', color:'Black'}} >JavaScript</span>
          <p style= {{ fontStyle: 'normal', fontWeight: '600' ,   fontSize: 'small' , textAlign:'center'}}>Intermediate  </p>
         </li>
         </ul>
        </div>
        <div className="box">
        <h2 style={{fontstyle: 'oblique', fontweight: '700', color:'black'}}>Backend</h2>
      
        
<ul>
 
          <li><box-icon name='star-filled' type='solid' color='#b8c119'  title='Advanced'></box-icon>&nbsp;&nbsp;&nbsp;
         <span style={{fontsize: 'medium', color:'Black'}}>C#</span>
        <p style= {{ fontStyle: 'normal', fontWeight: '600' ,   fontSize: 'small' , textAlign:'center'}}>Advanced  </p>
         </li>

         <li>
         <box-icon name='star-filled' type='solid' color='#b8c119' title='Advanced'></box-icon>&nbsp;&nbsp;&nbsp;
         <span style={{fontsize: 'medium', color:'Black'}}>MVC</span>
         <p style= {{ fontStyle: 'normal', fontWeight: '600' ,   fontSize: 'small' , textAlign:'center'}}>Advanced  </p>
        </li>
      <li>  
         <box-icon name='star-filled' type='solid' color='#b8c119' title='Advanced'></box-icon>&nbsp;&nbsp;&nbsp;
         <span style={{fontsize: 'medium', color:'Black'}}>SQL</span>
         <p style= {{ fontStyle: 'normal', fontWeight: '600' ,   fontSize: 'small' , textAlign:'center'}}>Advanced  </p>
        
        </li>
        <li>  
          <box-icon name='star-fill' type='solid' color='#b8c119'  title='Advanced'></box-icon>&nbsp;&nbsp;&nbsp;
         <span style={{fontsize: 'medium', color:'Black'}}>Visual Basic Application</span>
         <p style= {{ fontStyle: 'normal', fontWeight: '600' ,   fontSize: 'small' , textAlign:'center'}}>Advanced  </p>
        </li>
         <li>  
         <span style={{fontsize: 'medium', color:'Black',textAlign:'center'}}>MYSQL</span>
         <p style= {{ fontStyle: 'normal', fontWeight: '600' ,   fontSize: 'small' , textAlign:'center'}}>Intermediate  </p>
        </li>
         <li>  
         <span style={{fontsize: 'medium', color:'Black'}}>PHP</span>
         <p style= {{ fontStyle: 'normal', fontWeight: '600' ,   fontSize: 'small' , textAlign:'center'}}>Basic  </p>
        
         </li>
         </ul>






        </div>
      </div>
    );



   
  }
  
  export default Skills;

 
