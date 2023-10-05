import { FaStar,FaStarHalfAlt,FaPlay } from 'react-icons/fa'
import playButton from '../../assets/play-button.png'
import play from '../../assets/play.png'
import './MovieCard.css'
import { useState } from 'react'
import HandlePlay from '../PlayVideo/HandlePlay'

export default function MovieCard({item}) {
    const [showFullOverview,setShowFullOverview] = useState();
    const [modal,setModal] = useState(false);
    const toggle = () => {
        setShowFullOverview(!showFullOverview)
    };
    const handlePlay = () => {
        setModal(!modal)
    };
   return(
        <div className="box">
            <div className="coverImage">
                <img  src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`}
                alt="movie poster"/>
            </div>
            <div className="content flex">
                <div className="details row">
                    <h1>{item.original_title}</h1>
                    <div className="rating flex">
                        <div className="rate">
                           <span><FaStar/></span>
                           <span><FaStar/></span>
                           <span><FaStar/></span>
                           <span><FaStar/></span>
                            <span><FaStarHalfAlt/></span>
                        </div>
                        <p>
                            {showFullOverview ?  item?.overview : item?.overview.slice(0,150)}
                            {showFullOverview ?
                            <button onClick={toggle} className='border-0 bg-transparent text-primary ms-2 fw-bold'>
                               ...
                            </button> : 
                            <button onClick={toggle} className='border-0 bg-transparent text-primary ms-2 fw-bold'>
                             ... See More
                           </button>
                            }
                        </p>
                        <div className='cast'>
                            <h6>
                                <span>Popularity: </span>
                                {item?.popularity}
                            </h6>
                            <h6>
                                <span>Release-Date: </span>
                                {item?.release_date}
                            </h6>
                        </div>
                        <button className='primary-btn' onClick={handlePlay}>
                             <FaPlay className='me-2'/>PLAY NOW
                        </button>
                    </div>
                </div>
                <div className='playButton'>
                    <button>
                        <div className='img'>
                        <img src={playButton} alt='' />
                        <img src={play} className='change' />
                        </div>
                        <span className='trailer'>WATCH TRAILER</span>
                    </button>
                </div>
            </div>
            <HandlePlay handlePlay={handlePlay} modal={modal}/>
        </div>
       
    )
}