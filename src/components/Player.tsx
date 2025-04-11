import { songsData } from "../assets/assets";
import { assets } from "../assets/assets";

const playerIcons = Object.entries({
  shuffle_icon: assets.shuffle_icon,
  prev_icon: assets.prev_icon,
  play_icon: assets.play_icon,
  next_icon: assets.next_icon,
  loop_icon: assets.loop_icon,
});

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
  return (
    <div className="text-white h-[10%] bg-black flex justify-between items-center px-4 ">
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src={songsData[0].image} alt="song data" />
        <div className="w-[100px]">
          <p>{songsData[0].name}</p>
          <p className="overflow-hidden whitespace-nowrap text-ellipsis">
            {songsData[0].desc}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 m-auto ">
        <div className="flex gap-4">
          {playerIcons.map(([name, icon]) => (
            <img
              key={name}
              className="w-4 cursor-pointer hover:scale-120 active:text-gray-800 "
              src={icon}
              aria-label={name.replace(/_/g, " ")}
              alt={name.replace(/_/g, " ")}
            />
          ))}
        </div>

        <div className="flex items-center gap-5">
          <p className="text-sm">0:54</p>
          <div className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
            <hr className="h-1 border-none w-0 bg-blue-800 rounded-full" />
          </div>
          <p className="text-sm">3:28</p>
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
              className="w-4 cursor-pointer"
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
