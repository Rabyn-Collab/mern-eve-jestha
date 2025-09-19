import { Card, CardBody, CardFooter, Image } from "@heroui/react";
import { useGetProductsQuery } from "./productApi";
import { base } from "../../app/mainApi";
import { useNavigate } from "react-router";

export default function ProductList() {
  const { isLoading, error, data } = useGetProductsQuery();
  const nav = useNavigate();


  if (isLoading) return <h1>Loading....</h1>
  if (error) return <h1 className="text-red-500">{error.message}</h1>

  return (
    <div className="gap-5 grid grid-cols-2 sm:grid-cols-4">

      {data && data.map((item, index) => (

        <Card

          key={index} isPressable shadow="sm" onPress={() => nav(`/product/${item._id}`)}>
          <CardBody className="overflow-visible p-0">
            <Image
              alt={item.title}
              className="w-full object-cover h-[140px]"
              radius="lg"
              shadow="sm"
              src={`${base}/${item.image}`}
              width="100%"
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">Rs. {item.price}</p>
          </CardFooter>
        </Card>
      ))}

    </div>
  );
}
