
export default async function Page({ params }) {
  const { id } = await params;
  console.log(id);
  return (
    <div>

      <h1>This is product Detail Page</h1>

    </div>
  )
}
