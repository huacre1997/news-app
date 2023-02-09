import { Routes, Route } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/Header/NavBar";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import Search from "../pages/Search";

function AppRouter() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="search" element={<Search />}></Route>
          <Route path="/news/:id" element={<Detail />}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default AppRouter;
