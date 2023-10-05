import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {  useEffect, useState } from "react"
import { ApiCall } from "../ApiService/ApiCall"
import { SampleNextArrow,SamplePrevArrow } from "../Components/SliderArrow"
import NowPlayingCard from "../Components/NowPlayingCard"

export default function NowPlayingPage() {
    const [data,setData] = useState([]);
    const nowPlayingMovies = async() => { 
       const nowPlayingData =  await ApiCall('https://api.themoviedb.org/3/movie/now_playing?api_key=56d0cda1d4d8fe8688027624da06a5ec','get');
       setData(nowPlayingData.data.results);
    }
    useEffect(() => {
        nowPlayingMovies()
    },[]);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        responsive: [
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
          ],
    };
    return(
        <>
        <div className="nowplaying">
        <div className="nowplaying-container">
            <div className="heading">
                <h1 id="nowPlaying">Now Playing Movies</h1>
            </div>
            <div className="content">
            <Slider {...settings}>
                {data?.map((item,index) => {
                    return <NowPlayingCard key={index} item={item}/>
                })}
            </Slider>
            </div>
        </div>
        </div>
        </>
    )
}