import './App.css'
import "bootstrap/dist/js/bootstrap.bundle.min"
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import DefaultLayout from './DefaultLayout/DefaultLayout'
import HomePage from './Pages/HomePage'
import { Context } from './Context/Context'
import { ApiCall } from './ApiService/ApiCall'
import { useRef, useState} from 'react'
import DetailPage from './Pages/DetailPage/DetailPage'
import LoginPage from './Pages/Login/LoginPage'

function App() {
  const [data,setData] = useState([]);
  const inputRef = useRef();
  
  const fetchMovies = async (name) => {
    const tempData = await ApiCall(`https://api.themoviedb.org/3/search/movie?query=${name}&api_key=56d0cda1d4d8fe8688027624da06a5ec`,'get');
    setData(tempData.data.results);
  };
  const handleSearch = () => {
    fetchMovies(inputRef.current.value)
  };

  return (
    <Context.Provider value={{data,setData,inputRef,handleSearch,fetchMovies}}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route  element={<DefaultLayout/>}>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='home' element={<HomePage/>}/>
        <Route path='details/:id' element={<DetailPage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </Context.Provider>
  )
}

export default App
