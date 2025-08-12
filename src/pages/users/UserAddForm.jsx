import { Button, Checkbox, Input, Option, Radio, Select, Textarea, Typography } from "@material-tailwind/react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import * as Yup from 'yup';
import { addUser } from "./userSlice.js";
import { nanoid } from "@reduxjs/toolkit";

const fileTypes = ['image/png', 'image/jpg', 'image/jpeg', 'image/webp', 'image/gif'];

const valSchema = Yup.object({
  username: Yup.string().min(5).max(50).required(),
  email: Yup.string().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'please provide valid email').required(),
  gender: Yup.string().required(),
  habits: Yup.array().min(1).required(),
  country: Yup.string().required(),
  bio: Yup.string().required(),
  // image: Yup.mixed().required().test('fileType', 'Unsupported File Type', (val) => {
  //   return fileTypes.includes(val.type);
  // }).test('fileSize', 'File Size is too large', (val) => {
  //   return val.size <= 5 * 1024 * 1024;
  // }),
})

export default function UserAddForm() {
  const dispatch = useDispatch();
  const nav = useNavigate();


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
          // image: '',
          // imagePrev: ''
        }}
        onSubmit={(val, { resetForm }) => {
          dispatch(addUser({ ...val, id: nanoid() }));
          nav(-1);

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
                setFieldValue('imagePrev', URL.createObjectURL(file));
                setFieldValue('image', file);

              }}
              label="Select An Image" type="file" name="image" />

            {errors.image && touched.image && <h1 className="text-pink-700">{errors.image}</h1>}

            {!errors.image && values.imagePrev && <img src={values.imagePrev} alt="" />} */}

            <Button type="submit">Submit</Button>


          </form>
        }}

      </Formik>





    </div>
  )
}
