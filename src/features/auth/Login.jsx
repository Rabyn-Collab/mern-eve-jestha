import { Formik } from "formik";
import { Form, Input, Button } from "@heroui/react";
import * as Yup from "yup";

const loginSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().min(5).required(),
});


export default function Login() {
  return (
    <div className="p-5">

      <Formik
        initialValues={{
          email: '',
          password: ''
        }}

        onSubmit={(val) => {
          console.log(val)
        }}

        validationSchema={loginSchema}

      >

        {({ handleChange, handleSubmit, values, touched, errors }) => (
          <Form
            onSubmit={handleSubmit}
            className="w-full max-w-xs flex flex-col gap-4">
            <Input
              onChange={handleChange}
              value={values.email}
              label="Email"
              labelPlacement="outside"
              name="email"
              placeholder="Enter your email"
              type="email"
            />

            {errors.email && touched.email && <p className="text-red-500">{errors.email}</p>}

            <Input
              onChange={handleChange}
              value={values.password}
              label="Password"
              labelPlacement="outside"
              name="password"
              placeholder="Enter your password"
              type="password"
            />
            {errors.password && touched.password && <p className="text-red-500">{errors.password}</p>}



            <div className="flex gap-2">
              <Button color="primary" type="submit">
                Submit
              </Button>

            </div>

          </Form>
        )}


      </Formik>

    </div>
  )
}
