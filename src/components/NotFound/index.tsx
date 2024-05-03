import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="container">
      <h2 className="title-error-page">404 error page</h2>
      <img src="https://static-00.iconduck.com/assets.00/404-page-not-found-illustration-2048x998-yjzeuy4v.png" className="image-error-page" alt="404"/>
      <p className="text-error-page">Nothing here ...</p>
      <Link className="link-error-page" to="/">Go back home</Link>
    </div>
  )
}

export default NotFound