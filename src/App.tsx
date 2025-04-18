import Display from "./components/Display";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";
import { usePlayerContext } from "./hooks/playerContext";

export default function App() {
  const { audioRef, track } = usePlayerContext();
  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  );
}
