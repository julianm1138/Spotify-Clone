import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import { Route, Routes, useLocation } from "react-router-dom";
import { useRef, useEffect } from "react";
import { albumsData } from "../assets/assets";

export default function Display() {
  const displayRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.slice(-1) : "";
  const bgColor = albumsData[Number(albumId)].bgColor;

  useEffect(() => {
    if (displayRef.current) {
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
    } else {
      displayRef.current!.style.background = `#121212`;
    }
  });

  return (
    <div
      ref={displayRef}
      className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121122] text-white overflow-auto lg:w-[75%] lg:ml-0"
    >
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
}
