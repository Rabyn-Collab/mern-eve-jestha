import { Button, Card, CardBody, CardFooter, Image } from "@heroui/react";
import { useGetProductsQuery } from "./productApi";
import { base } from "../../app/mainApi";
import { useNavigate, useSearchParams } from "react-router";
import { useEffect } from "react";

export default function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { isLoading, error, data } = useGetProductsQuery({
    page: searchParams.get('page') ?? 1
  });
  const nav = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [searchParams]);



  if (isLoading) return <h1>Loading....</h1>
  if (error) return <h1 className="text-red-500">{error.message}</h1>


  return (
    <div>
      <div className="gap-5 grid grid-cols-2 sm:grid-cols-4">

        {data && data?.products.map((item, index) => (

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
      <div className="flex justify-center items-center gap-5 my-3">
        <Button
          onPress={() => setSearchParams({ page: Number(data.page) - 1 })}
          disabled={Number(data.page) === 1}>Prev</Button>
        <h1>{data.page}</h1>
        <Button
          onPress={() => setSearchParams({ page: Number(data.page) + 1 })}
          disabled={Number(data.page) === data.totalPages}
        >Next</Button>
      </div>
    </div>
  );
}
