import styled from "styled-components";
export const AboutSelectedFreeFilm = styled.div`
    height:100%;
    width:60%;
    background:linear-gradient(to right, rgba(0,0,0,.1),rgba(0,0,0,1),rgba(0,0,0,1),rgba(0,0,0,0));
    position:absolute;
    z-index:1;
    text-align:start;
    left: 0px;
    display:flex;
    justify-content:center;
    flex-direction:column;
    line-height:1.79;
    padding-left:5%;
    direction:ltr;
    @media screen and (max-width: 800px){
  width:100%;
margin-top:22.5rem;
align-items:center;
height:350px;
background:linear-gradient(to top,rgba(0,0,0,1),rgba(0,0,0,.8),rgba(0,0,0,.2),rgba(0,0,0,0));

   }
     `
     export const SelectedFreeFilmTitle=styled.p`
     color:white;
     font-weight:800;
     font-size:25px;
         cursor: pointer;
     `
     export  const  FQuality=styled.div`
      display:grid;
      width:500px;
      grid-template-columns:1fr 1fr 1fr 1fr;
      @media screen and (max-width: 800px){
margin-left:10%;
width:70%;
      }
      `
      export const FRunTime=styled.div`
        color:white;
        font-size:14px;
       font-weight:bold;
      `
      export const FYear=styled.div`
        color:white;
        font-size:14px;
        font-weight:bold;
      `
      export const FRate=styled.div`
        color:white;
        font-size:14px;
        font-weight:bold;
      `
      export const  FCountry=styled.div`
        color:white;
        font-size:14px;
        font-weight:bold;
      `
      export const  FPlot=styled.p`
      cursor: pointer;
          color:white;
        font-size:14px;
        @media screen and (max-width: 800px){
max-width: 80%;
text-align:center;
        }
              `
      export const FPlay=styled.button`
     margin-top:20px;
      box-shadow: 0px 0px 5px 1px rgba(98, 125, 128, 0.65);
      text-align:center;
      position:relative;
           cursor: pointer;
           height:45px;
           border-radius:5px;
           width:160px;
           background-color:white;
          color:black;
        font-size:14px;
       svg{
            position:absolute;
top:14px;
right:15px;
 }
            &:hover {
            color:white;
            background-color:blue;
                                        }
      `
      export const FPlayer=styled.div`
      margin-top:20px;
             cursor: pointer;
          color:white;
        font-size:14px;
        @media screen and (max-width: 800px){
display:none;
   }
          `
      export const FDirector=styled.div`
        margin-top:20px;
             cursor: pointer;
          color:white;
        font-size:14px;
        @media screen and (max-width: 800px){
display:none;
   }
             `
      export const GenereList = styled.p`
      margin-top:20px;
        cursor: pointer;
          color:white;
        font-size:14px;
        font-family:Arial, Helvetica, sans-serif;
        @media screen and (max-width: 800px){
display:none;
   }
      `
    