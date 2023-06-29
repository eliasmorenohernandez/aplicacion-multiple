/**
    * @description      : 
    * @author           : Admin
    * @group            : 
    * @created          : 24/06/2023 - 11:02:53
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 24/06/2023
    * - Author          : Admin
    * - Modification    : 
**/
import { useRef, useEffect } from "react";

const RefComponent = () => {
  const iRef = useRef();

  const focus = () => {
    console.log(iRef);
    iRef.current.focus();
  };

  const clear = () => {
    iRef.current.value = "";
  };

  const print = () => {
    alert(iRef.current.value);
  };

  return (
    <div className="bg-rose-300 flex justify-center items-center w-full flex-1">
      <div className="flex gap-4">
        <input type="text" id="input-test" ref={iRef} />
        <button onClick={focus}>Focus</button>
        <button onClick={clear}>Limpiar</button>
        <button onClick={print}>Imprimir</button>
      </div>
    </div>
  );
};

export default RefComponent;