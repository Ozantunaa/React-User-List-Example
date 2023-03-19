import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import SingIn from './pages/SingIn'

const router = createBrowserRouter([
  {
    path:"/",
    element:<SingIn/>
  },
  {
    path:"/home",
    element: <Home/>
  }
])
function App() {
  return (
   <div>
     <RouterProvider router={router}/>
   </div>
    
  );
}

export default App;
