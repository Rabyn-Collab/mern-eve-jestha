
export default function Article({ title, image }) {

  return (
    <div className="max-w-[350px] space-y-2">
      <img src={image} alt="" />
      <h1 className="font-bold text-2xl">{title}</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio ea, repudiandae voluptatum tenetur qui amet dolorem. Quisquam obcaecati praesentium maxime repellat, ex dicta deserunt accusantium! Laudantium perferendis beatae rerum nihil.</p>
      <button className="bg-black text-white px-[50px] py-2">Action</button>
    </div>
  )
}
