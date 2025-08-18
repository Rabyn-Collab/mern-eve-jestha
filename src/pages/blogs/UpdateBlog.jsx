import { Button, Input, Textarea } from "@material-tailwind/react";
import { Formik } from "formik";
import * as Yup from 'yup';
import { useAddBlogMutation, useGetBlogQuery, useUpdateBlogMutation } from "./blogApi.js";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";

const blogSchema = Yup.object({
  title: Yup.string().min(5).required(),
  detail: Yup.string().min(10).required(),
  image: Yup.string().url().required()
});

export default function UpdateBlog() {
  const { id } = useParams();
  const { data, isLoading, error } = useGetBlogQuery(id);
  const [updateBlog, { isLoading: isLoad }] = useUpdateBlogMutation();

  const nav = useNavigate();
  if (isLoading) return <h1>Loading....</h1>
  if (error) return <p className="text-pink-700">{error.data}</p>

  return (
    <div className="p-5">

      <Formik
        initialValues={{
          title: data.title,
          detail: data.detail,
          image: data.image
        }}

        onSubmit={async (val) => {
          try {
            await updateBlog({
              id: data.id,
              data: val
            }).unwrap();
            toast.success('Blog Updated Successfully');
            nav(-1);
          } catch (err) {
            toast.error(err.data || err.data.message);

          }
        }}
        validationSchema={blogSchema}

      >
        {({ handleChange, handleSubmit, touched, values, errors }) => (
          <form onSubmit={handleSubmit} className="max-w-[400px] space-y-5">
            <div>
              <Input
                onChange={handleChange}
                value={values.title}
                label="Title" name="title"
              />
              {touched.title && errors.title && <p className="text-pink-700">{errors.title}</p>}
            </div>
            <div>
              <Textarea
                onChange={handleChange}
                value={values.detail}
                label="Detail" name="detail"
              />
              {touched.detail && errors.detail && <p className="text-pink-700">{errors.detail}</p>}
            </div>
            <div>

              <Input
                onChange={handleChange}
                value={values.image}
                label="ImageUrl" name="image"
              />
              {touched.image && errors.image && <p className="text-pink-700">{errors.image}</p>}
            </div>
            <Button loading={isLoad} type="submit">Submit</Button>

          </form>
        )}

      </Formik>


    </div>
  )
}
