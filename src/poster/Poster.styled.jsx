import styled from "styled-components";
export const Banner = styled.div`
height: 100%;
width: 100%;
position: relative;
box-sizing: border-box; 

`
export const BannerImg = styled.img`
position:absolute;
z-index:1;
width: 70%;
height: 100%;
filter:brightness(.5);
@media screen and (max-width: 1000px){
width: 100%;
   }
`
export const  BannerFilmDitail=styled.div`
z-index: 2;
background:linear-gradient(to right,rgba(0,0,0,1),
rgba(0,0,0,1),rgba(0,0,0,1),rgba(0,0,0,.4)
,rgba(0,0,0,0));
    height:100%;
    width:60%;
    color:white;
    padding-left:10%;
    text-align:end;
    position:absolute;
    display:flex;
    flex-direction: column;
    line-height:1.79;
    left:0px;
    justify-content:center;
    align-items:start;
    direction:ltr;
    @media screen and (max-width: 1000px){
height:auto;
width:100%;
bottom:50px;
background:linear-gradient(to top,rgba(0,0,0,.7),
rgba(0,0,0,.6),rgba(0,0,0,.5),rgba(0,0,0,.4)
,rgba(0,0,0,0));
   }
    `
export const FilmPosterTitle=styled.h2`
    font-size:30px;
    font-weight:800;
    font-style:italic;
`
export const FilmQuality=styled.div`
height:50px;
max-width:700px;
min-width:400px;
justify-items:start;
align-items:center;
display:grid;
grid-template-columns:1fr 1fr 1fr; 
font-size:17px;
font-weight:bold;
svg{
       position:relative;
   top:14px;
}
`
export const PosterGenres=styled.div`
        font-size:17px;
    font-style:italic;
    font-weight:bold;
   
`
export const GenresItem=styled.div`
font-size:15px;
padding-left:5px;
display:flex;
align-items: center;;
  `
export const PosterGenresWrapper=styled.div`
 display:flex;
 flex-direction:row;
`