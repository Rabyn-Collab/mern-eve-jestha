import { useGetProductsQuery } from "../products/productApi"
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Button,

} from "@heroui/react";
import { useNavigate } from "react-router";

export const columns = [
  { name: "NAME", uid: "title" },
  { name: "CreatedAt", uid: "createdAt" },
  { name: "Price", uid: "price" },
  { name: "ACTIONS", uid: "actions" },
];


export default function AdminPanel() {
  const nav = useNavigate();
  const { isLoading, data, error } = useGetProductsQuery();
  if (isLoading) return <h1>Loading....</h1>
  if (error) return <h1 className="text-red-500">{error.message}</h1>



  return (
    <div className="p-5 space-y-4">
      <div className="flex justify-end">
        <Button onPress={() => nav('/add-form')}>Add Product</Button>
      </div>

      {data && <Table aria-label="Example table with custom cells">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={data}>
          {(item) => (
            <TableRow key={item._id}>
              {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>}


    </div>
  )
}


