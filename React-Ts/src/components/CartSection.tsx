import { X } from 'lucide-react';
import Items from './Items';
import UseCartHooks from '../CustomHooks/CartHooks';
// import { useState } from 'react';

const CartSection = () => {

  const {Cart_Open , setcart_Open} = UseCartHooks();

  function OpenCart () {
      setcart_Open(!Cart_Open);
  };

  return (
    <div className={`'bg-yellow-200 border w-3/3 md:w-2/3 h-dvh fixed top-0 right-0 overflow-y-hidden overflow-y-hidden' ${Cart_Open ? 'block' : 'hidden'} `}>

      <div className='flex py-2 justify-between items-center px-2 mb-2'>
       
        <X className='absolute top-3 right-2' size={30} strokeWidth={1.5} onClick={OpenCart}/>
      </div>
  
    <div className='bg-amber-50 h-full '>
       <h1 className='text-2xl my-10 pt-4 ml-4 font-medium'>My Cart</h1>
        <div className=' h-full pb-6'>
          <Items/>
        </div>
    </div> 

    </div>
  )
}

export default CartSection
