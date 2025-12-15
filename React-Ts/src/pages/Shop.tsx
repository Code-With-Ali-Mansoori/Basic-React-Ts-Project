import Crads from "../components/Crads";
import { data }  from '../data';
import type { Product } from '../data';

const Shop = () => {

  return (
    <div className="px-4 font-medium pt-16">
     <h1 className="text-2xl"> Shop</h1>

     <div className="flex my-6 justify-center items-center flex-wrap">
      {
        data.map((e : Product, index) : React.ReactNode => (
         <Crads key={index} id={e.id} img={e.img} name={e.name} price={e.price}/>
        ))
      }
        
     </div>
  
    </div>
  )
}

export default Shop
