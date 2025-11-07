import Post from "@/models/post";
import axios from "axios"



export default async function Page() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

  const posts: Post[] = response.data;




  return (
    <div className="p-5">

      {posts.map((post) => {
        return <div className="shadow-lg p-5" key={post.id} >
          <h1>{post.title}</h1>
          <p>{post.body}</p>

        </div>
      })}

    </div>
  )
}



// 'use client';
// import ShoppingList from "@/components/ShoppingList";
// import ShoppingListForm from "@/components/ShoppingListForm";
// import { v4 as uuidv4 } from 'uuid';
// import Item from "@/models/item";
// import { useState } from "react";

// export default function Page() {

//   const [items, setItem] = useState<Item[]>([

//   ]);

//   const addItem = (product: string) => {
//     setItem([...items, { id: uuidv4(), product, qty: Math.floor(Math.random() * 10 + 1) }])
//   }


//   return (
//     <div className="p-5">




//       <ShoppingListForm addItem={addItem} />

//       <ShoppingList items={items} />

//     </div>
//   )
// }
