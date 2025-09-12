import { Button, Input, Select, SelectItem, Textarea } from "@heroui/react";
import { Formik } from "formik";




const brands = [
  { key: "apple", label: "apple" },
  { key: "samsung", label: "samsung" },
  { key: "sony", label: "sony" },
  { key: "dolce", label: "dolce" },
  { key: "gucci", label: "gucci" },
  { key: "nike", label: "nike" },
  { key: "amazon", label: "amazon" },

];

const categories = [
  { key: "electronics", label: "electronics" },
  { key: "fashion", label: "fashion" },
  { key: "jewelery", label: "jewelery" },
  { key: "books", label: "books" },

];


export default function AddForm() {
  return (
    <div className="p-5">
      <Formik
        initialValues={{
          title: '',
          description: '',
          price: '',
          stock: '',
          category: '',
          brand: '',
          image: ''
        }}

        onSubmit={(val) => {
          console.log(val);
        }}

      >
        {({ handleChange, handleSubmit, errors, values, setFieldValue, touched }) => (
          <form action="" className="max-w-[400px] space-y-6">

            <div>
              <Input
                onChange={handleChange}
                value={values.title}
                name="title"
                label="Title" placeholder="Enter your title" type="title" />
            </div>
            <div>
              <Textarea
                onChange={handleChange}
                value={values.description}
                name="description"
                label="Description" placeholder="Enter your description" />
            </div>

            <div>
              <Input
                onChange={handleChange}
                value={values.price}
                name="price"
                label="Price" placeholder="Enter price" type="number" />
            </div>

            <div>
              <Input
                onChange={handleChange}
                value={values.stock}
                name="stock"
                label="Stock" placeholder="Enter stock" type="number" />
            </div>

            <div>
              <Select
                onChange={handleChange}
                value={values.category}
                name="category"

                label="Select Category">
                {categories.map((category) => (
                  <SelectItem key={category.key}>{category.label}</SelectItem>
                ))}
              </Select>
            </div>


            <div>
              <Select

                onChange={handleChange}
                value={values.brand}
                name="brand"
                label="Select Brand">
                {brands.map((brand) => (
                  <SelectItem key={brand.key}>{brand.label}</SelectItem>
                ))}
              </Select>
            </div>

            <div>
              <Input label="Image" placeholder="Select an Image" type="file" />
            </div>

            <Button type="submit">Submit</Button>

          </form>
        )}
      </Formik>

    </div>
  )
}
