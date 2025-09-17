import { useDispatch, useSelector } from "react-redux";
import { base } from "../../app/mainApi";
import { Button } from "@heroui/button";
import { setCart } from "./cartSlice";

export default function Cart() {
  const { carts } = useSelector(state => state.cartSlice);
  const totalAmount = carts.reduce((acc, cart) => acc + cart.price, 0);
  const dispatch = useDispatch();

  return (
    <div className="p-5">


      {
        carts.map((cart, index) => {
          return (
            <div className="flex gap-10 p-5" key={index}>
              <img src={`${base}/${cart.image}`} className="w-20 h-20 object-cover" alt="" />
              <div className="space-y-2">
                <h1>{cart.title}</h1>
                <h1>Rs.{cart.price}</h1>
              </div>


              <div className="flex gap-3 items-center">
                <Button
                  onPress={() => {
                    dispatch(setCart({
                      ...cart,
                      qty: cart.qty - 1
                    }))
                  }}
                  disabled={cart.qty === 1}
                  isIconOnly aria-label="Like" color={cart.qty === 1 ? 'default' : 'danger'} size="sm">
                  <i className="fa-solid fa-minus"></i>
                </Button>
                <h1 className="text-xl">{cart.qty}</h1>
                <Button

                  onPress={() => {
                    dispatch(setCart({
                      ...cart,
                      qty: cart.qty + 1
                    }))
                  }}

                  disabled={cart.qty === cart.stock}

                  isIconOnly aria-label="Like"
                  color={cart.qty === cart.stock ? 'default' : 'danger'}
                  size="sm">
                  <i className="fa-solid fa-plus"></i>

                </Button>
              </div>

            </div>
          )
        })
      }

      <div className="mt-5 space-y-5">

        <h1>Total Amount: Rs.{totalAmount}</h1>
        <Button>Checkout</Button>

      </div>




    </div>
  )
}
