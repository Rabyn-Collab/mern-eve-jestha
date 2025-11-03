'use client';
import { collection, onSnapshot } from "@firebase/firestore";
import { useEffect, useState } from "react"
import { db } from "../lib/firebaseFirestore";
import { Button } from "../components/ui/button";
import { Edit2Icon } from "lucide-react";
import Link from "next/link";
import DeleteNews from "../components/DeleteNews";

export default function Page() {
  const [news, setNews] = useState([]);


  useEffect(() => {
    onSnapshot(collection(db, 'news'), (snapshot) => {
      const newsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setNews(newsData);
    })

  }, []);




  return (
    <div className="p-5 flex  flex-wrap grow gap-10 basis-4xl">
      {news.map((item) => {
        return <div key={item.id} className="mb-4 space-y-3">
          <h1>{item.title}</h1>
          <img className="h-[100px] " src={item.image} alt="" />
          <p>{item.detail}</p>
          <p className="text-sm font-bold">Author:-{item.author}</p>
          <div className="flex gap-5">
            <Link href={`/form/edit/${item.id}`}>
              <Button variant="outline" size="icon" aria-label="More Options">
                <Edit2Icon />
              </Button>
            </Link>

            <DeleteNews id={item.id} />
          </div>

        </div>
      })}


    </div>
  )
}
