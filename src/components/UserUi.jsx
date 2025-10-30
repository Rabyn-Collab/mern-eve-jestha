'use client';

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useTransition } from "react";

export default function UserUi() {
  const { data, status } = useSession();

  const [isPending, startTransition] = useTransition();

  const handleLogOut = () => {

    signOut({
      redirect: false
    });

  }

  if (status === 'loading') return <h1>Loading....</h1>
  return (
    <div>

      {status === 'unauthenticated' ? <Link href={'/form/login'}>Login</Link> : <div className="flex items-end gap-6">
        <h1>{data.user.email}</h1>

        {isPending ? <Button size="sm" className="w-full mt-6" disabled>
          <Spinner />
          LogOut
        </Button> : <Button onClick={handleLogOut} >Log Out</Button>}

      </div>}


    </div>
  )
}
