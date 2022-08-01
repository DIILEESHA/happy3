import React from 'react';
import './edc.css'
import PhoneAndroidSharpIcon from '@mui/icons-material/PhoneAndroidSharp';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const EducationalDetails = () => {
  return <div className='edc'>
      <div className="edc-right">
<div className="edc-img">
    <img src="https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
</div>
      </div>
      <div className="edc-left">
          <>
<span className="edc-connect">CONTACT👀</span>
<span className='lgedc'>Connect via Mobile</span>
<span className="tele" ><PhoneAndroidSharpIcon style ={{color:"#fff"}}/>+94 75 325 1369</span>
<span className='lgedc'>Connect Via Email</span>
<span className="personalemail"><EmailOutlinedIcon style={{color:"#fff",margin:"2px"}}/>dileeshanawarathna18@gmail.com</span>
</>
<div className="edc-btn">
    
    <button className='edr' >  <a className='abba' href="https://www.linkedin.com/in/dileesha-lakshan/"  target="_blank">Connect With LinkedIn</a></button></div>
      </div>
      
  </div>;
};

export default EducationalDetails;
