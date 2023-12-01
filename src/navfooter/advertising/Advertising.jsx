import {Logo   }  from "./Advertising.styled"
import  Grid from "./Grid"
import Present from "./Present"
import Brand from "./Brand"
import Contactus from "./contactus"
import "./advertising.css"
export  default function  Advertis(){
      return(
        <div className="background">
        <Logo></Logo>
      <h1>اینجا نماوا است</h1>
<Grid></Grid>  
<Present></Present> 
<Brand></Brand>  
<Contactus></Contactus> 
<div className="cleanbackgeround"></div> 
        </div>
    );
}