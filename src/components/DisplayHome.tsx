import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/assets";

import AlbumCard from "./AlbumCard";

export default function DisplayHome() {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Trending</h1>
        <div className="flex overflow-auto">
          {albumsData.map((album, index) => (
            <AlbumCard
              key={index}
              name={album.name}
              desc={album.desc}
              id={album.id}
              image={album.image}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {songsData.map((song, index) => (
            <AlbumCard
              key={index}
              name={song.name}
              desc={song.desc}
              id={song.id}
              image={song.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}
