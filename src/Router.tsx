import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import Album from "./pages/Album/Album.tsx";
import CreateAlbum from "./pages/CreateAlbum/CreateAlbum.tsx";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/album" element={<Album />} />
          <Route path="/createAlbum" element={<CreateAlbum />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
