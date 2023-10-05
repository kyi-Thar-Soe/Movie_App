import { useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { ApiCall } from '../../ApiService/ApiCall'
import './DetailPage.css'
import { Card,CardBody,CardTitle,CardText} from 'reactstrap'
import { FaPlay } from 'react-icons/fa'
import HandlePlay from '../../Components/PlayVideo/HandlePlay'
export default function DetailPage() {
    const {id} = useParams(); 
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [modal,setModal] = useState(false);
    const navigate = useNavigate();
    const moviesDetail = async () => {
        const detailsData = await ApiCall(`https://api.themoviedb.org/3/movie/${id}?api_key=56d0cda1d4d8fe8688027624da06a5ec`,'get');
        setData(detailsData.data);
        setLoading(!loading);
    };
    useEffect( () => {
        moviesDetail()
    },[]);
    const formatRuntime = (minutes) => {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        return `${hours}h ${remainingMinutes}m`;
      };
    const handlePlay = () => {
        setModal(!modal)
    };
    return (
        <>
            <Card  className={`col col-md-6 detail-div ${loading? 'transition-effect' : 'detail-loaded'}`}>
            <div className='d-flex row g-5'>
            <div className=' col-md-3'>

            <img alt="detail-img" 
            src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`}/>
            </div>
           
            <CardBody className=' col-md-9 detail-body'>
                <CardTitle tag="h1">
                <h1 className='title'>{data?.title}</h1>
                </CardTitle>
                <CardText>
                <p><span>Overview:</span> {data?.overview}</p> 
                <p><span>Popularity:</span> {data?.popularity}</p>
                <p><span>Original_language:</span> {data?.original_language}</p>
                <p><span>Runtime:</span> {formatRuntime(data?.runtime)}</p>
                </CardText>
                <div className='btn-div'>
                <button className='back' onClick={() => navigate(-1)}>
                    Back Home
                </button>
                <button className='primary-btn' onClick={handlePlay}>
                    <FaPlay className='me-2'/>PLAY NOW
                </button>
                </div>
            </CardBody>
            </div>
         </Card>
         <HandlePlay handlePlay={handlePlay} modal={modal} data={data}/>
        </>
    )
}