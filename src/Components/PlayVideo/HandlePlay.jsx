import {Modal,Button} from 'reactstrap'
import { RxCross1 } from 'react-icons/rx'
export default function HandlePlay({handlePlay,modal,data}){
    return(
        <Modal isOpen={modal} handlePlay={handlePlay}>
        <div className='modal-div'>
        <div handlePlay={handlePlay}>
        <Button className="border-0 bg-transparent btn video-btn" onClick={handlePlay}><RxCross1/></Button>
        <div className='video-div'>
            <video src={data?.video} controls className='position-relative'>
            </video>
            <p className='video-title'>Video does not support</p>
        </div>
        </div>
        </div>
        </Modal>
    )
}