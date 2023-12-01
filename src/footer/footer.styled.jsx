import styled from "styled-components"
export const AppWrapper = styled.div`
box-shadow: 0px 0px 15px 2px rgba(51, 52, 56, 0.7);
        background:#222327;
    width:85%;
    height:100px;
    margin-right:7%;
    margin-top:2%;
    display:flex;
    align-items:center;
     gap:10px;
    margin-bottom:30px;
    @media screen and (max-width: 1000px){
  background:none;
flex-direction:column;
box-shadow:none;
height:150px;
align-items:start;
    }
  
  `
export const Aboutus = styled.div`
color:white;
display:flex;
flex-direction: row;
justify-items:start;
    width:85%;
    margin-right:7%;
    height:200px;
    @media screen and (max-width: 1300px){
     flex-direction:column;
           height:auto;
   }

`
export const LogoFooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
export const AppDownloud=styled.div`
display:flex;
flex-direction:row;
margin-right:40%;
@media screen and (max-width: 1000px){
  margin-right:0%;
  justify-content:right;
  margin-top:20px;
     }

`
export const NamavaLogoApp=styled.div`
  display:flex;
  flex-direction:row;
 gap:20px;
 align-items:center;

`



