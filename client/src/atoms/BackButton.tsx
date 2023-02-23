import { FaArrowLeft, FaHome } from "react-icons/fa"
import { Link } from "react-router-dom"

function BackButton() {
  return (
    <Link className="btn btn-primary rounded-lg flex  py-2 px-3 items-center ml-2 self-start text-white" to='/'><FaArrowLeft className="mr-2"/><FaHome className="text-xl" /> </Link>
  )
}

export default BackButton