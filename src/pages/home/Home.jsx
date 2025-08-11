import { Button } from "@material-tailwind/react";
import { useState } from "react"

export default function Home() {

  const [count, setCount] = useState(0);



  return (
    <div className="p-5">

      <h1>{count}</h1>

      <Button>Increment</Button>
      <br />
      <br />
      <Button>Decrement</Button>

    </div>
  )
}
