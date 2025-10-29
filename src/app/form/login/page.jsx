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
import { signIn } from "next-auth/react";

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
              email: '',
              password: ''
            }}

            onSubmit={(val) => {

              startTransition(async () => {
                const res = await signIn(
                  'credentials',
                  {
                    email: val.email,
                    password: val.password,
                    redirect: false
                  }
                );

                if (res.ok) {
                  router.back();
                  toast.success('successfully login');
                } else if (res.error) {
                  toast.error(res.error);
                }


              })


            }}

          >

            {({ values, handleChange, handleSubmit, touched, errors }) => (
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">

                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="text"
                      value={values.email}
                      onChange={handleChange}
                      placeholder="@example.com"

                    />
                    {touched.fullname && errors.fullname && <p className="text-red-500">{errors.fullname}</p>}
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
                    {touched.position && errors.position && <p className="text-red-500">{errors.position}</p>}
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
