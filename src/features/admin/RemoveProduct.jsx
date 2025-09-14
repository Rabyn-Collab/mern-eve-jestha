import { Button } from "@heroui/button";
import { useSelector } from "react-redux";
import { useRemoveProductMutation } from "../products/productApi";
import toast from "react-hot-toast";

export default function RemoveProduct({ id }) {
  const { user } = useSelector((state) => state.userSlice);
  const [removeProduct, { isLoading }] = useRemoveProductMutation();
  const handleRemove = async () => {
    try {
      await removeProduct({ id, token: user.token }).unwrap();
      toast.success('Product removed successfully');
    } catch (err) {
      toast.error(err.data.message);

    }
  }
  return (
    <Button
      onPress={handleRemove}
      isLoading={isLoading}
      isIconOnly aria-label="Like" color="danger">
      <i className="fa-solid fa-trash"></i>
    </Button>

  )
}
