import { Button, Input, Typography } from "@material-tailwind/react";
import { Formik } from "formik";




export default function UserAddForm() {

  // const person = {
  //   name: 'ram',
  //   age: 90
  // };
  // const { name, age } = person;

  return (
    <div className="p-5">
      <Typography className="mb-5">User Detail Form</Typography>

      <Formik
        initialValues={{
          username: '',
          email: ''
        }}
        onSubmit={(val, { resetForm }) => {
          console.log(val);
          // resetForm();
        }}

      >
        {({ handleChange, handleSubmit, values }) => {

          return <form
            onSubmit={handleSubmit}
            className="max-w-[400px] space-y-5">
            <div>
              <Input
                value={values.username}
                onChange={handleChange}
                label="Username" name="username" />

            </div>

            <div>
              <Input
                value={values.email}
                onChange={handleChange}
                label="Email" type="email" name="email" />
            </div>

            <Button type="submit">Submit</Button>


          </form>
        }}

      </Formik>





    </div>
  )
}
