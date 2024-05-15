import { useRoutes } from 'react-router-dom'
import getRoutes from './routes'

 
function App() {
  const element = useRoutes(getRoutes());
  console.log(element,'element')
  return element;
}

export default App
