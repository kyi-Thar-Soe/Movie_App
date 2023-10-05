import Footer from "../Components/Footer/Footer";
import Home from "./Home";
import NowPlayingPage from "./NowPlayingPage";
import PopularPage from "./PopularPage";
import TopRatedPage from "./TopratedPage";
import UpComingPage from "./UpComingPage";

export default function HomePage() {
    return(
        <>
        <Home/>
        <UpComingPage/>
        <PopularPage/>
        <TopRatedPage/>
        <NowPlayingPage/>
        <Footer/>
        </>
    )
}