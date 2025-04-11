import { assets } from "../assets/assets";

export default function Navbar() {
  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer hover:bg-gray-500 "
            src={assets.arrow_left}
          />
          <img
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer hover:bg-gray-500"
            src={assets.arrow_right}
          />
        </div>
        <div className="flex items-center gap-4">
          <p className="bg-white text-black text-[0.93rem] px-4 py-1 rounded-2xl hidden md:block cursor-pointer hover:scale-105 hover:transition-transform duration-100">
            Explore Premium
          </p>
          <p className="bg-black text-gray-400 py-1 px-3 rounded-2xl text-[15px] cursor-pointer hover:text-gray-100 hover:scale-105 hover:transition-transform duration-100">
            Install App
          </p>
          <div className="bg-blue-600 text-black w-7 h-7 rounded-full flex items-center justify-center">
            J
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4 cursor-pointer">
        <p className="bg-white text-black px-3 py-1 rounded-2xl  hover:bg-gray-200 ">
          All
        </p>
        <p className="bg-gray-700 text-white px-4 py-1 rounded-2xl hover:bg-gray-300">
          Music
        </p>
        <p className="bg-gray-700 text-white px-4 py-1 rounded-2xl hover:bg-gray-300">
          Podcasts
        </p>
      </div>
    </>
  );
}
