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
import axios from "axios";

export default function Page() {

  const [isPending, startTransition] = useTransition();
  const router = useRouter();


  return (
    <div className="p-5">

      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login Form</CardTitle>


        </CardHeader>
        <CardContent>


          <Formik
            initialValues={{
              name: '',
              email: '',
              password: ''
            }}

            onSubmit={(val) => {

              startTransition(async () => {
                try {
                  await axios.post('http://localhost:3000/api/auth/register', val);
                  toast.success('successfully registered');
                  router.back();

                } catch (err) {
                  toast.error(err.message);

                }
              });




            }}

          >

            {({ values, handleChange, handleSubmit, touched, errors }) => (
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-6">

                  <div className="grid gap-2">

                    <Label htmlFor="name">Username</Label>
                    <Input
                      id="name"
                      type="text"
                      value={values.name}
                      onChange={handleChange}
                      placeholder="John Doe"

                    />
                    {touched.name && errors.name && <p className="text-red-500">{errors.name}</p>}
                  </div>
                  <div className="grid gap-2">

                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="text"
                      value={values.email}
                      onChange={handleChange}
                      placeholder="@example.com"

                    />
                    {touched.email && errors.email && <p className="text-red-500">{errors.email}</p>}
                  </div>

                  <div className="grid gap-2">

                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={values.password}
                      onChange={handleChange}
                      placeholder="*******"

                    />
                    {touched.password && errors.password && <p className="text-red-500">{errors.password}</p>}
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

          <div className="mt-4 flex gap-2">
            <h1>Already have an Account ? </h1>
            <button className="cursor-pointer" onClick={() => router.back()} >Login</button>

          </div>

        </CardContent>

      </Card>

    </div>
  )
}
