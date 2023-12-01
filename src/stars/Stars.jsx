import { listStars } from "./ListaStars"
import './stars.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  ListStarTitr, StarDetail, StarImg,
  StarList, SelectedStarBio, StarItem, StarTitle, SelectedStarItem, ShowStarList
} from './Star.styled'
import 'swiper/css/free-mode';
import { Pagination, Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css/thumbs';
import { useEffect, useState } from "react";
export default function Stars(props) {
  function showBio() {

    props.setIsVisibleStar(false);
    props.setIsVisibleStarBio(true);
    props.setIsVisiblePage(false);
    props.setIsVisibleFooter(false);

  }
  // 

  // const [isVisibleStar, setIsVisibleStar]=useState(true);
  // const [isVisibleStarBio, setIsVisibleStarBio]=useState(false);
  // const [isVisiblePage, setIsVisiblePage]=useState(true);
  const [selectedStar, setSelectedStar] = useState();
  const [selectedFilmHover, setSelectedFilmHover] = useState();
  const [displayed, setDisplayed] = useState(false);
  const [displayedItem, setDisplayedItem] = useState(false);
  return (
    <div className="Starwrapper">
      <ShowStarList showStar={props.isVisibleStar}>
        <ListStarTitr

          onMouseEnter={() => setDisplayed(true)}
          onMouseLeave={() => setDisplayed(false)}

        >ستارگان
          {displayed && (
            <span>مشاهده ی همه   &#11160;</span>
          )}
        </ListStarTitr>

        <Swiper style={{
          '--swiper-navigation-color': '#ffff',
          '--swiper-navigation-size': '30px',
        }}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 3,
              width: 225,
            },
            400: {
              slidesPerView: 1,
              spaceBetween: 3,
              width: 225,
            },
            500: {
              slidesPerView: 2,
              spaceBetween: 3,
              width: 450,
            },
            600: {
              slidesPerView: 3,
              spaceBetween: 3,
              width: 700,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 3,
              width: 700,
            },
            800: {
              slidesPerView: 3,
              spaceBetween: 3,
              width: 700,
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 3,
              width: 700,
            },
            1100: {
              slidesPerView: 4,
              spaceBetween: 3,
              width: 900,
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 3,
              width: 1150,
            },
            1300: {
              slidesPerView: 6,
              spaceBetween: 3,
              width: 1350,
            },
            1500: {
              slidesPerView: 7,
              spaceBetween: 3,
              width: 1600,
            },
          }}
          watchSlidesProgress={true}
          slidesPerView={6} className="mySwiper"
          spaceBetween={5}
          pagination={false}
          navigation={true}
          modules={[Pagination, Navigation]}

        >
          <StarList>

            {listStars.map((list) => {
              return (<SwiperSlide >

                <StarItem>
                  <div
                    onMouseEnter={() => {
                      setDisplayedItem(true);
                      setSelectedFilmHover(list)
                    }}
                    onMouseLeave={() => {
                      setDisplayedItem(false);
                      setSelectedFilmHover('')
                    }}
                  >

                    <StarImg
                      src={list.Pic}
                      title={list.Name}
                      onClick={() => {
                        setSelectedStar(list);
                        showBio()
                      }}

                    >
                    </StarImg>


                    {displayedItem && selectedFilmHover && selectedFilmHover === list && (
                      <StarDetail>
                        <ul className="filmdetail">
                          <li>{list.Name}</li>

                        </ul>

                      </StarDetail>
                    )}
                  </div>
                </StarItem>
              </SwiperSlide>

              );
            })}

          </StarList>
        </Swiper>
      </ShowStarList>
      {
        selectedStar && (
          <SelectedStarItem showStarBio={props.isVisibleStarBio}>
            <img src={selectedStar.Poster}></img>
            <SelectedStarBio>
              <h1>زندگینامه</h1>
              {selectedStar.Bio}
            </SelectedStarBio>

          </SelectedStarItem>
        )
      }
    </div>
  );
}
