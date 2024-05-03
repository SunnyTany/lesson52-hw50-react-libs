import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RouteInterface } from './interface/Route.interface'
import Menu from './components/common/Menu'
import IdleComponent from './components/IdleComponent'
import routes from './utils/routes'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        {routes.map((route: RouteInterface, index: number) => {
          return (
            <Route key={index} path={route.path} element={<route.component />}/>
          )
        })}
      </Routes>
      <IdleComponent/>
    </BrowserRouter>
  )
}

export default App
