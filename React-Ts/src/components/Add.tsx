import { useCartContext } from "../CustomHooks/CardIdHooks"

type CardId = {
  id : number;
  temp : object;
  setTemp : (value : object) => void;
}

const Add = ({id, temp, setTemp} : CardId) => {

  const cards = useCartContext(); 

  const handleAdd = (count : number) => {
      if (count < 5) {

        const newQty = count + 1;
        cards.setItemQty(newQty);

        setTemp({...temp, quantity : newQty});

        return newQty;
      }
  };

  const handleSubs = (count : number) => {
      if (count > 1) {

        const newQty = count - 1;

        cards.setItemQty(newQty);
        setTemp({...temp, quantity : newQty});

        return newQty;
      };
  };
 
  const ResetCount = () => {
      cards.setItemQty(0)
  };

  return (
    <div key={id} className={`${id == cards.cardId ? "block" : "hidden"}`}>
    <div className="flex gap-4 justify-center items-center">

        <button onClick={() => handleSubs(cards.itemQty)} className="bg-blue-600 text-2xl text-center text-white px-3 py-1 rounded hover:cursor-pointer active:bg-blue-700 ">-</button>

        <div>
            <span className="text-2xl font-medium" >{cards.itemQty} </span>
            in Cart
        </div>

        <button onClick={() => handleAdd(cards.itemQty)}  className="bg-blue-600 text-2xl text-center text-white px-3 py-1 rounded hover:cursor-pointer active:bg-blue-700 ">+</button>
    </div>

    <div className="mt-5 flex justify-center items-center">
        <button className="px-5 py-2 border hover:cursor-pointer bg-green-600 rounded text-white active:bg-green-800" 
        onClick={() =>{
            if (cards.itemQty == 0 ) {
              alert('⚠️ Please Select the Quantity of Items')

            } else {
              cards.setCardId(0); 
              ResetCount();
              cards.addProduct(temp); 
            }                       
        }}

        >Added</button>
    </div>
    </div>
  )
}

export default Add
