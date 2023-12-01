import styled from 'styled-components';
export const  MenuRespos=styled.div`
  position:absolute;
  display:none;
   color:white;
   @media screen and (max-width: 1000px){
 display:block;
 right:2%;
 top:30%;
 fill:#ffffff;
   }
`

 export const Navbar = styled.p  `
     color:white; 
     font-size:13px;
     padding-right:30px;
   /* padding-left:20px; */
    &:hover{
    cursor: pointer;
    color:#6eb8ff;
    }
    &:first-child{
      color:#6eb8ff ;
    }
    @media screen and (max-width: 1000px){
 display:none;

   }

`

export const HeaderWrapper=styled.div`
display:flex;
width:100%;
height:80px;
flex-direction:row;
  /* justify-content: space-around; */
  position:fixed;
background:none;
  align-items:center;
  color:white;
  font-size:12px;
  z-index:3;
 
`

export  const ButtonNav=styled.button`
width:100px;
margin-right:55%;
    padding:10px;
    border:1px solid white;
    border-radius:5px;
    color:white;
    font-size:13px;
    background: none;
    &:hover{
      color:black;
      background-color:white;
      cursor: pointer;
    }
    @media screen and (max-width: 1060px){
 margin-right:30%;

   }
    @media screen and (max-width: 500px){
border:none;
margin-right:2%;
   }
   @media screen and (max-width: 400px){
display:none;
   }
`
export const Subscription=styled.div`
 font-size:13px;
 margin-right:5%;
  &:hover{
    color:#6eb8ff;
    cursor: pointer;
  }
  @media screen and (max-width: 1060px){
 margin-right:2%;

   }

`
