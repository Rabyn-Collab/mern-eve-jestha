import { NavLink } from "react-router";

export default function Header() {
  return (
    <div className="bg-black text-white px-5 py-2 flex items-baseline justify-between">

      <h1 className="text-2xl">React</h1>

      <nav className="space-x-9">
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/contact'}>Contact</NavLink>
      </nav>

    </div>
  )
}
