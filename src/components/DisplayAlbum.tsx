import { albumsData } from "../assets/assets";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets";

export default function DisplayAlbum() {
  const { id } = useParams();
  const albumData = albumsData[id];
  console.log(id);
  console.log(albumData);

  return (
    <>
      <Navbar />
      <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end">
        <img
          className="w-48 rounded"
          src={albumData.image}
          alt="Album cover art"
        />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">
            {albumData.name}
          </h2>
          <h4>{albumData.desc}</h4>
          <p className="mt-1">
            <img
              className="inline-block w-5"
              src={assets.spotify_logo}
              alt="spotify logo"
            />
            <b>Spotify</b>• 12,939 likes • <b>50 songs,</b>
            about 2 hours and 30 minutes
          </p>
        </div>
      </div>
    </>
  );
}
