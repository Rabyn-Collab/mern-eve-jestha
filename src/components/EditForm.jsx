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
import { Spinner } from "./ui/spinner";
import { updateEmployee } from "../lib/action";


export default function EditForm({ employee }) {
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
              fullname: employee.fullname,
              position: employee.position,
              age: employee.age
            }}

            onSubmit={(val) => {
              startTransition(async () => {
                const res = await updateEmployee(employee.id, val);
                if (res.success) {
                  toast.success(res.message);
                  router.back();
                } else {
                  toast.error(res.message);
                }
              })

            }}

          >

            {({ values, handleChange, handleSubmit, touched, errors }) => (
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">

                    <Label htmlFor="fullname">Full Name</Label>
                    <Input
                      id="fullname"
                      type="text"
                      value={values.fullname}
                      onChange={handleChange}
                      placeholder="John Doe"

                    />
                    {touched.fullname && errors.fullname && <p className="text-red-500">{errors.fullname}</p>}
                  </div>

                  <div className="grid gap-2">

                    <Label htmlFor="position">Position</Label>
                    <Input
                      id="position"
                      type="text"
                      value={values.position}
                      onChange={handleChange}
                      placeholder="Developer"

                    />
                    {touched.position && errors.position && <p className="text-red-500">{errors.position}</p>}
                  </div>


                  <div className="grid gap-2">

                    <Label htmlFor="age">Age</Label>
                    <Input
                      id="age"
                      type="number"
                      value={values.age}
                      onChange={handleChange}
                      placeholder="25"

                    />
                    {touched.age && errors.age && <p className="text-red-500">{errors.age}</p>}
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

    </div>
  )
}
