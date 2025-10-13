'use client';

import { Button } from "../components/ui/button";

export default function Error({ error, reset }) {
  return (
    <div className="p-5 space-y-4">
      <h1 className="text-red-500">{error.message}</h1>
      <Button onClick={reset}>Try again</Button>

    </div>
  )
}
