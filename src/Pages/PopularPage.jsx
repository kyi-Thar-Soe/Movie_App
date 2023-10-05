import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useEffect, useState } from "react"
import { ApiCall } from "../ApiService/ApiCall"
import { SampleNextArrow,SamplePrevArrow } from "../Components/SliderArrow"
import PopularCard from "../Components/PopularCard"

export default function PopularPage() {
    const [data,setData] = useState();
    const PopularMovies = async() => {
       const popularData =  await ApiCall('https://api.themoviedb.org/3/movie/popular?&api_key=56d0cda1d4d8fe8688027624da06a5ec','get');
       setData(popularData.data.results);
    }
    useEffect(() => {
        PopularMovies()
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
        <div className="popular">
        <div className="popular-container">
            <div className="heading">
                <h1 id="popular">Popular Movies</h1>
            </div>
            <div className="content">
            <Slider {...settings}>
                {data?.map((item,index) => {
                    return <PopularCard key={index} item={item}/>
                })}
            </Slider>
            </div>
        </div>
        </div>
        </>
    )
}