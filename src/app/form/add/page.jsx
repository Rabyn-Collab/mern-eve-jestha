'use client';

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Formik } from "formik";
import { useTransition } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Spinner } from "../../../components/ui/spinner";
import { addDoc, collection } from "@firebase/firestore";
import { db } from "../../../lib/firebaseFirestore";

export default function Page() {

  const [isPending, startTransition] = useTransition();
  const router = useRouter();


  return (
    <div className="p-5">

      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Add Employee</CardTitle>


        </CardHeader>
        <CardContent>


          <Formik
            initialValues={{
              title: '',
              detail: '',
              image: '',
              author: ''
            }}

            onSubmit={(val) => {
              startTransition(async () => {
                await addDoc(collection(db, 'news'), val);
                toast.success('news added successfully');
                // router.back();
              } catch (err) {
                toast.error(err.message);
              }
            })

            }}

          try {
               
          >

            {({ values, handleChange, handleSubmit, touched, errors }) => (
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">

                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  type="text"
                  value={values.title}
                  onChange={handleChange}
                  placeholder="title"

                />
                {touched.title && errors.title && <p className="text-red-500">{errors.title}</p>}
              </div>

              <div className="grid gap-2">

                <Label htmlFor="detail">Detail</Label>
                <Input
                  id="detail"
                  type="text"
                  value={values.detail}
                  onChange={handleChange}
                  placeholder="detail"

                />
                {touched.detail && errors.detail && <p className="text-red-500">{errors.detail}</p>}
              </div>

              <div className="grid gap-2">

                <Label htmlFor="author">Author</Label>
                <Input
                  id="author"
                  type="text"
                  value={values.author}
                  onChange={handleChange}
                  placeholder="author"

                />
                {touched.author && errors.author && <p className="text-red-500">{errors.author}</p>}
              </div>

              <div className="grid gap-2">

                <Label htmlFor="image">Image</Label>
                <Input
                  id="image"
                  type="text"
                  value={values.image}
                  onChange={handleChange}
                  placeholder="image"

                />
                {touched.image && errors.image && <p className="text-red-500">{errors.image}</p>}
              </div>








            </div>

            {isPending ? <Button size="sm" className="w-full mt-6" disabled>
              <Spinner />
              Submit
            </Button> : <Button type="submit" className="w-full mt-6">
              Submit
            </Button>}


          </form>
            )}
        </Formik>

      </CardContent>

    </Card>

    </div >
  )
}
