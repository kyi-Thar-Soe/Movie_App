import { FaFacebookF,FaTwitter,FaYoutube} from "react-icons/fa"
import { GrInstagram } from "react-icons/gr"
import './Footer.css'

export default function Footer() {
    const list = ["Terms of Use","Privacy-Policy","Blog","FAQ","Watch List"];
    return (
        <>
        <footer id="about">
        <div className="container-fluid footer-div">
            <div className="box1">
            <ul className="footer-list">
                {list.map((list,index) => {
                    return <li key={index}>{list}</li>
                })}
            </ul>
            <p>© 2022 STREAMIT. All Rights Reserved. All videos and shows on this platform are trademarks of, and all related images and content are the property of, Streamit Inc. Duplication and copy of this is strictly prohibited. All rights reserved.</p>
            </div>
            <div className="box2">
            <h3 className="mb-5">Follow Us</h3>
            <div className="followUs-icons">
            <span><FaFacebookF/></span>
            <span><FaTwitter/></span>
            <span><FaYoutube/></span>
            <span><GrInstagram/></span>
            </div>
            </div>
            <div className="box3">
                <h3>Grease App</h3>
                <div className="img">
                <img src='https://img.icons8.com/color/48/000000/apple-app-store--v3.png' />
                <span className="me-2">App Store</span>
                <img src='https://img.icons8.com/fluency/48/000000/google-play.png' />
                <span>Google Play Store</span>
            </div>
            </div>

        </div>
        </footer>
        </>
    )
}