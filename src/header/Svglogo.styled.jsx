import styled from "styled-components"

export const SvgLogo=styled.svg`
width:90px;
height:90px;
margin-top:5px;
 fill:white;
 &:hover{
    cursor: pointer;
    color:blue;
 }
 @media screen and (max-width: 1000px){
 margin-right:7%;
 margin-top:2%;
   }
   @media screen and (max-width: 440px){
margin-right:10%;
   }
`
export const SvgSearch=styled.svg`
width:60px;
padding-top:5px;
margin-right:20%;
height:30px;
 /* background-color:red; */
 fill:white;
 &:hover{
    cursor: pointer;
 }
 @media screen and (max-width: 1200px){
 margin-right:10%;

   }
 @media screen and (max-width: 1060px){
 margin-right:8%;

   }
   @media screen and (max-width: 1000px){
margin-right:45%;

   }
   @media screen and (max-width: 780px){
margin-right:37%;

   }
   @media screen and (max-width: 660px){
margin-right:30%;

   }
   @media screen and (max-width: 577px){
margin-right:20%;

   }
   @media screen and (max-width: 380px){
margin-right:15%;

   }
   @media screen and (min-width: 1620px){
margin-right:40%;

   }
   @media screen and (min-width: 1380px) and (max-width: 1620px){
margin-right:30%;

   }

`
export const EnterLogo=styled.div`
   display: none;
   @media screen and (max-width: 400px){
display:block;
   }
   @media screen and (max-width: 400px){
margin-right:25%;
   }

`
