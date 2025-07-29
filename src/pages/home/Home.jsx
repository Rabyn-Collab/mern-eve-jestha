import { faker } from "@faker-js/faker";
import { Button, IconButton } from "@material-tailwind/react";
import { useState } from "react"


export default function Home() {

  const [data, setData] = useState([]);


  const handleData = () => {
    const newData = {
      id: faker.string.uuid(),
      name: faker.internet.displayName(),
      image: faker.image.personPortrait()
    };
    setData((prev) => [...prev, newData]);
  }

  const removeData = (id) => {

  }

  console.log(data);


  return (
    <div className="p-5">
      <Button onClick={handleData}>Click</Button>
      <div className="grid grid-cols-4 gap-5 mt-5">


        {data.map((user, index) => {
          return <div key={user.id} className="space-y-2">
            <h1>{user.name}</h1>
            <img className="h-[250px] w-full object-cover" src={user.image} alt="" />
            <div className="flex justify-end">
              <IconButton color="pink" size="sm">
                <i className="fas fa-trash" />
              </IconButton>
            </div>

          </div>

        })}

      </div>






    </div>
  )
}
