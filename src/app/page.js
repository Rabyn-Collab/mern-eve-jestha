import axios from "axios"
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
export default async function Page() {

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
        </Card>
      ))}

    </div>
  )
}
