import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {  useContext, useEffect} from "react"
import { Context } from "../Context/Context"
import MovieCard from "../Components/MovieCard/MovieCard"
import { GrNext,GrPrevious } from "react-icons/gr"

export default function Home() {
    const {data,inputRef,fetchMovies} = useContext(Context);
    console.log(data)
    useEffect(() => {
      if(inputRef.current){
        fetchMovies(inputRef.current.value);
      }else{
        fetchMovies('Star War');
      }
    },[inputRef]);

    const SampleNextArrow = (props)=>{
        const { onClick } = props;
        return (
          <div className="control-btn" onClick={onClick}>
            <button className="next-btn">
              <GrNext />
            </button>
          </div>
        );
      }
    const SamplePrevArrow = (props) => {
        const { onClick } = props;
        return (
          <div className="control-btn" onClick={onClick}>
            <button className="prev-btn">
              <GrPrevious />
            </button>
          </div>
        );
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow/>,
    };
    return (
       <section className="home">
        <div className="homeContainer">
        <Slider {...settings}> 
        {data?.map((item,index)=> {
            return (
                <div key={index}>
                    <MovieCard item={item}/>
                </div>
            )
        })}
        </Slider>
        </div>
        </section>
        
    )
}