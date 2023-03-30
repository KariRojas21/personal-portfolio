import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
 import ExampleModal from './ExampleModal';
 
 import { BoxIconElement } from 'boxicons';
import {AiOutlineHome} from 'react-icons'
import { useState } from 'react';
 import Modal from './Modal';
import React from 'react';
import ParticlesBg from 'particles-bg';
import { FaBeer, FaSun } from 'react-icons/fa';
import './SocialBar.css';
import './styles.css';

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';


import {button, image,Navbar,Container, Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';
export function Encabezado(){

return <section>
  

 
</section>
}

 

 








export function Lista(){
  const [value, setValue] = useState(50);
  const [showModal, setShowModal] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
 
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };



    return <section id='encabezado'>  
      <br />  
      <div > 
    <Navbar expand="lg"  >
      
<Container>
<Navbar.Brand href= "#home">
<box-icon name='react' type='logo' animation='spin' rotate='180' color='#e25b54' ></box-icon>
 
 
</Navbar.Brand>

<Navbar.Toggle aria-controls="basic-navbar-nav">
<span classname="navbar-togger-icon"></span>
</Navbar.Toggle>
<Navbar.Collapse id="basic-navbar-nav">
<Nav classname="me-auto">

<div > 
   
   <Nav.Link href="#thispage" title="This Page" style={{ fontStyle: 'oblique', color:'black',fontWeight: '700', textAlign:'center' }}>This Page</Nav.Link>

   
   </div>
    &nbsp;
 <Nav.Link href="#Skills"   style={{ fontStyle: 'oblique', color:'black',fontWeight: '700', textAlign:'center' }}>Skills</Nav.Link>
 <div>
 <Nav.Link href="#works" title="Works"  style={{  textAlign:'center' }}  >
    <img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/null/external-portfolio-advertising-kiranshastry-solid-kiranshastry.png" height="35" width="35" />
    </Nav.Link>  

 </div>
 
&nbsp;

    
     
   
   
     

    <div >  
<Nav.Link href="#Qualifications" title="Qualifications"  style={{  textAlign:'center' }} onClick={handleOpenModal}>
    <img src="https://img.icons8.com/emoji/48/null/graduation-cap-emoji.png" height="35" width="35" />
    </Nav.Link>  
    <Modal isOpen={showModal} onClose={handleCloseModal} className='modal'>
        <div className="container">
      <div className="row">
        <div className="col-sm-6"> 
        <div style={{textAlign:'center' }}>  
        <box-icon name='graduation' type='solid' flip='horizontal' animation='tada' color='#a217ad' ></box-icon>
        </div>
        <p   style={{   textshadow: '3px 10px 7px purple',fontStyle: 'oblique',fontSize:'medium', color:'black',fontWeight: '700', textAlign:'center' }}> Education </p>
     <p   style={{ fontstyle: 'oblique', color:'black',fontWeight: '700',fontSize:'small', textAlign:'center'  }}> Bachelor's Degree in Computer Engineering </p>

     <p   style={{  fontSize:'small', textAlign:'center'  }}>Universidad Metropolitana Castro Carazo</p>
     <p   style={{  fontSize:'small', textAlign:'center'  }}> May 2019- May 2023 </p>
     <p   style={{ fontstyle: 'oblique', color:'black',fontWeight: '700',fontSize:'small', textAlign:'center'  }}>Bachelor's Degree in Secondary Education</p>
     <p   style={{  fontSize:'small', textAlign:'center'  }}>2013 - 2019</p>
       
        
        </div>


    
        <div className="col-sm-6">

          <div style={{textAlign:'center' }}> 

          <box-icon name='briefcase-alt-2' type='solid' animation='tada' flip='horizontal' color='#a217ad' ></box-icon>
          </div>
          <p style={{   textshadow: '10px 10px 5px purple',fontStyle: 'oblique', color:'black',fontWeight: '700', textAlign:'center' }}>
Functions</p>
<ul>
                        <li>Collect and document user requirements, develop logical and physical specifications.</li> <br />
                        <li>Investigate, evaluate, and synthesize technical information to design, develop and test computer
                        systems.</li> <br />
                        <li>Develop data and process models to optimize and evaluate performance and reliability of designs.</li><br />
                        <li>Plan, design and coordinate the development, installation, integration and operation of computer
                        systems.</li><br />
                        <li>Evaluate, test, troubleshoot, document, update, and develop maintenance procedures for operating
                        systems and application software.</li>


</ul>



</div>
      </div>
    </div>






         
      </Modal>   
       </div>
     




</Nav>
<span className="navbar-text">
<div className="social-icon">
<a href="#"><img src={''} alt=""/></a>
<a href="#"><img src={''} alt=""/></a>
<a href="#"><img src={''} alt=""/></a>

</div>
 
</span>
</Navbar.Collapse>
</Container>
</Navbar>
</div>
<br/><br/><br/><br/>
 

<div className="container">
      <div className="row">
        <div className="col-sm-6">

        <div style={{  textAlign:'center' }}>

    <a href="https://www.linkedin.com/in/karilin-rojas-vargas-237b93199/" title="LinkedIn"  style={{  textAlign:'center' }}>
    <img src="https://img.icons8.com/fluency/48/null/linkedin-2.png" height="35" width="35" />
    </a>&nbsp;
    <a href="https://api.whatsapp.com/send?phone=%2B50664210359&text=" title="WhatsApp">
    <img src="https://img.icons8.com/color/48/null/whatsapp--v1.png" height="35" width="35" />
    </a>&nbsp;
    <a href="https://github.com/KariRojas21"  title="Git">
    <img src="https://img.icons8.com/ios-filled/50/null/github.png" height="35" width="35" />
    </a>&nbsp;
     <a href="https://drive.google.com/drive/folders/1My01CYxTLz42dMsC873M_HRklIQPm-Wu?usp=share_link"  title="CV">
    <img src="https://img.icons8.com/external-basicons-solid-edtgraphics/50/000000/external-cv-hr-edtim-solid-edtim-3.png" height="35" width="35" />
      </a>
    </div>
<br></br> 

        <h3  style={{ fontStyle: 'oblique', fontWeight: '700', textAlign:'center' }}>Karilin Rojas Vargas </h3>
  
        <div style={{textAlign:'center'}}>  <img  src ={'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-developer-web-development-flaticons-lineal-color-flat-icons-5.png'} alt = "logo" />
        </div>
        <p style={{ fontStyle: 'oblique', fontWeight: '700' , color:'deeppink' , textAlign:'center'}}>Systems Analyst and Designer</p>




        <p style= {{ fontStyle: 'normal', fontWeight: '600' , fontSize: 'medium' , textAlign:'center'}}>I'm Karilin, systems Analyst, creative web designer and developer.</p>
 
        </div>
        <div className="col-sm-6">
           <br /><br />
       <div className="mover"> 
          <img    src="https://media.licdn.com/dms/image/C4D03AQEqWIwUzryRNg/profile-displayphoto-shrink_800_800/0/1637595036718?e=2147483647&v=beta&t=fXuwKPEZbPflH_VslwqhUSX_V4yNmFwa1M1Oty6OKBs"  alt="Foto de perfil" 
          style={{ float: 'right',width: '350px', height: 'auto', borderRadius: '50%',top: '0px'}}/>  
            </div>
        </div>
      </div>
    </div>
    </section>
 
} 
 
export function SkillsT(){
  return <section id='Skills'>  
  <br />
  <div className='textShadow' style={{textAlign:'center',fontStyle: 'oblique', fontWeight: '700' , color:'black' }}>  
 <br /><br />
  <img src="  https://img.icons8.com/external-vectorslab-glyph-vectorslab/53/000000/external-Analytical-Skills-success-vectorslab-glyph-vectorslab.png
       " height="35" width="35" />
     <p  >Skills</p>
 <p>My technical level</p></div>
        
        
        </section>
}


export function WorksT(){
  return <section id='works'>  
  <br /> <br /> <br />
  <div className='textShadow' style={{textAlign:'center',fontStyle: 'oblique', fontWeight: '700' , color:'black' }}>  
  <img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/null/external-portfolio-advertising-kiranshastry-solid-kiranshastry.png" height="35" width="35" />
     <p  >Works</p>
 <p>
My projects</p></div>
        
       
        </section>
}
 




export function ThisPage(){
return <section id='thispage'>
  <br /><br /><br /><br /><br /><br />
 <div style={{textAlign:'center'  }}>  
  <img src=" https://img.icons8.com/color/96/null/css3.png"
    height="50" width="50" title='CSS'/>
<img src="https://img.icons8.com/officel/160/null/react.png"
   height="50" width="50"  title='React JS'/>


 <p style={{color:'black',fontStyle: 'oblique', fontWeight: '700', textAlign:'center'}}> This portfolio was created with React JS and CSS Styles.

</p></div>

</section>


}
 
 
export function Footer(){
  return <section>
    <br />
  <footer  style={{color:'black', textAlign:'center'}} >
          
          <p>&copy; 2023 - Karilin Rojas V. All rights reserved.</p>
          <br />
          <p style={{color:'black',fontStyle: 'oblique', fontWeight: '700', textAlign:'center'}}>V.1</p>
      </footer>

      <div style={{ float: 'right' , position: 'relative'}} >  
      <a href="#encabezado"  title="Back">
    <img src="https://img.icons8.com/ios-filled/50/null/send-letter--v1.png" height="35" width="35" />
    </a> 
    </div>
  </section>
  
  
  }
   
 
 
 