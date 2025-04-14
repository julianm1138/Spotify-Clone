import { createContext } from "react";
import { usePlayer } from "../hooks/usePlayer";

export const PlayerContext = createContext<ReturnType<typeof usePlayer> | null>(
  null
);

const PlayerContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const player = usePlayer();

  return (
    <PlayerContext.Provider value={player}>{children}</PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
