import { albumsData, songsData } from "../assets/assets";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets";

import { usePlayerContext } from "../Hooks";

export default function DisplayAlbum() {
  const { id } = useParams();

  if (id === undefined) {
    throw new Error("Error: No album ID provided.");
  }

  const albumData = albumsData[parseInt(id)];

  const { playWithId } = usePlayerContext();

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
              className="inline-block w-5 mr-2"
              src={assets.spotify_logo}
              alt="spotify logo"
            />
            <b>Spotify</b> • 12,939 likes • <b>50 songs, </b>
            about 2 hours and 30 minutes
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-5">#</b>Title
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img className="w-4 m-auto" src={assets.clock_icon} alt="clock icon" />
      </div>
      <hr />
      {songsData.map((song, index) => (
        <div
          onClick={() => playWithId(song.id)}
          key={index}
          className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
        >
          <p className="text-white">
            <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
            <img className="w-10 mr-5 inline " src={song.image} />
            {song.name}
          </p>
          <p className="text-[0.93rem]">{albumData.name}</p>
          <p className="text-[0.93rem] hidden sm:block">7 days ago</p>
          <p className="text-[0.93rem] text-center">{song.duration}</p>
        </div>
      ))}
    </>
  );
}
