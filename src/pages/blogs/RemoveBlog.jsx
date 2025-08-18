import { Button } from "@material-tailwind/react";
import { useRemoveBlogMutation } from "./blogApi.js";
import toast from "react-hot-toast";

export default function RemoveBlog({ id }) {
  const [removeBlog, { isLoading }] = useRemoveBlogMutation();

  const handleRemove = async () => {
    try {
      await removeBlog(id).unwrap();
      toast.success('Blog Removed Successfully');
    } catch (err) {
      console.log(err);
      toast.error(err.data || err.data.message);
    }
  }

  return (
    <div>

      <Button onClick={handleRemove} loading={isLoading} size="sm" color="pink">Remove Blog</Button>

    </div>
  )
}
