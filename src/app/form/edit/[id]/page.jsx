import { doc, getDoc } from "@firebase/firestore";
import EditForm from "../../../../components/EditForm";
import { db } from "../../../../lib/firebaseFirestore";


export default async function Page({ params }) {
  const { id } = await params;
  const response = await getDoc(doc(db, 'news', id));


  return (
    <div>
      <EditForm news={response.data()} id={id} />

    </div>
  )
}
