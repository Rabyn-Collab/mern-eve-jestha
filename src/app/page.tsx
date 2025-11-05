
type Person = {
  a: number,
  b?: string
};

export default function Page() {

  let pers: number | string | boolean = 'as;lkd';
  pers = false;


  const some = (person: Person) => {
    console.log(person);

  }

  const m: Person = { a: 90, };
  console.log(m.b);


  return (
    <div>

    </div>
  )
}
