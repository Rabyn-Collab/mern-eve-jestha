import { NavLink } from "react-router";

export default function Header() {
  return (
    <div className="bg-[#F44336] text-white   flex items-baseline shadow-2xl">

      <h1 className="text-2xl bg-white text-black px-2 py-2">Home</h1>

      <nav className="space-x-9">
        <NavLink className={'hover:bg-white hover:py-[10px] px-5 hover:text-black'} to={'/about'}>Link1</NavLink>
        <NavLink to={'/contact'}>Link2</NavLink>
        <NavLink to={'/contact'}>Link3</NavLink>
        <NavLink to={'/contact'}>Link4</NavLink>
      </nav>

    </div>
  )
}
