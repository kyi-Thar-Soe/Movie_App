import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {  useEffect, useState } from "react"
import { ApiCall } from "../ApiService/ApiCall"
import UpComingCard from "../Components/UpComingCard"
import { SampleNextArrow,SamplePrevArrow } from "../Components/SliderArrow"

export default function UpComingPage() {
    const [data,setData] = useState([]);

    const upComingMovies = async() => { 
       const upComingData =  await ApiCall('https://api.themoviedb.org/3/movie/upcoming?api_key=56d0cda1d4d8fe8688027624da06a5ec','get');
       setData(upComingData.data.results);
    }
    useEffect(() => {
        upComingMovies()
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
        <div className="upcome">
        <div className="container">
            <div className="heading">
                <h1 id="upcome">Upcoming Movies</h1>
                <a href="/home">View All</a>
            </div>
            <div className="content">
            <Slider {...settings}>
                {data?.map((item,index) => {
                    return <UpComingCard key={index} item={item}/>
                })}
            </Slider>
            </div>
        </div>
        </div>
        </>
    )
}