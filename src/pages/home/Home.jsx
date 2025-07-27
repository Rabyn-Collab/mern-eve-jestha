import { faker } from "@faker-js/faker"
import { Button } from "@material-tailwind/react";

export default function Home() {

  const handleData = () => {
    const newObject = {
      userId: faker.string.uuid(),
      username: faker.internet.username(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
    }
    console.log(newObject);
  }


  return (
    <div className="p-5">
      <Button onClick={handleData}>Click Here</Button>



    </div>
  )
}
