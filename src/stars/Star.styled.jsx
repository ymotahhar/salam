import styled from "styled-components";
export const ListStarTitr=styled.p`
    width:190px;
  height:40px;
    color:white;
  cursor: pointer;
  font-size:18px;
  font-weight:bold;
  margin-right:30px;
  margin-top:40px;
span{
    font-size:12px; 
    margin-right:35px;
}
  
`
export const StarList = styled.div`
padding-left:30px;
padding-right:30px;
    width:100%;
    height:100vh;
        display:flex;
   flex-wrap:wrap; 
     justify-content:space-around;
 `

export const StarItem = styled.div`
    color:white;
    position:relative;
`
export const StarTitle = styled.div`
    color:white;
  margin-top:20px;
    text-align:center;
`
export const StarImg = styled.img`
       border-radius:50%;
 width:200px;
 height:200px;
 cursor: pointer;
 filter: brightness(.7);
 &:hover{
filter:brightness(.3);
  box-shadow: 5px 7px 5px 7px black;
 
    transition:all .3s;
 }
`
export const StarDetail=styled.div`
ul{
  list-style: none;
}
position:absolute;
top:10%;
right:7%;

font-size:15px;
    color:white;
      line-height:30px;
      &:hover{
        cursor: pointer;
      }
`
export const SelectedStarItem = styled.div`
position:relative;
    width:100%;
    height:100vh;
    display:${props => props.showStarBio ? "flex" : "none"};
   flex-direction:column;
  background: linear-gradient(
    to left,
  
    rgba(0, 0, 0, .9),
    rgba(0, 0, 0, 0.5),
   
    rgba(0, 0, 0, 1)
  );
  img{
    height:100vh;
    width:65%;
    object-fit:center/cover;
    filter:brightness(.6);
    @media screen and (max-width: 1200px){
width:60%;
   }
   @media screen and (max-width: 1080px){
width:55%;
   }
   @media screen and (max-width: 960px){
width:100%
   }
}

`
export const SelectedStarBio = styled.div`
height:400px;
width:400px;
position: absolute;
top:30%;
left: 2%;
z-index:2;
font-style:italic;
text-align:center;
line-height:30px;
font-size:20px;
color:white;
@media screen and (max-width: 1200px){
width:40%;
   }
@media screen and (max-width: 1080px){
width:45%;
   }
   @media screen and (max-width: 960px){
   margin-top:260px;
width:99%;
height:235px;
left:2px;
background: linear-gradient(
    to top,
  
    rgba(0, 0, 0, .9),
    rgba(0, 0, 0, 0.5),
   
    rgba(0, 0, 0, 0)
  );
   }

`
export const ShowStarList=styled.div`
  display:${props => props.showStar ? "block" : "none"}; 
`

  
 
 