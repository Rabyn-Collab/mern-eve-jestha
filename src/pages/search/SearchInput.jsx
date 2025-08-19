import { Button, Input } from "@material-tailwind/react";
import { Formik } from "formik";
import { useNavigate } from "react-router";

export default function SearchInput({ isNav, setSearchParams }) {

  const nav = useNavigate();
  return (
    <div className="mb-7">


      <Formik
        initialValues={{
          search: ''
        }}
        onSubmit={(val) => {
          if (isNav) {
            nav(`/search-blog?search=${val.search}`);
          } else {
            setSearchParams({ search: val.search });
          }

        }}
      >
        {({ handleChange, handleSubmit, values, }) => (
          <form onSubmit={handleSubmit} className="flex max-w-[400px] gap-5">
            <Input
              value={values.search}
              onChange={handleChange}
              label="search blog" name="search" />
            <Button type="submit">Search</Button>
          </form>
        )}
      </Formik>



    </div>
  )
}
