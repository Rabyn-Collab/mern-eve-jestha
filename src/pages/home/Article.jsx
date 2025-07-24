import { FaAnchor, FaBullhorn } from "react-icons/fa6";
export default function Article({ isSec }) {
  return (
    <div className={`flex ${isSec ? 'gap-10 bg-[#F1F1F1]' : ' gap-5 bg-white'} p-24 max-lg:px-[20px] max-sm:flex-col`}>

      {isSec && <div className="max-sm:self-center">

        <FaBullhorn size={200} color="#F44336" />
      </div>}
      <div className="space-y-8 ">
        <h1 className="text-6xl">Lorem Ipsum</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

      </div>

      {!isSec && <div className="max-sm:self-center">
        <FaAnchor size={200} color="#F44336" />
      </div>}
    </div>
  )
}
