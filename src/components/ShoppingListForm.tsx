'use client';
import { useRef } from "react"

interface ShoppingListFormProps {
  addItem(product: string): void
}

export default function ShoppingListForm({ addItem }: ShoppingListFormProps) {
  const refEl = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addItem(refEl.current?.value!);
  }
  return (
    <div>

      <form onSubmit={handleSubmit} className="space-x-3">
        <input
          ref={refEl}
          className="border-2" type="text" placeholder="product name" />
        <button type="submit">Submit</button>
      </form>


    </div>
  )
}
