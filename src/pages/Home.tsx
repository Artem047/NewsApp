import { Link } from "react-router-dom"
import MainPost from "../components/home/MainPost"
import { category_tag } from "../data/data"

const Home = () => {
  return (
    <div>
        <div className="flex justify-around">
            {category_tag.map((tag, id) => {
                return (
                    <Link to={tag.link} key={id} className="flex justify-center items-center">
                        <p className="absolute text-white uppercase">#{tag.text}</p>
                        <img src={tag.image} alt={tag.text} className="relative rounded-xl -z-10" />
                    </Link>
                )
            })}
        </div>
        {/* <MainPost /> */}
    </div>
  )
}

export default Home