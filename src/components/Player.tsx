import { assets } from "../assets/assets";
import { usePlayerContext } from "../hooks/playerContext";

const miscIcons = Object.entries({
  plays_icon: assets.plays_icon,
  mic_icon: assets.mic_icon,
  queue_icon: assets.queue_icon,
  speaker_icon: assets.speaker_icon,
  volume_icon: assets.volume_icon,
  mini_player_icon: assets.mini_player_icon,
  zoom_icon: assets.zoom_icon,
});

export default function Player() {
  const {
    seekBar,
    seekBg,
    playerStatus,
    play,
    pause,
    track,
    time,
    previous,
    next,
    seekSong,
  } = usePlayerContext();
  return (
    <div className="text-white h-[10%] bg-black flex justify-between items-center px-4 ">
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src={track.image} alt="song data" />

        <div className="w-[100px]">
          <p>{track.name}</p>
          <p className="overflow-hidden whitespace-nowrap text-ellipsis">
            {track.desc}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 m-auto ">
        <div className="flex gap-4 items-center">
          <img
            className="w-4 cursor-pointer hover:scale-115"
            src={assets.shuffle_icon}
            alt="shuffle"
          />
          <img
            onClick={previous}
            className="w-4 cursor-pointer hover:scale-115"
            src={assets.prev_icon}
            alt="previous"
          />

          {playerStatus ? (
            <img
              className="w-4 cursor-pointer hover:scale-115"
              src={assets.pause_icon}
              alt="pause"
              onClick={pause}
            />
          ) : (
            <img
              className="w-4 cursor-pointer hover:scale-115"
              src={assets.play_icon}
              alt="play"
              onClick={play}
            />
          )}

          <img
            onClick={next}
            className="w-4 cursor-pointer hover:scale-115"
            src={assets.next_icon}
            alt="next"
          />
          <img
            className="w-4 cursor-pointer hover:scale-115"
            src={assets.loop_icon}
            alt="loop"
          />
        </div>

        <div className="flex items-center gap-5">
          <p className="text-sm ">
            {isNaN(time.currentTime.minute)
              ? "0"
              : String(time.currentTime.minute).padStart(1, "0")}
            :
            {isNaN(time.currentTime.second)
              ? ""
              : String(time.currentTime.second).padStart(2, "0")}
          </p>
          <div
            ref={seekBg}
            onClick={seekSong}
            className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer"
          >
            <hr
              ref={seekBar}
              className="h-1 border-none w-0 bg-blue-800 rounded-full"
            />
          </div>
          <p className="text-sm">
            {isNaN(time.totalTime.minute)
              ? "0"
              : String(time.totalTime.minute).padStart(1, "0")}
            :
            {isNaN(time.totalTime.second)
              ? "00"
              : String(time.totalTime.second).padStart(2, "0")}
          </p>
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-2 opacity-75">
        {miscIcons.map(([name, icon]) =>
          name === "volume_icon" ? (
            <div
              key={name}
              className="relative flex items-center justify-center"
            >
              <img
                className="w-4 cursor-pointer"
                src={icon}
                aria-label={name.replace(/_/g, " ")}
                alt={name.replace(/_/g, " ")}
              />
              <div className="ml-2 w-20 bg-white h-1 rounded cursor-pointer"></div>
            </div>
          ) : (
            <img
              className="w-4 cursor-pointer hover:scale-110 filter brightness-75 hover:brightness-125"
              key={name}
              src={icon}
              aria-label={name.replace(/_/g, " ")}
              alt={name.replace(/_/g, " ")}
            />
          )
        )}
      </div>
    </div>
  );
}
