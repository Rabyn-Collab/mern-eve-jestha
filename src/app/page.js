import axios from "axios"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { EditIcon } from "lucide-react";
import { Button } from "../components/ui/button";
import RemoveEmployee from "../components/RemoveEmployee";
import Link from "next/link";
import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";



//export const revalidate = 5;

export default async function Page() {
  const userData = await getServerSession(options);



  const response = await axios.get('https://60f3af443cb0870017a8a007.mockapi.io/employees');
  const employees = response.data;

  return (
    <div className="p-5">

      {employees.map((employee) => (
        <Card key={employee.id} className={'mb-3'}>
          <CardHeader>
            <CardTitle>{employee.fullname}</CardTitle>
            <CardDescription>{employee.position}</CardDescription>
            <CardAction>{employee.age}</CardAction>
          </CardHeader>
          <CardFooter className={'flex gap-5'}>
            <Link href={`/form/edit/${employee.id}`}>
              <Button variant="outline" size="icon">
                <EditIcon />
              </Button>
            </Link>

            <RemoveEmployee id={employee.id} />

          </CardFooter>
        </Card>
      ))}

    </div>
  )
}
