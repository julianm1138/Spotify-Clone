import { usePlayerContext } from "../Hooks";

interface SongCardProps {
  name: string;
  image: string;
  desc: string;
  id: number;
}

export default function SongCard({ name, image, desc, id }: SongCardProps) {
  const { playWithId } = usePlayerContext();
  return (
    <div
      onClick={() => playWithId(id)}
      className="min-w-[11.25rem] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
    >
      <img className="rounded" src={image} alt="" />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
}
