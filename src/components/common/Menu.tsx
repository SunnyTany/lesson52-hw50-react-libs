import { NavLink } from 'react-router-dom'
import { RouteInterface } from '../../interface/Route.interface'
import routes from '../../utils/routes'

const Menu = () => {
  return (
    <nav className='container-flex'>
      <ul className="list">
        {routes.filter((route: RouteInterface) => route.name !== 'NotFound').map((route: RouteInterface, index: number) => {
          return (
            <li key={index}>
              <NavLink className="nav-link" to={route.path}>{route.name}</NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Menu