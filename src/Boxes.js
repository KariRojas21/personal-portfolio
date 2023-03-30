import React, { useState } from 'react';
  function Boxes() {
  const [box1, setBox1] = useState('#B19CD9');
  const [box2, setBox2] = useState('#B19CD9');
  const [box3, setBox3] = useState('#B19CD9');
  const [isHighlighted, setIsHighlighted] = useState(false);

  const handleMouseEnter = () => {
    setIsHighlighted(true);
  };

  const handleMouseLeave = () => {
    setIsHighlighted(false);
  };

  const buttonClassName = isHighlighted ? "highlight-button" : "";

  return (
   
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <div  style={{boxShadow:'10px 10px 5px purple',backgroundColor:box1 , flex: 1, margin: '0 5px' }}>
          
 
<div style={{textAlign: 'center'}}>  
     <img src="https://img.icons8.com/ios-filled/50/null/briefcase-settings.png" height="35" width="35"  /></div>
            <p  style={{ fontStyle: 'oblique', fontWeight: '700', color:'black',textAlign: 'center' }}>
              Experience</p>
                <p style={{ fontSize: 'small',fontStyle: 'oblique', fontWeight: '600', color:'black',textAlign: 'center' }} > More than a year of experience as a systems programmer analyst
                </p>
                </div>



                
    <div 
 className={buttonClassName} 
 onMouseEnter={handleMouseEnter} 
 onMouseLeave={handleMouseLeave}
     style={{  
    boxShadow:'10px 10px 5px purple', backgroundColor: box2, flex: 1, margin: '0 5px' }}> 
    
<div style={{textAlign: 'center'}} >  
     <img src="https://img.icons8.com/ios-filled/50/null/internet.png" height="35" width="35"  /></div>
            <p  style={{ fontStyle: 'oblique', fontWeight: '700', color:'black',textAlign: 'center' }}>
            Completed</p>
                <p style={{ fontSize: 'small',fontStyle: 'oblique', fontWeight: '600', color:'black',textAlign: 'center' }} > 
                Web Projects
                </p>
    
    
    
    </div>
    <div style={{boxShadow:'10px 10px 5px purple', backgroundColor: box3, flex: 1, margin: '0 5px' }}>
      
      
<div style={{textAlign: 'center'}}>  
     <img src="https://img.icons8.com/ios-filled/50/null/technical-support.png" height="35" width="35"  /></div>
            <p  style={{ fontStyle: 'oblique', fontWeight: '700', color:'black',textAlign: 'center' }}>
            Support</p>
                <p style={{ fontSize: 'small',fontStyle: 'oblique', fontWeight: '600', color:'black',textAlign: 'center' }} > 
                24/7
                </p>
      </div>
  </div>
  );
}
export default Boxes;