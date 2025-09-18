import { useNavigate, useParams } from "react-router"
import { useGetProductQuery } from "./productApi";
import { Button, Image } from "@heroui/react";
import { base } from "../../app/mainApi";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../carts/cartSlice";


export default function Product() {
  const { carts } = useSelector(state => state.cartSlice);
  const { user } = useSelector(state => state.userSlice);
  const { id } = useParams();
  const nav = useNavigate();
  const cart = carts.find(cart => cart.id === id);
  const { isLoading, data, error } = useGetProductQuery(id);
  const [qty, setQty] = useState(cart ? cart?.qty : 1);
  const dispatch = useDispatch();
  if (isLoading) return <h1>Loading....</h1>
  if (error) return <h1 className="text-red-500">{error.message}</h1>

  return (
    <div className="gap-5 grid grid-cols-3 p-5">

      <div>
        <Image
          alt={data.title}
          className="w-full object-cover "
          radius="lg"
          shadow="sm"
          src={`${base}/${data.image}`}
          width="100%"
        />

      </div>
      <div className="space-y-3">
        <h1>{data.title}</h1>
        <h1>{data.description}</h1>
        <h1>Rs.{data.price}</h1>
        <h1> Brand: {data.brand}</h1>

        <div className="mt-10 space-y-5">

          <div className="flex gap-3 items-center">
            <Button
              onPress={() => setQty(qty - 1)}
              disabled={qty === 1}
              isIconOnly aria-label="Like" color={qty === 1 ? 'default' : 'danger'} size="sm">
              <i className="fa-solid fa-minus"></i>
            </Button>
            <h1 className="text-xl">{qty}</h1>
            <Button

              disabled={qty === data.stock}
              onPress={() => setQty(qty + 1)}
              isIconOnly aria-label="Like"
              color={qty === data.stock ? 'default' : 'danger'}
              size="sm">
              <i className="fa-solid fa-plus"></i>

            </Button>
          </div>

          <Button
            disabled={!user || user?.role === 'Admin'}
            color={user && user?.role === 'Admin' ? 'default' : 'secondary'}
            onPress={() => {
              dispatch(setCart({
                id: data._id,
                title: data.title,
                image: data.image,
                price: data.price,
                stock: data.stock,
                qty
              }));
              nav('/cart');
            }}>ADD TO CART</Button>
        </div>



      </div>


    </div>
  )
}
