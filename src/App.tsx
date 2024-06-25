import { useEffect } from 'react';
import { useRoutes } from 'react-router-dom'
import getRoutes from './routes'
import { routerGuide } from './routes/constant';


function App() {
  const element = useRoutes(getRoutes());
  
  useEffect(()=>{
    routerGuide()
  },[element])

  return element;
}

export default App
