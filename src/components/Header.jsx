import { NavLink } from "react-router";

export default function Header() {
  return (
    <div className="bg-black px-5 py-2 text-white flex items-center justify-between">
      <h1 className=" text-xl">RTK Query</h1>

      <nav className="space-x-5">

        <NavLink to={'/popular'}>Popular</NavLink>
        <NavLink to={'/top-rated'}>Top Rated</NavLink>

      </nav>

    </div>
  )
}
