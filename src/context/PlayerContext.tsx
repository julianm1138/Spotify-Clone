import { createContext, useRef, useState, useEffect } from "react";
import { songsData } from "../assets/assets";

interface PlayerContextTypes {
  audioRef: React.RefObject<HTMLAudioElement | null>;
  seekBar: React.RefObject<HTMLHRElement | null>;
  seekBg: React.RefObject<HTMLDivElement | null>;
  track: (typeof songsData)[0];
  setTrack: React.Dispatch<React.SetStateAction<(typeof songsData)[0]>>;
  playerStatus: boolean;
  setPlayerStatus: React.Dispatch<React.SetStateAction<boolean>>;
  time: {
    currentTime: {
      second: number;
      minute: number;
    };
    totalTime: {
      second: number;
      minute: number;
    };
  };
  setTime: React.Dispatch<
    React.SetStateAction<{
      currentTime: { second: number; minute: number };
      totalTime: { second: number; minute: number };
    }>
  >;
  play: () => void;
  pause: () => void;
  playWithId: (id: number) => Promise<void>;
  previous: () => Promise<void>;
  next: () => Promise<void>;
  seekSong: (event: React.MouseEvent<HTMLDivElement>) => Promise<void>;
}

export const PlayerContext = createContext<PlayerContextTypes | null>(null);

const PlayerContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const seekBg = useRef<HTMLDivElement>(null);
  const seekBar = useRef<HTMLHRElement>(null);

  const play = () => {
    audioRef.current?.play();
    setPlayerStatus(true);
  };

  const pause = () => {
    audioRef.current?.pause();
    setPlayerStatus(false);
  };

  const playWithId = async (id: number) => {
    setTrack(songsData[id]);
    await audioRef.current?.play();
    setPlayerStatus(true);
  };

  const previous = async () => {
    if (track.id > 0) {
      await setTrack(songsData[track.id - 1]);
      await audioRef.current?.play();
      setPlayerStatus(true);
    }
  };
  const next = async () => {
    if (track.id < songsData.length - 1) {
      await setTrack(songsData[track.id + 1]);
      await audioRef.current?.play();
      setPlayerStatus(true);
    }
  };

  const seekSong = async (event: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      audioRef.current.currentTime =
        (event.nativeEvent.offsetX / seekBg.current!.offsetWidth) *
        audioRef.current.duration;
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.ontimeupdate = () => {
          seekBar.current!.style.width =
            Math.floor(
              (audioRef.current!.currentTime / audioRef.current!.duration) * 100
            ) + "%";

          setTime({
            currentTime: {
              second: Math.floor(audioRef.current!.currentTime % 60),
              minute: Math.floor(audioRef.current!.currentTime / 60),
            },
            totalTime: {
              second: Math.floor(audioRef.current!.duration % 60),
              minute: Math.floor(audioRef.current!.duration / 60),
            },
          });
        };
      }
    }, 1000);
  }, [audioRef]);

  const [track, setTrack] = useState(songsData[0]);
  const [playerStatus, setPlayerStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });

  const contextValue = {
    audioRef,
    seekBar,
    seekBg,
    track,
    setTrack,
    playerStatus,
    setPlayerStatus,
    time,
    setTime,
    play,
    pause,
    playWithId,
    previous,
    next,
    seekSong,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
