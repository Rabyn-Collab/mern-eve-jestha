import { Button, Checkbox, Input, Option, Radio, Select, Textarea, Typography } from "@material-tailwind/react";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { valSchema } from "./UserAddForm.jsx";
import { updateUser } from "./userSlice.js";




export default function UserUpdateForm() {

  const { users } = useSelector((state) => state.userSlice);
  const { id } = useParams();
  const user = users.find((user) => user.id === id);


  const dispatch = useDispatch();
  const nav = useNavigate();

  // const person = {
  //   id: 1,
  //   name: 'ram'
  // };
  // const per = { ...person, age: 90 };
  // console.log(per);


  return (
    <div className="p-5">
      <Typography className="mb-5">User Detail Form</Typography>

      <Formik
        initialValues={{
          username: user.username,
          email: user.email,
          gender: user.gender,
          habits: user.habits,
          country: user.country,
          bio: user.bio,

        }}
        onSubmit={(val, { resetForm }) => {
          dispatch(updateUser({ ...val, id: id }));
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
                checked={values.gender === 'male'}
                color="indigo"
                onChange={handleChange}
                label='Male' value={'male'} name="gender" />
              <Radio
                checked={values.gender === 'female'}
                color="purple"
                onChange={handleChange}
                label='Female' value={'female'} name="gender" />
              {errors.gender && touched.gender && <h1 className="text-pink-700">{errors.gender}</h1>}
            </div>

            <div>
              <Typography>Select your Habits</Typography>
              <Checkbox
                checked={values.habits.includes('dance')}
                onChange={handleChange}
                label='Dance' value={'dance'} name="habits" />
              <Checkbox
                checked={values.habits.includes('sing')}
                onChange={handleChange}
                label='Sing' value={'sing'} name="habits" />
              {errors.habits && touched.habits && <h1 className="text-pink-700">{errors.habits}</h1>}

            </div>

            <div>
              <Select
                value={values.country}
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
              <Textarea name="bio"
                value={values.bio}
                onChange={handleChange} label="Enter your Bio"></Textarea>
              {errors.bio && touched.bio && <h1 className="text-pink-700">{errors.bio}</h1>}
            </div>



            <Button type="submit">Submit</Button>


          </form>
        }}

      </Formik>





    </div>
  )
}
