
export default async function Page({ params, searchParams }) {

  const { a } = await searchParams;
  console.log(a);
  return (
    <div>

      <h1>Hello jee</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex possimus nostrum commodi quos facere impedit nihil tempora molestiae a autem totam vero dignissimos, deleniti fugiat, ratione libero explicabo maxime error.</p>

    </div>
  )
}
