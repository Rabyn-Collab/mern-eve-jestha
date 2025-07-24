import Article from "./Article.jsx";
import DisplaySec from "./DisplaySec";

export default function Home() {
  return (
    <div>




      <DisplaySec />
      <Article isSec={false} />
      <Article isSec={true} />


    </div>
  )
}
