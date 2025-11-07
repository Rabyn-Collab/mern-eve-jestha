interface ChildItemProps {
  name: string,
  age: number,
  func(): string
}


export default function ChildItem({ name, age, func }: ChildItemProps) {


  return (
    <div onClick={func}>

      <h1>s;dfjs;dlfj</h1>

    </div>
  )
}
