import Header from "./header/Header";
import { ShowStarPage ,ShowFooterPage } from "./App.styled";
import { useState } from "react";
import "./App.css";
import Poster from "./poster/Poster";
import NavFooter from "./navfooter/Navfooter";
import SpecialFilm from "./specialfilm/SpecialFilm";
import WarFilm from "./warfilm/WarFilm";
import FamilyFilm from "./familyfilm/FamilyFilm";
import Stars from "./stars/Stars";
import Footer from "./footer/Footer";
import Advertis from "./navfooter/advertising/Advertising";
import BioFilm from "./biography/Biography";
import Animation from "./animation/Animation";
import FreeFilm from "./freefilm/FreeFilm";
function App() {
  const [isVisiblePage, setIsVisiblePage] = useState(true);
  const [isVisibleFooter, setIsVisibleFooter] = useState(true);
  const [isVisibleStar, setIsVisibleStar] = useState(true);
  const [isVisibleStarBio, setIsVisibleStarBio] = useState(false);
  return (
    <div className="App">
      <div className="yas">
        <Header
          isVisiblePage={isVisiblePage}
          isVisibleStar={isVisibleStar}
          setIsVisiblePage={setIsVisiblePage}
          setIsVisibleStar={setIsVisibleStar}
          setIsVisibleStarBio={setIsVisibleStarBio}
          isVisibleStarBio={isVisibleStarBio}
          isVisibleFooter={isVisibleFooter}
          setIsVisibleFooter={setIsVisibleFooter}
        ></Header>
        <ShowStarPage showPage={isVisiblePage}>

          <Poster></Poster>
          <SpecialFilm></SpecialFilm>
          <WarFilm></WarFilm>
          <FamilyFilm></FamilyFilm>
          <BioFilm></BioFilm>
          <Animation></Animation>
          <FreeFilm></FreeFilm>
        </ShowStarPage>
        <Stars
          isVisiblePage={isVisiblePage}
          isVisibleStar={isVisibleStar}
          setIsVisiblePage={setIsVisiblePage}
          setIsVisibleStar={setIsVisibleStar}
          setIsVisibleStarBio={setIsVisibleStarBio}
          isVisibleStarBio={isVisibleStarBio}
          isVisibleFooter={isVisibleFooter}
          setIsVisibleFooter={setIsVisibleFooter}
        ></Stars>
      </div>
        <NavFooter></NavFooter>
      <Footer></Footer>
         </div>
  );
}

export default App;
