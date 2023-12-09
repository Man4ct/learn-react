import { Link, useRouteError } from "react-router-dom"

const Error = () => {
  const error = useRouteError()
  console.log(error)
  return (
    <div><h1>error</h1>
    <Link to='/'>back home</Link>
    </div>
  )
}
export default Error