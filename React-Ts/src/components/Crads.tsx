import Add from "./Add";
import { useCartContext } from "../CustomHooks/CardIdHooks";
import { useState } from "react";

export type ItemsType = {
  id : number;
  img: string;
  name: string;
  price: number;
  quantity : number;
};

const Cards = ({id, img, name, price , quantity}: ItemsType) => {

 // Temp 
 const [temp, setTemp] = useState<ItemsType | object>({});
 const cards = useCartContext();

  const collectData = (data : ItemsType) => {
    setTemp(data)
  };

  return (
    <div key={id}
      className="
        my-6 
        mx-auto
        w-full 
        max-w-sm 
        sm:max-w-md 
        lg:max-w-lg
        border-2 
        p-5 
        rounded-2xl 
        flex 
        flex-col 
        h-[360px]
      "
    >
      {/* Image */}
      <div className="h-48 sm:h-52 w-full overflow-hidden rounded-xl">
        <img
          src={img}
          alt={name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="my-4 flex items-center justify-between px-2">
        <p className="text-lg sm:text-xl font-semibold truncate">
          {name}
        </p>
        <p className="font-medium">${price}</p>
      </div>

      <div onClick={
        () => {
        cards.setCardId(id); 
        collectData({id, img, name, price, quantity}); 
        cards.setItemQty(0)
        }}>

        <div className={`bg-blue-600 active:bg-blue-700 text-center py-2 text-white rounded-lg cursor-pointer mb-2 ${cards.cardId == id? "hidden" : "block"} `}>
          + Add To Cart
        </div>
      </div>

      <Add id={id} temp={temp} setTemp={setTemp}/>
    </div>
  );
};

export default Cards;
