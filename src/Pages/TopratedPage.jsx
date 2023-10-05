import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useEffect, useState } from "react"
import { ApiCall } from "../ApiService/ApiCall"
import { SampleNextArrow,SamplePrevArrow } from "../Components/SliderArrow"
import TopRatedCard from "../Components/TopRatedCard"

export default function TopRatedPage() {
    const [data,setData] = useState();
    const  topRatedMovies= async() => {
       const topRatedData =  await ApiCall('https://api.themoviedb.org/3/movie/top_rated?api_key=56d0cda1d4d8fe8688027624da06a5ec','get');
       setData(topRatedData.data.results);
    }
    useEffect(() => {
       topRatedMovies()
    },[]);
   
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />, 
        prevArrow: <SamplePrevArrow />, 
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
        <div className="toprated">
        <div className="toprated-container">
            <div className="heading">
                <h1 id="topRated">Top Rated Movies</h1>
            </div>
            <div className="content">
            <Slider {...settings}>
                {data?.map((item,index) => {
                    return <TopRatedCard key={index} item={item}/>
                })}
            </Slider>
            </div>
        </div>
        </div>
        </>
    )
}