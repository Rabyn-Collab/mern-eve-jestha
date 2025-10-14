import axios from "axios";
import EditForm from "../../../../components/EditForm";


export default async function Page({ params }) {
  const { id } = await params;
  const response = await axios.get(`https://60f3af443cb0870017a8a007.mockapi.io/employees/${id}`);
  const employee = response.data;
  return (
    <div>
      <EditForm employee={employee} />

    </div>
  )
}
