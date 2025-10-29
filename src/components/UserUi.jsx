'use client';

import { useSession } from "next-auth/react";
import Link from "next/link";

export default function UserUi() {
  const { data, status } = useSession();
  return (
    <div>

      {status === 'unauthenticated' ? <Link href={'/form/login'}>Login</Link> : <h1>Profile</h1>}


    </div>
  )
}
