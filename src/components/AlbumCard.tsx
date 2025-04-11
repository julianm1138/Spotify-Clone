import { useNavigate } from "react-router-dom";

export default function AlbumCard({ image, name, desc, id }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/album/${id}`)}
      className="min-w-[11.25rem] p-2 px-3 mb-4 rounded cursor-pointer hover:bg-[#ffffff26] "
    >
      <img className="rounded w-50" src={image} />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
}
