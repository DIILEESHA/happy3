import React from "react";
import "./header.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import me from '../../assests/me.jpg'

const Header = () => {
  return (
    <div className="header">
      <div className="header-dev">
        {/* <img src="https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Html-512.png" alt="" /> */}
      </div>
      <div className="headerdesc">
        <img
          src={"https://avatars.githubusercontent.com/u/89340276?s=400&u=1467b0e6aaef8e761ea6e7c83922d6935f05f493&v=4"}
          alt=""
          className="dpimg"
          
        />

        <span className="sm">Dileesha Lakshan</span>
        <span className="lg">Student Web Developer</span>
      </div>
      <div className="socialheaders">
      <>
      <a href="https://github.com/DILEESHA1">
        <GitHubIcon  style={{ margin: "10px",height:"40px",width:"40px",color:"white" }}   />
        </a>
        </>
        <a href="https://www.linkedin.com/in/dileesha-nawarathna-145813219/">
        <LinkedInIcon style={{ margin: "10px",height:"40px",width:"40px",color:"white"}} />
        </a>
        {/* <TwitterIcon style={{ margin: "10px",height:"40px",width:"40px" }} />
        <InstagramIcon style={{ margin: "10px",height:"40px",width:"40px" }}  /> */}
        {/* <a href="newcocfarmer@gmail.com">
        <MailOutlineRoundedIcon style={{ margin: "10px",height:"40px",width:"40px" }} />
        </a> */}
    
      </div>
      <div className="imghandler">
        <img src="https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
      </div>
      
    </div>
  );
};

export default Header;
