import { useRoutes } from 'react-router-dom'
import getRoutes from './routes'
import { routerGuide } from './routes/constant';
import { useEffect } from 'react';


function App() {
  const element = useRoutes(getRoutes());
  
  useEffect(()=>{
    routerGuide()
  },[element])

  return element;
}

export default App
