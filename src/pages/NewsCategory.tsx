import { useParams } from "react-router-dom"

const NewsCategory = () => {
    const { category } = useParams()
  return (
    <div>NewsCategory: {category}</div>
  )
}

export default NewsCategory