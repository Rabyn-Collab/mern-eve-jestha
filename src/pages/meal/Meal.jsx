import { useParams } from "react-router"

export default function Meal() {
  const { id } = useParams();
  console.log(id);
  return (
    <div>

    </div>
  )
}
