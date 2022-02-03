import './footer.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LensIcon from '@mui/icons-material/Lens';

const Footer = () => {
  return <div className='footer'>
     <span className='df'>Designed  by @Dileeesha © 2022 All rights reserved🤍</span> 
      <div className="footer-naver">
<LensIcon style={{margin:"5px",color:"yellow"}}/>
<LensIcon style={{margin:"5px",color:"red"}}/>
<LensIcon style={{margin:"5px",color:"green"}}/>
</div>
     </div>
};

export default Footer;
