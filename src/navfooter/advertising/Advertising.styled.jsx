
import {styled} from "styled-components"
export const Logo=styled.div`
padding-top:30px;
padding-right:30px;
    fill:blue;
    height: 100px;
    width:100px;
`
export const Intro=styled.div`
margin-right:7%;
display:grid;
width:88%;
height:250px;
gap:30px;
/* grid-template-rows:1fr ; */
grid-template-columns:1fr  1fr 1fr 1fr;
@media screen and (max-width: 1360px){
grid-template-rows:1fr 1fr;
grid-template-columns:1fr 1fr;
height:250px;
gap:0px;
margin-bottom:10%;
width:95%;
margin-right:3%;
   }
` 