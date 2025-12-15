import { useContext } from "react"
import { contextData } from "../Context/contextCreate"

const UseCartHooks = () => {

    const Cartcontext = useContext(contextData)

    if(!Cartcontext ) {
      throw new Error('UseCartHooks must be used inside ContextProv')

    };

  return Cartcontext
}

export default UseCartHooks;