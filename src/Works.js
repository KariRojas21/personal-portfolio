import React, { useState } from 'react';
import Skills from './skills';
  function Works() {
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
   
    <div style={{ display: 'flex', justifyContent: 'space-between' }} >
    <div  className='box2' style={{boxShadow:'10px 10px 5px purple',backgroundColor:box1 , flex: 1, margin: '0 5px' }}>
          
 
<div style={{textAlign: 'center'}}>  
     <img src="./looking.jpeg" height="200" width="200" style={{ borderRadius: '50%' }} /></div>
            <p  style={{ fontStyle: 'oblique', fontWeight: '700', color:'black',textAlign: 'center' }}>
              LookinG&K</p>
                
                <p style={{ fontSize: 'small',fontStyle: 'oblique', fontWeight: '600', color:'black',textAlign: 'center' }} >
Reservation System <br/>
ASP.NET Web Forms With C#
 
,  SQL Server 2014</p>
                
                <p style={{ fontSize: 'small',fontStyle: 'oblique', fontWeight: '600', color:'black',textAlign: 'center' }} > 
                  Employ:  kmartinez32@hotmail.com 	
                 |  Password:  12345
                 <br/>
                  Customer: rpinedag46@outlook.com  |
                   Password:	12345
                   
                   </p>
                
                <button className='btn btn-success'>
             
             <a href="http://fabiola-001-site1.htempurl.com/Pages/Login" style={{  color:'white' }} >
See more</a>

            </button>
                </div>



                
    <div 
className='box2'
 onMouseEnter={handleMouseEnter} 
 onMouseLeave={handleMouseLeave}
     style={{  
    boxShadow:'10px 10px 5px purple', backgroundColor: box2, flex: 1, margin: '0 5px' }}> 
    
<div style={{textAlign: 'center'}} >  
     <img src="./siglo21.jpeg" height="200" width="200" style={{ borderRadius: '50%' }} /></div>
            <p  style={{ fontStyle: 'oblique', fontWeight: '700', color:'black',textAlign: 'center' }}>
            
21st century Insurance</p>
<p style={{ fontSize: 'small',fontStyle: 'oblique', fontWeight: '600', color:'black',textAlign: 'center' }} >
</p><p style={{ fontSize: 'small',fontStyle: 'oblique', fontWeight: '600', color:'black',textAlign: 'center' }} >
Insurance Policy System, Team collaboration with other members
<br/>
CSS,Kendo UI,Bootstrap,MVC, .Net, C#, SQL Server 2014</p>
          
                <p style={{ fontSize: 'small',fontStyle: 'oblique', fontWeight: '600', color:'black',textAlign: 'center' }} > 
                 User: kcampos
                 |  Password: 123456
                   </p>
                
<button className='btn btn-success'>
             
             <a href="http://karilin-001-site1.gtempurl.com/" style={{  color:'white' }} >
See more</a>

            </button>
    
    
    </div>
    <div className='box2' style={{boxShadow:'10px 10px 5px purple', backgroundColor: box3, flex: 1, margin: '0 5px' }}>
      
      
<div style={{textAlign: 'center'}} >  
     <img src="./potions.jpeg" height="200" width="200"  style={{ borderRadius: '50%' }}/></div>
            <p  style={{ fontStyle: 'oblique', fontWeight: '700', color:'black',textAlign: 'center' }}>
            POTIONS C.R.</p>
            <p style={{ fontSize: 'small',fontStyle: 'oblique', fontWeight: '600', color:'black',textAlign: 'center' }} > 
              
Perfumery System, continues in improvement maintenance  </p>
<p style={{ fontSize: 'small',fontStyle: 'oblique', fontWeight: '600', color:'black',textAlign: 'center' }} >
 
CSS,Bootstrap,MVC, .Net, C#  , SQL Server 2014</p>
<p style={{ fontSize: 'small',fontStyle: 'oblique', fontWeight: '600', color:'black',textAlign: 'center' }} > 
                 User: aadmin
                 |  Password: 789admin30
                   </p>
             <button className='btn btn-success'>
             
              <a href="http://karilinrojas-001-site1.atempurl.com/Perfumeria/Main" style={{  color:'white' }} >
See more</a>

             </button>
      </div>
  </div>
  );
}
export default Works;