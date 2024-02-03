import logo from './logo.svg';
import './App.css';
import Layout from './Layout/Layout';
import Portfolio from './Portfolio/Portfolio';
import Home from './Home/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './About/About';
import Contact from './Contact/Contact';

function App() {
  const routers =createBrowserRouter([
    {
      path:"/Start-React-js",element:<Layout/>,children:[
        {index:true,element:<Home/>},
        {path:"about",element:<About/>},
        {path:"portfolio",element:<Portfolio/>},
        {path:"contact",element:<Contact/>},
      ]
    }
  ])
  return (
    <>
         <RouterProvider router={routers}/>
    </>
  );
}

export default App;
