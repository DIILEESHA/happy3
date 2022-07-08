import React from "react";
import "./about.css";
import meremake from '../../assests/pro.png'
import LensIcon from '@mui/icons-material/Lens';
import Details from "./Details";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const About = () => {
  
  return (
    <div className="about-main">
      <div className="about-right">
      <div className="about-maincreator">
        <div className="about-name">Dileesha Lakshan </div>
        
        <div className="more-me">Hi  :)<FavoriteBorderIcon style={{display:"flex",alignItems:"center",justifyContent:"center"}} className="love"/> </div>
        <div className="about-description">
         
          I’m a Web Developer  | Frontend Developer  | Creator And Website
          Builder  | Loves New Ideas  | Challenges  | Self Learner
          
        </div>
      </div>
      </div>
<div className="about-left">
<div className="imghet">
  <img src={meremake} alt="" className="left-img-to" />
</div>
<div className="about-naverme">
<LensIcon style={{margin:"5px",color:"yellow"}}/>
<LensIcon style={{margin:"5px",color:"red"}}/>
<LensIcon style={{margin:"5px",color:"green"}}/></div>
</div>
    </div>
    

  );
};

export default About;
