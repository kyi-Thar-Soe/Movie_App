import { useNavigate } from 'react-router'
import { FaStar } from "react-icons/fa"
export default function Card({item}) {
    const navigate = useNavigate();
    const cardDetails = (id) => {
        navigate(`/details/${id}`)
    };
    return(
        <>
        <div className="MovieBox" onClick={() => cardDetails(item?.id)}>
            <div className="MovieImg">
                <img src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`} alt="img"/>
            </div>
            <div className='info'>
                    <p>{item?.title.slice(0,20)}</p>
                    <div className='d-flex align-items-center'>
                    <h6>{item?.release_date}</h6>
                    <h5><FaStar className='star-icon'/>
                    <span className='ms-2'>
                    {item?.vote_average}
                    </span>
                    </h5>
                    </div>
            </div>
        </div>
        </>
    )
}