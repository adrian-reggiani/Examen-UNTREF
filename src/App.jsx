import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import MovieDetail from "./pages/MovieDetail"

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/MovieDetail" />
        <Route path="/movie/:id" element={<MovieDetail/>} /> {/*Falta el element que muestra las peliculas */}
        <Route path="/*" element={<p>404 - Page Not Found</p>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
