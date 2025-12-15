import CartSection from "./components/CartSection";
import NavBar from "./components/NavBar";
import Home from "./pages/Home"
import Shop from "./pages/Shop";
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/home"} element={<Home />} />
          <Route path={'/shop'} element={<Shop/>}/>
      </Routes>
      <CartSection/>
    </div>
  )
}

export default App