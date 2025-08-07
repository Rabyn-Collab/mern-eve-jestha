import { NavLink } from "react-router";

export default function Header() {
  return (
    <div className="bg-black px-5 py-2 text-white flex items-center justify-between">
      <h1 className=" text-xl">Formik</h1>

      <nav>

        <NavLink to={'/add-user'}>Add User</NavLink>

      </nav>

    </div>
  )
}
