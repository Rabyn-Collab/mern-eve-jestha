import { Button, Checkbox, Input, Option, Radio, Select, Textarea, Typography } from "@material-tailwind/react";
import { Formik } from "formik";
import * as Yup from 'yup';


const valSchema = Yup.object({
  username: Yup.string().min(5).max(50).required(),
  email: Yup.string().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'please provide valid email').required(),
  gender: Yup.string().required(),
  habits: Yup.array().min(1).required(),
  country: Yup.string().required(),
  bio: Yup.string().required(),
  // image: ''
})

export default function UserAddForm() {


  return (
    <div className="p-5">
      <Typography className="mb-5">User Detail Form</Typography>

      <Formik
        initialValues={{
          username: '',
          email: '',
          gender: '',
          habits: [],
          country: '',
          bio: '',
          image: ''
        }}
        onSubmit={(val, { resetForm }) => {
          console.log(val);
          // resetForm();
        }}
        validationSchema={valSchema}

      >
        {({ handleChange, handleSubmit, values, setFieldValue, errors, touched }) => {

          return <form
            onSubmit={handleSubmit}
            className="max-w-[400px] space-y-5">
            <div>
              <Input
                value={values.username}
                onChange={handleChange}
                label="Username" name="username" />
              {errors.username && touched.username && <h1 className="text-pink-700">{errors.username}</h1>}

            </div>

            <div>
              <Input
                value={values.email}
                onChange={handleChange}
                label="Email" type="email" name="email" />
              {errors.email && touched.email && <h1 className="text-pink-700">{errors.email}</h1>}
            </div>

            <div>
              <Typography>Select your Gender</Typography>
              <Radio
                color="indigo"
                onChange={handleChange}
                label='Male' value={'male'} name="gender" />
              <Radio
                color="purple"
                onChange={handleChange}
                label='Female' value={'female'} name="gender" />
              {errors.gender && touched.gender && <h1 className="text-pink-700">{errors.gender}</h1>}
            </div>

            <div>
              <Typography>Select your Habits</Typography>
              <Checkbox
                onChange={handleChange}
                label='Dance' value={'dance'} name="habits" />
              <Checkbox
                onChange={handleChange}
                label='Sing' value={'sing'} name="habits" />
              {errors.habits && touched.habits && <h1 className="text-pink-700">{errors.habits}</h1>}

            </div>

            <div>
              <Select
                onChange={(e) => setFieldValue('country', e)}
                name="country"
                label="Select Your Country">
                <Option value="Nepal">Nepal</Option>
                <Option value="India">India</Option>
                <Option value="China">China</Option>
              </Select>
              {errors.country && touched.country && <h1 className="text-pink-700">{errors.country}</h1>}
            </div>

            <div>
              <Textarea name="bio" onChange={handleChange} label="Enter your Bio"></Textarea>
              {errors.bio && touched.bio && <h1 className="text-pink-700">{errors.bio}</h1>}
            </div>

            {/* <Input
              onChange={(e) => {
                const file = e.target.files[0];
                setFieldValue('image', URL.createObjectURL(file));
              }}
              label="Select An Image" type="file" name="image" /> */}
            {/* <h1>{values.image}</h1> */}

            {/* {values.image && <img src={values.image} alt="" />} */}

            <Button type="submit">Submit</Button>


          </form>
        }}

      </Formik>





    </div>
  )
}
