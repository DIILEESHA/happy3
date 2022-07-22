import React from 'react';
import './helper.css'
import LensIcon from '@mui/icons-material/Lens';


const Helper = () => {
  return <div className='main-help'>
      <div className="help-right">
<div className="help-imger">
    <img src="https://images.pexels.com/photos/5836/yellow-metal-design-decoration.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
</div>
      </div>
      <div className="help-left">
  <div className="helper">
      <div className="icon-naver">
<LensIcon style={{margin:"5px",color:"yellow"}}/>
<LensIcon style={{margin:"5px",color:"red"}}/>
<LensIcon style={{margin:"5px",color:"green"}}/>
{/* <LensIcon style={{margin:"10px",color:"blue"}}/>
<LensIcon style={{margin:"10px",color:"red"}}/>
<LensIcon style={{margin:"10px"}}/> */}
</div>
        <span className="title-changer">Want Help Creating Beautiful Websites ? <span style={{color:"crimson"}} className='title-changer'> </span></span>
        <span className="hey">Hey :)</span>
        <span className="name-header">👋 I'm Dileesha</span>
        {/* <p className='desc-header'>I' m Love Programming || Like To Learn New Things Day By Day |+|</p> */}
<p className='desc-header'>✔️ I Create Website + publishing   </p>
<p className='desc-header'>✔️ I'm Working With New Front-End Frameworks Like React </p>
<p className='desc-header'>✔️ IF You Need Beautiful Designs || You Can Connect Me</p>
<div className="helper-btn">
            <button>CONNECT ME!</button>
        </div>
        </div>
       
      </div>
  </div>;
};

export default Helper;
