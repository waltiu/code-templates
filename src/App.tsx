import { useRoutes } from 'react-router-dom'
import getRoutes from './routes'
import { routerGuide } from './routes/constant';


let a = 1
console.log(a)
function App() {
  const element = useRoutes(getRoutes());
  return routerGuide(element);
}

export default App
