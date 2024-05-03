import Users from '../components/Users'
import LazyComponent from '../components/Lazy'
import ToastifyComponent from '../components/ToastifyComponent'
import CreditCard from '../components/CreditCard'
import NotFound from '../components/NotFound'
import { RouteInterface } from '../interface/Route.interface'

const routes: RouteInterface[] = [
  { path: '/', component: Users, name: 'Users' },
  { path: '/lazy', component: LazyComponent, name: 'Lazy' },
  { path: '/toastify', component: ToastifyComponent, name: 'Toastify' },
  { path: '/card', component: CreditCard, name: 'Credit card' },
  { path: '*', component: NotFound, name: 'NotFound' }
]

export default routes