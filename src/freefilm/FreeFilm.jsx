import { useEffect, useState } from "react";
import axios from "axios";
import {
  FreeFilmList,
  FreeFilmTitle,
  FreeFilmImg,
 FreeFilmItem,
  SelectedFreeItem,
  SelectedFreeFilmTitle,
  GenereList,
  Genere , FreeFilmDetail, FreeTitr, FreeLable, CloseFreefilm 
  , FreeLableWrapper
} from "./FreeFilm.styled";
import SelectedFreeFilmData from "./freefilmdata/SelectedFreeFilmData"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import 'swiper/css/free-mode';
import { Pagination, Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css/thumbs';
export default function FreeFilm() {
  const [freeFilmList, setFreeFilmList] = useState([]);
  const [selectedFreeFilm, setSelectedFreeFilm] = useState();
  const [selectedFilmHover, setSelectedFilmHover] = useState();
  const [displayed, setDisplayed] = useState(false);
  const [displayedItem, setDisplayedItem] = useState(false);
  const [isVisibleFreeFilm,setIsVisibleFreeFilm]=useState(false)
  useEffect(() => {
    axios.get("https://moviesapi.ir/api/v1/movies?page=23").then((res) =>
      setFreeFilmList(res.data.data));
    // {
    //   "id": 1,
    //   "title": "The Shawshank Redemption",
    //   "poster": "https://moviesapi.ir/images/tt0111161_poster.jpg",
    //   "year": "1994",
    //   "country": "USA",
    //   "imdb_rating": "9.3",
    //   "genres": [
    //     "Crime",
    //     "Drama"
    //   ],
    //   "images": [
    //     "https://moviesapi.ir/images/tt0111161_screenshot1.jpg",
    //     "https://moviesapi.ir/images/tt0111161_screenshot2.jpg",
    //     "https://moviesapi.ir/images/tt0111161_screenshot3.jpg"
    //   ]
    // }
  }, []);
  function closefreefilm() {
    setIsVisibleFreeFilm(false);
    }
  function showfreefilm() {
    setIsVisibleFreeFilm(true);
    }
  function closefreefilmposter() {
    setIsVisibleFreeFilm(false);
    }

  return (
    <div >

      <FreeTitr

        onMouseEnter={() => setDisplayed(true)}
        onMouseLeave={() => setDisplayed(false)}

      >رایگان در نماوا
        {displayed && (
          <span>مشاهده ی همه   &#11160;</span>
        )}
      </FreeTitr>

      <Swiper style={{
        '--swiper-navigation-color': '#ffff',
        '--swiper-navigation-size': '30px',
      }}
      breakpoints={ {
        300: {
          slidesPerView: 1,
          spaceBetween: 3,
          width:225,
        },
        400: {
          slidesPerView: 1,
          spaceBetween: 3,
          width:225,
        },
        500: {
          slidesPerView: 2,
          spaceBetween: 3,
          width:450,
        },
        600: {
          slidesPerView: 3,
          spaceBetween: 3,
          width:700,
        },
        700: {
          slidesPerView: 3,
          spaceBetween: 3,
          width:700,
        },
        800: {
          slidesPerView: 3,
          spaceBetween: 3,
          width:700,
        },
        900: {
          slidesPerView: 3,
          spaceBetween: 3,
          width:700,
        },
        1100: {
          slidesPerView: 4,
          spaceBetween: 3,
          width:900,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 3,
          width:1150,
        },
        1300: {
          slidesPerView: 6,
          spaceBetween: 3,
          width:1350,
        },
        1500: {
          slidesPerView: 7,
          spaceBetween: 3,
          width:1600,
                 },
      }}
        watchSlidesProgress={true} 
        slidesPerView={7} className="mySwiper"
        spaceBetween={5}
        pagination={false}
        navigation={true}
        modules={[FreeMode, Pagination, Navigation]}

      >
        <FreeFilmList>

          {freeFilmList.map((film) => {
            return (<SwiperSlide>

              <FreeFilmItem className="freelable">
                <div
                  onMouseEnter={() => {
                    setDisplayedItem(true);
                    setSelectedFilmHover(film)
                  }}
                  onMouseLeave={() => {
                    setDisplayedItem(false);
                    setSelectedFilmHover('')
                  }}
                >
                  <div className="showdetail">
                    <FreeFilmImg
                      src={film.poster}
                      onClick={() => {
                        setSelectedFreeFilm(film);
                        showfreefilm()
                        }}

                    >
                    
                    </FreeFilmImg>

                  </div>

                
                {displayedItem && selectedFilmHover && selectedFilmHover == film && (
                  <FreeFilmDetail>
                    <ul >
                      <li>{film.year}</li>
                      <li>{film.country}</li>
                      <li>{film.imdb_rating}
                      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="15" fill="#ffffff" class="i-icon-0-1-188"><path d="M11.107 9.587c.1-.424.122-.824.2-1.248l.122-.965.122-.918a7 7 0 0 1 .1-.706l.1-.753c.05-.235.073-.494.1-.73.024-.212 0-.212.22-.212h3.746c.122 0 .147.024.147.14V15.78c0 .094-.024.14-.122.14h-2.36c-.122 0-.147-.024-.147-.14v-6.3h-.024l-.27 1.46-.245 1.295-.22 1.295-.2 1.13-.22 1.177c-.024.094-.05.118-.147.118h-1.662c-.05 0-.1 0-.1-.07l-.343-1.837-.367-1.884-.367-1.978-.147-.73v6.357c0 .118-.024.165-.147.165h-2.4c-.122 0-.147-.024-.147-.14V4.242c0-.094.024-.14.122-.14h3.453c.073 0 .122 0 .147.094l.27 1.483.294 1.6.22 1.32a3.5 3.5 0 0 1 .272.99zm6.288.3V4.195c0-.14.05-.165.17-.165h3.942a4.46 4.46 0 0 1 1.665.235 2.66 2.66 0 0 1 1.175.8 2.25 2.25 0 0 1 .367.894 6.31 6.31 0 0 1 .049 1.176v6.352a1.8 1.8 0 0 1-.661 1.459 2.76 2.76 0 0 1-1.1.518 6.59 6.59 0 0 1-1.665.212l-3.8.024c-.122 0-.1-.07-.1-.14l-.043-5.67zm2.9-.094v3.858c0 .094.024.118.122.118a4.51 4.51 0 0 0 .563-.024.56.56 0 0 0 .514-.588V6.383c.006-.183-.1-.35-.27-.423a2.18 2.18 0 0 0-.784-.118c-.122 0-.147.024-.147.14zm8.917-3.08a5.12 5.12 0 0 1 1.494-.73 2.02 2.02 0 0 1 1.812.4 1.45 1.45 0 0 1 .588 1.2v7c-.022.595-.464 1.1-1.053 1.177a4.36 4.36 0 0 1-1.1.047 4.08 4.08 0 0 1-1.053-.26l-.857-.26c-.086-.026-.18.013-.22.094-.07.133-.12.276-.147.424-.024.07-.05.094-.122.094H26.12c-.073 0-.1-.024-.1-.07V4.22c0-.14.025-.165.17-.165h2.8c.17 0 .17 0 .17.188l.05 2.472zm.2 3.955v3.085a.46.46 0 0 0 .1.306c.082.133.244.2.392.14.17-.047.22-.118.22-.33v-6.1a.7.7 0 0 0-.024-.235c-.046-.186-.226-.308-.416-.282-.147.024-.27.07-.27.33zM1.924 9.963V4.195c0-.118.024-.14.147-.14h2.62c.122 0 .122.024.122.14v11.583c0 .118-.024.14-.147.14h-2.62c-.122 0-.147-.024-.147-.14l.025-5.815z"></path></svg> 
                        </li>
                    </ul>

                  </FreeFilmDetail>
                )}
                <FreeLable><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 36" width="45" height="36" fill="none" class="o-freeBadge-0-1-184"><path d="M0 4a4 4 0 0 1 4-4h56a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4z" fill="url(#A)"></path><path d="M17.278 27.022c-.388 0-.761-.046-1.12-.138s-.698-.223-1.018-.393a4.41 4.41 0 0 1-.88-.625 4.3 4.3 0 0 1-.698-.836c-.233-.378-.412-.8-.538-1.265s-.189-.943-.189-1.447c0-.32.019-.63.058-.931a7.36 7.36 0 0 1 .182-.924 9.93 9.93 0 0 1 .335-.989l.509-1.134 1.636.778-.436.953c-.116.281-.211.548-.284.8s-.126.487-.16.72-.044.468-.044.72c0 .33.041.645.124.945s.196.579.342.822a2.54 2.54 0 0 0 .916.822c.383.209.805.313 1.265.313h1.476c.514 0 .931-.053 1.251-.16s.577-.259.756-.458.301-.429.364-.705a3.84 3.84 0 0 0 .102-.916v-4.895h1.811v4.895c0 1.353-.359 2.366-1.076 3.04s-1.782 1.011-3.207 1.011h-1.476zm-.145-9.513l1.309-1.324 1.338 1.338-1.324 1.324-1.324-1.338zm11.403 5.6a8 8 0 0 1-1.375-.102c-.383-.063-.705-.158-.967-.284a1.87 1.87 0 0 1-.633-.495 2.16 2.16 0 0 1-.356-.698c-.082-.267-.138-.567-.167-.902l-.036-1.12v-6.887h1.811v6.887l.036.931c.029.233.099.415.211.545s.289.211.516.255.553.058.96.058v1.811zm9.058 0h-.218c-.427 0-.798-.039-1.113-.116a3.62 3.62 0 0 1-.851-.334c-.252-.146-.485-.318-.698-.516l-.64-.676c-.116.305-.303.565-.56.778s-.543.386-.873.516-.674.223-1.047.276-.742.082-1.105.073H28.22v-1.811h2.371c.32 0 .616-.017.887-.051a2.93 2.93 0 0 0 .705-.182c.199-.087.356-.201.473-.342s.182-.313.196-.516c0-.209-.09-.473-.269-.793s-.405-.676-.691-1.069l-.96-1.244-1.076-1.338.305-1.476 6.313-3.062.742 1.658-5.52 2.553 1.36 1.825 1.367 1.818.735.946a5.38 5.38 0 0 0 .669.691c.228.189.465.334.713.436s.526.146.836.146h.218v1.811zm-7.353-11.011l5.542-2.407.378.815-6.015 2.625.095-1.033zM42.748 17l.058.24.109.466.116.604.116.676.087.655.036.56c0 .499-.082.933-.247 1.302s-.381.664-.647.902-.567.415-.902.531-.662.175-.996.175h-3.135v-1.811h3.185c.058 0 .141-.007.247-.022s.221-.066.327-.138.209-.182.291-.327.124-.354.124-.611a3.08 3.08 0 0 0-.029-.386l-.066-.494-.102-.531-.102-.516-.102-.444-.08-.313L42.748 17zm-.88 10.066l-1.222-1.236 1.207-1.251 1.251 1.251-1.236 1.236zm-3.047.007l-1.222-1.236 1.2-1.251 1.251 1.251-1.229 1.236zm8.031-3.964h-1.811V12.622h1.811v10.487zm4.656-.444c-.029.669-.153 1.27-.371 1.804s-.519.994-.902 1.367-.846.669-1.389.873-1.156.305-1.84.305h-.902v-1.811h.902c.465 0 .868-.048 1.207-.145s.618-.252.836-.465.381-.492.487-.836.16-.754.16-1.244v-4.429h1.811v4.582z" fill="#000"></path><defs><linearGradient id="A" x1="64" y1="0" x2=".15" y2="36.264" gradientUnits="userSpaceOnUse"><stop stop-color="#ffd12d"></stop><stop offset="1" stop-color="#f08453"></stop></linearGradient></defs></svg></FreeLable>
                <FreeFilmTitle>{film.title}</FreeFilmTitle>
                </div>
              </FreeFilmItem>
            </SwiperSlide>

            );
          })}

        </FreeFilmList>
      </Swiper>
      {
        selectedFreeFilm && (
          <SelectedFreeItem  showFreeFilm={isVisibleFreeFilm} > 
           <SelectedFreeFilmData idFree={selectedFreeFilm.id}></SelectedFreeFilmData> 
            <CloseFreefilm onClick={closefreefilm}   ></CloseFreefilm>
            <img src={selectedFreeFilm.poster}></img>         
            {/* <SelectedWarFilmTitle>{selectedWarFilm.title}</SelectedWarFilmTitle>
            <GenereList> genere : {selectedWarFilm.genres.map((gen) => {
              return (<Genere>{gen}   </Genere>)
            })}

            </GenereList> */}
          </SelectedFreeItem>
        )
      }



    </div>
  );
}