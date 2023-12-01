import { useEffect, useState } from "react";
import axios from "axios";
import {
  WarFilmList,
  WarFilmTitle,
  WarFilmImg,
  WarFilmItem,
  SelectedWarItem,
  SelectedWarFilmTitle,
  GenereList,
  Genere, WarFilmDetail, WarTitr, FreeLable, CloseWarfilm
} from "./Warfilm.styled";
import SelectedWarFilmData from "./warfilmdata/SelectedWarFilmData"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import 'swiper/css/free-mode';
import { Pagination, Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css/thumbs';
export default function WarFilm() {
  const [warFilmList, setWarFilmList] = useState([]);
  const [selectedWarFilm, setSelectedWarFilm] = useState();
  const [selectedFilmHover, setSelectedFilmHover] = useState();
  const [displayed, setDisplayed] = useState(false);
  const [displayedItem, setDisplayedItem] = useState(false);
  const [isVisibleWarFilm, setIsVisibleWarFilm] = useState(false)
  useEffect(() => {
    axios.get("https://moviesapi.ir/api/v1/genres/14/movies?page=1").then((res) =>
      setWarFilmList(res.data.data));
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
  function closewarfilm() {
    setIsVisibleWarFilm(false);
  }
  function showwarfilm() {
    setIsVisibleWarFilm(true);
  }
  function closewarfilmposter() {
    setIsVisibleWarFilm(false);
  }

  return (
    <div >

      <WarTitr

        onMouseEnter={() => setDisplayed(true)}
        onMouseLeave={() => setDisplayed(false)}

      >جنگی
        {displayed && (
          <span>مشاهده ی همه   &#11160;</span>
        )}
      </WarTitr>

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
        <WarFilmList>

          {warFilmList.map((film) => {
            return (<SwiperSlide>

              <WarFilmItem className="freelable">
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
                    <WarFilmImg
                      src={film.poster}
                      onClick={() => {
                        setSelectedWarFilm(film);
                        showwarfilm()
                      }}

                    >
                    </WarFilmImg>

                  </div>


                  {displayedItem && selectedFilmHover && selectedFilmHover == film && (
                    <WarFilmDetail>
                      <ul className="filmdetail">
                        <li>{film.year}</li>
                        <li>{film.country}</li>
                        <li>{film.imdb_rating}
                          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="15" fill="#ffffff" class="i-icon-0-1-188"><path d="M11.107 9.587c.1-.424.122-.824.2-1.248l.122-.965.122-.918a7 7 0 0 1 .1-.706l.1-.753c.05-.235.073-.494.1-.73.024-.212 0-.212.22-.212h3.746c.122 0 .147.024.147.14V15.78c0 .094-.024.14-.122.14h-2.36c-.122 0-.147-.024-.147-.14v-6.3h-.024l-.27 1.46-.245 1.295-.22 1.295-.2 1.13-.22 1.177c-.024.094-.05.118-.147.118h-1.662c-.05 0-.1 0-.1-.07l-.343-1.837-.367-1.884-.367-1.978-.147-.73v6.357c0 .118-.024.165-.147.165h-2.4c-.122 0-.147-.024-.147-.14V4.242c0-.094.024-.14.122-.14h3.453c.073 0 .122 0 .147.094l.27 1.483.294 1.6.22 1.32a3.5 3.5 0 0 1 .272.99zm6.288.3V4.195c0-.14.05-.165.17-.165h3.942a4.46 4.46 0 0 1 1.665.235 2.66 2.66 0 0 1 1.175.8 2.25 2.25 0 0 1 .367.894 6.31 6.31 0 0 1 .049 1.176v6.352a1.8 1.8 0 0 1-.661 1.459 2.76 2.76 0 0 1-1.1.518 6.59 6.59 0 0 1-1.665.212l-3.8.024c-.122 0-.1-.07-.1-.14l-.043-5.67zm2.9-.094v3.858c0 .094.024.118.122.118a4.51 4.51 0 0 0 .563-.024.56.56 0 0 0 .514-.588V6.383c.006-.183-.1-.35-.27-.423a2.18 2.18 0 0 0-.784-.118c-.122 0-.147.024-.147.14zm8.917-3.08a5.12 5.12 0 0 1 1.494-.73 2.02 2.02 0 0 1 1.812.4 1.45 1.45 0 0 1 .588 1.2v7c-.022.595-.464 1.1-1.053 1.177a4.36 4.36 0 0 1-1.1.047 4.08 4.08 0 0 1-1.053-.26l-.857-.26c-.086-.026-.18.013-.22.094-.07.133-.12.276-.147.424-.024.07-.05.094-.122.094H26.12c-.073 0-.1-.024-.1-.07V4.22c0-.14.025-.165.17-.165h2.8c.17 0 .17 0 .17.188l.05 2.472zm.2 3.955v3.085a.46.46 0 0 0 .1.306c.082.133.244.2.392.14.17-.047.22-.118.22-.33v-6.1a.7.7 0 0 0-.024-.235c-.046-.186-.226-.308-.416-.282-.147.024-.27.07-.27.33zM1.924 9.963V4.195c0-.118.024-.14.147-.14h2.62c.122 0 .122.024.122.14v11.583c0 .118-.024.14-.147.14h-2.62c-.122 0-.147-.024-.147-.14l.025-5.815z"></path></svg>
                        </li>
                      </ul>

                    </WarFilmDetail>
                  )}
                  {/* <div className="lable-wrapper">   <FreeLable>رایگان</FreeLable></div> */}

                  <WarFilmTitle>{film.title}</WarFilmTitle>
                </div>
              </WarFilmItem>
            </SwiperSlide>

            );
          })}

        </WarFilmList>
      </Swiper>
      {
        selectedWarFilm && (
          <SelectedWarItem showWarFilm={isVisibleWarFilm} >
            <SelectedWarFilmData idWar={selectedWarFilm.id}></SelectedWarFilmData>
            <CloseWarfilm onClick={closewarfilm}   ></CloseWarfilm>
            <img src={selectedWarFilm.poster}></img>
            {/* <SelectedWarFilmTitle>{selectedWarFilm.title}</SelectedWarFilmTitle>
            <GenereList> genere : {selectedWarFilm.genres.map((gen) => {
              return (<Genere>{gen}   </Genere>)
            })}

            </GenereList> */}
          </SelectedWarItem>
        )
      }



    </div>
  );
}
