import Link from "next/link";

export default function Header() {
  return (
    <div className="flex items-center gap-5 ">

      <h1>Logo</h1>
      <nav className="flex gap-10">

        <Link href={'/about'}>About</Link>
        <Link href={'/contact'}>Contact</Link>

      </nav>

    </div>
  )
}
