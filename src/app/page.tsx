'use client';
import ShoppingList from "@/components/ShoppingList";
import ShoppingListForm from "@/components/ShoppingListForm";
import Item from "@/models/item";
import { useState } from "react";

export default function Page() {

  const [items, setItem] = useState<Item[]>([
    { id: 1, product: 'Shoes', qty: 2 },
    { id: 2, product: 'Watch', qty: 3 },
    { id: 3, product: 'Jeans', qty: 1 },
  ]);

  const addItem = (product: string) => {
    setItem([...items, { id: 4, product, qty: 5 }])
  }


  return (
    <div className="p-5">
      <ShoppingListForm addItem={addItem} />

      <ShoppingList items={items} />

    </div>
  )
}
