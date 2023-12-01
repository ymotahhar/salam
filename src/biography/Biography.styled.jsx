import styled from "styled-components"
export const BioTitr = styled.p`
width:250px;
height:40px;
    color:white;
  cursor: pointer;
  font-size:18px;
  font-weight:bold;
  margin-right:30px;
  margin-top:40px;
span{
    font-size:12px; 
    margin-right:40px;
}
  
   `
export const FreeLable = styled.p`
    
    color:black;
    font-size:13px;
    position:absolute;
    top:0px;
right:5px;
    `
// ################################################################
export const BioFilmList = styled.div`
padding-left:30px;
padding-right:30px;
    width:100%;
    height:100vh;
    display:flex;
   flex-wrap:wrap;
    `

export const BioFilmItem = styled.div`
padding-right:35px;
    color:white;
    position:relative;
`
export const BioFilmTitle = styled.div`
    color:white;
    font-size:14px;
    line-height:1.75;
     text-align:center;
`
export const BioFilmImg = styled.img`
     border-radius:20px;
 width:210px;
 height:294px;
 cursor: pointer;
 filter: brightness(.7);
 &:hover{
filter:brightness(.3);
     transition:all .3s;
 }
`
export const BioFilmDetail = styled.div`
ul{

    list-style:none;
}
position:absolute;
top:55%;
right:5px;
font-size:14px;
font-weight:800;
    color:white;
       line-height:30px;
       &:hover{
        cursor: pointer;
       }
`
export const SelectedBioItem = styled.div`
margin-top:30px;
position:relative;
    width:100%;
    height:100vh;
box-sizing:border-box;
  display:${props => props.showBioFilm ? "flex" : "none"};
  flex-direction:column;
img{
  position:absolute;
      height:100%;
    width:60%;
    object-fit:center/cover;
    @media screen and (max-width: 800px){
width:100%;
   }
  
}
`
export const CloseBiofilm = styled.div`
   cursor: pointer;
    position: absolute;
    top:-10px;
    right:50%;
    z-index: 7;
    height:5px;
    width: 150px;
    background: rgb(235, 241, 235);
`