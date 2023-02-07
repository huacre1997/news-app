import Detail from "./pages/Detail"
import Home from "./pages/Home"
import Search from "./pages/Search"
import { BrowserRouter, Routes, Route, Outlet, Link, useNavigate } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='search' element={<Search />}></Route>
        <Route path=':id' element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
