import { Button, Card, CardBody, CardFooter, CardHeader, Image } from "@heroui/react";
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

  //
  return (
    <div className="flex flex-col min-h-[calc(100vh-164px)]">
      <div className=" grid grid-cols-2 sm:grid-cols-4 grow">

        {data && data?.products.map((item, index) => (
          <Card
            key={index}
            isPressable
            onPress={() => nav(`/product/${item._id}`)}
            className="">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">Rs. {item.price}</p>
              <small className="text-default-500">{item.category}</small>
              <h4 className="font-bold text-large">{item.title}</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src={`${base}/${item.image}`}
                width={270}
              />
            </CardBody>
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
          disabled={Number(data.page) === data.totalPages || data.totalPages === 0}
        >Next</Button>
      </div>
    </div>
  );
}
