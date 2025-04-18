import { useRef, useState, useEffect } from "react";
import { songsData } from "../assets/assets";

export const usePlayer = () => {
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

  return {
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
};
