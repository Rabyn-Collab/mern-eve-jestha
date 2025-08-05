import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function SearchInput() {
  const [search, setSearch] = useState('');
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    nav(`/search-meal?query=${search}`);

  }
  return (
    <div className="p-5">

      <form onSubmit={handleSubmit} className="flex max-w-[400px] gap-5">

        <div className="grow">
          <Input
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            label="meal-search" />
        </div>
        <Button type="submit">Submit</Button>

      </form>



    </div>
  )
}
