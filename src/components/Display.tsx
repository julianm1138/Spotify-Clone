import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import { Route, Routes } from "react-router-dom";

export default function Display() {
  return (
    <h1 className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121122] text-white overflow-auto lg:w-[75%] lg:ml-0">
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Routes>
    </h1>
  );
}
