import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";


export default function Home() {

  const [count, setCount] = useState(0);


  const someFunc = () => {
    console.log('hello jee');
  }

  useEffect(() => {
    someFunc();

  }, [count]);


  return (
    <div>
      <h1>{count}</h1>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>



    </div>
  )
}
