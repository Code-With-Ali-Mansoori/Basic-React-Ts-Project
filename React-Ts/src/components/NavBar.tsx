import {NavLink} from 'react-router-dom';
import { ShoppingCart } from 'lucide-react'
import UseCartHooks from '../CustomHooks/CartHooks';
import { useCartContext } from '../CustomHooks/CardIdHooks';

const NavBar = () => {

  const {Cart_Open, setcart_Open} = UseCartHooks();
  const cards = useCartContext(); 

  // if(){
  //   console.log(cards.products.length);
    
  // }   

  function OpenCart () {
    setcart_Open(!Cart_Open);   
  }

  return (
    <div className='flex justify-between px-10 fixed top-0 w-full bg-blue-500 items-center p-4 border-b-gray-300 border-b-2 mb-4' >
    <div className=" flex items-center gap-5 ">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
    </div>

    <div className='relative pr-8'>
      <ShoppingCart size={24} strokeWidth={2} onClick={OpenCart}/>
      <small className='bg-red-500 absolute top-2 left-4 px-2 rounded-4xl font-medium text-white '>
        {cards.products.length > 0 && `+${cards.products.length}`}
      </small>
    </div>

    </div>
  )
}

export default NavBar
