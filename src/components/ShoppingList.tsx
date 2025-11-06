import Item from "@/models/item"


interface ShoppingListProps {
  items: Item[]
}



export default function ShoppingList({ items }: ShoppingListProps) {

  return (
    <div>
      <h1>ShoppingList</h1>
      {items.map((item) => {
        return <div key={item.id}>
          <h1>{item.product} - {item.qty}</h1>
        </div>
      })}
    </div>
  )
}
