import { X } from 'lucide-react';
import { useCartContext } from '../CustomHooks/CardIdHooks';

const Items = () => {

  const cards = useCartContext(); 

  return (
    <div className='overflow-y-scroll pb-72 h-full '>
      { cards.products.map((items, index) => (
        <div key={index} className='flex justify-around items-center py-6 border-b border-gray-300 my-3'>
        <div className='w-32 '>
            <img src={items.img} alt="" className='object-cover'/>
        </div>
        <div>
            <h3>{items.name}</h3>
            <p className='text-gray-500'>${items.price}</p>
        </div>
        <div className='flex justify-between gap-3 items-center'>

            <div className=''>
              <p><span className='text-gray-500'>QTY :</span> {items.quantity}</p>
              <p><span className='text-gray-500'>Total :</span>$ {`${items.price * items.quantity}`} </p>
            </div>

            <X size={24} strokeWidth={1.5}  className='ml-8' 
            onClick={() => cards.removeProduct(items.id)}/>
        </div>
        </div>
      )) 
    }   
    
    </div>
  )
}

export default Items
