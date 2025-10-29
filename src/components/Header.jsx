import Link from "next/link";
import UserUi from "./UserUi";

export default function Header() {
  return (
    <div className="flex items-center gap-5 px-5 bg-slate-300 py-2 justify-between">

      <div className="flex items-end gap-5">
        <h1 className="text-2xl font-bold">Next Js</h1>
        <UserUi />
      </div>


      <nav className="flex gap-10">
        <Link href={'/form/add'}>Add Employee</Link>


      </nav>

    </div>
  )
}
